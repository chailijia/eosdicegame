#include "dicegame.hpp"

#define GLOBAL_ID_BET 101
#define GLOBAL_ID_HISTORY_INDEX 104
#define GLOBAL_ID_LARGE_HISTORY_INDEX 105
#define GLOBAL_ID_HIGH_ODDS_HISTORY_INDEX 106
#define GLOBAL_ID_ACTIVE 109
#define GLOBAL_ID_CURRENT_ROUND 110

#define SINGLE_BET_MAX_PERCENT 5

namespace dicegame
{
dicegame::dicegame(account_name name)
    : contract(name),
      _global(_self, _self),
      _players(_self, _self),
      _games(_self, _self),
      _game_setting(_self, _self)
{
    _global_state = _global.exists() ? _global.get() : get_default_parameters();
    _game_token_symbol = symbol_type(GAME_SYMBOL).name();
}

dicegame::~dicegame()
{
    _global.set(_global_state, _self);
}

global_item dicegame::get_default_parameters()
{
    global_item global;
    global.currrent_round = 0;
    global.active = false;
    global.total_users = 0;
    return global;
}

void dicegame::transfer(uint64_t sender, uint64_t receiver)
{
    print("\n>>> sender >>>", sender, " - name: ", name{sender});
    print("\n>>> receiver >>>", receiver, " - name: ", name{receiver});

    auto transfer_data = unpack_action_data<st_transfer>();
    if (transfer_data.from == _self || transfer_data.to != _self)
    {
        return;
    }

    print("\n>>> transfer data quantity >>> ", transfer_data.quantity);

    eosio_assert(transfer_data.quantity.symbol == string_to_symbol(4, "EOS"),
                 "Only accepts EOS");
    eosio_assert(transfer_data.quantity.is_valid(), "Invalid token transfer");
    eosio_assert(transfer_data.quantity.amount > 0, "Quantity must be positive");

    auto active_pos = _globals.find(GLOBAL_ID_ACTIVE);
    eosio_assert(active_pos != _globals.end() && active_pos->vavaluel, "Maintaining ...");

    eosio::token bet_token("eosio.token");
    eosio::asset contract_balance = bet_token.get_balance(_self, transfer_data.quantity.symbol);
    int64_t max = (balance.amount * SINGLE_BET_MAX_PERCENT / 100);
    eosio_assert(transfer_data.quantity <= max, "Bet amount exceeds");

    const std::size_t first_break = transfer_data.memo.find("-");
    const std::size_t second_break = transfer_data.find('-', first_break + 1);
    std::string bet_str = transfer_data.memo.substr(0, first_break);
    std::string ref_str = transfer_data.memo.substr(first_break + 1, second_break - first_break - 1);

    account_name referral = N(dicegame);

    const account_name possible_ref = eosio::string_to_name(ref_str.c_str());

    if (possible_ref != _self && possible_ref != transfer_data.from && is_account(possible_ref))
    {
        referral = possible_ref;
    }

    const uint64_t bet_case = std::stoull(bet_str, 0, 10);
    eosio_assert( bet_case >= 0 && bet_case <= 28, "Bet number must be >= 0, <= 28.");

    auto global_itr = _globals.find(GLOBAL_ID_CURRENT_ROUND);
      eosio_assert(global_itr != _globals.end(), "Unknown global id");
      uint64_t current_round = global_itr->val;
    // Todo: check bet_num by eosio_assert

    _bet.emplace(_self, [&](auto &bet) {
        bet.id = bet_id;
        bet.bet_round = current_round;
        bet.bettor = transfer_data.from;
        bet.bet_case = bet_case;
        bet.bet_amount = transfer_data.quantity.amount;
        bet.active = bet_num;
        bet.bet_at = time_point_sec(now());
    });
}

void dicegame::setactived(bool actived)
{
    require_auth(_self);
    _global_state.active = actived;
}

void dicegame::setglobal(uint64_t id, uint64_t val)
{
    require_auth(_self);
    auto pos = _game_setting.find(id);
    if (pos == _game_setting.end())
    {
        _game_setting.emplace(_self, [&](auto &info) {
            info.id = id;
            info.val = val;
        });
    }
    else
    {
        _status.modify(pos, 0, [&](auto &info) {
            info.val = val;
        });
    }
}

void dicegame::startgame(account_name username)
{
    // Ensure this action is authorized by contract owner
    require_auth(self);
    uint64_t next = _global_state.cur_round + 1;
    eosio_assert(next > _global_state.cur_round, "new round number is smaller than or equal with the old!");
    //Todo: initial for new game
    _games.emplace(self, [&](auto &info) {
        info.round = next;
        info.start_at = now();
    });
}

void dicegame::endgame(account_name username)
{
    // Ensure this action is authorized by the player
    require_auth(self);

    // add action to stop game
}

}; // namespace dicegame

uint64_t dicegame::get_bet_reward(uint8_t bet_case, int64_t amount)
{
    return bet_dict.at(bet_case) * amount + amount;
}

// Simple Pseudo Random Number Algorithm, randomly pick a number within 0 to n-1
int dicegame::random(const int range)
{
    // Find the existing seed
    auto seed_iterator = _seed.begin();

    // Initialize the seed with default value if it is not found
    if (seed_iterator == _seed.end())
    {
        seed_iterator = _seed.emplace(_self, [&](auto &seed) {});
    }

    // Generate new seed value using the existing seed value
    int prime = 65537;
    auto new_seed_value = (seed_iterator->value + now()) % prime;

    // Store the updated seed value in the table
    _seed.modify(seed_iterator, _self, [&](auto &s) {
        s.value = new_seed_value;
    });

    // Get the random result in desired range
    int random_result = new_seed_value % range;
    return random_result;
}

#define EOSIO_ABI_EX(TYPE, MEMBERS)                                                                             \
    extern "C"                                                                                                  \
    {                                                                                                           \
        void apply(uint64_t receiver, uint64_t code, uint64_t action)                                           \
        {                                                                                                       \
            if (action == N(onerror))                                                                           \
            {                                                                                                   \
                /* onerror is only valid if it is for the "eosio" code account and authorized by "eosio"'s      \
                 * "active permission */                                                                        \
                eosio_assert(code == N(eosio),                                                                  \
                             "onerror action's are only valid from the \"eosio\" system account");              \
            }                                                                                                   \
            auto self = receiver;                                                                               \
                                                                                                                \
            bool valid_internal_actions = code == self &&                                                       \
                                          action != N(transfer); /* put all external actions separated by && */ \
                                                                                                                \
            if (valid_internal_actions || code == N(eosio.token) || action == N(onerror))                       \
            {                                                                                                   \
                TYPE thiscontract(self);                                                                        \
                switch (action)                                                                                 \
                {                                                                                               \
                    EOSIO_API(TYPE, MEMBERS)                                                                    \
                }                                                                                               \
                /* does not allow destructor of thiscontract to run: eosio_exit(0); */                          \
            }                                                                                                   \
        }                                                                                                       \
    }

EOSIO_ABI_EX(dicegame, (transfer)(startgame)(endgame)(setactived)(setglobal)(playgame)(nextround)(reveal))
