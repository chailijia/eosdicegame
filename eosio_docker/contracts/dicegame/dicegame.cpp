#include "dicegame.hpp"

#define GLOBAL_ID_BET 101
#define GLOBAL_ID_ACTIVE 102
#define GLOBAL_ID_ROUND 103
#define GLOBAL_ID_ROUND_DURATION 103
#define GLOBAL_ID_ROUND_MAX_PLAYERS 104

#define SINGLE_BET_MAX_PERCENT 5


dicegame::dicegame(account_name _self)
    : contract(_self),
      _globals(_self, _self),
      _players(_self, _self),
      _games(_self, _self),
      _bets(_self, _self),
      _seed(_self, _self)
{
}

void dicegame::transfer(uint64_t sender, uint64_t receiver)
{
    print("\n>>> sender >>>", sender, " - name: ", eosio::name{sender});
    print("\n>>> receiver >>>", receiver, " - name: ", eosio::name{receiver});

    auto transfer_data = eosio::unpack_action_data<st_transfer>();
    if (transfer_data.from == _self || transfer_data.to != _self)
    {
        return;
    }

    print("\n>>> transfer data quantity >>> ", transfer_data.quantity);

    eosio_assert(transfer_data.quantity.symbol == eosio::string_to_symbol(4, "EOS"), "Only accepts EOS");
    eosio_assert(transfer_data.quantity.is_valid(), "Invalid token transfer");
    eosio_assert(transfer_data.quantity.amount > 0, "Quantity must be positive");

    auto active_pos = _globals.find(GLOBAL_ID_ACTIVE);
    eosio_assert(active_pos != _globals.end() && active_pos->val, "Maintaining ...");

    // eosio::token bet_token("eosio.token");
    // eosio::asset contract_balance = bet_token.get_balance(_self, transfer_data.quantity.symbol);
    // int64_t max = (balance.amount * SINGLE_BET_MAX_PERCENT / 100);
    // eosio_assert(transfer_data.quantity <= max, "Bet amount exceeds");

    const std::size_t first_break = transfer_data.memo.find("-");
    const std::size_t second_break = transfer_data.memo.find('-', first_break + 1);
    std::string bet_str = transfer_data.memo.substr(0, first_break);
    std::string ref_str = transfer_data.memo.substr(first_break + 1, second_break - first_break - 1);

    account_name referral = N(dicegame);

    const account_name possible_ref = eosio::string_to_name(ref_str.c_str());

    if (possible_ref != _self && possible_ref != transfer_data.from && is_account(possible_ref))
    {
        referral = possible_ref;
    }

    // check bet case is valid
    auto betcase_itr = find_prefix(betcase_reward, bet_str);
    eosio_assert(betcase_itr != betcase_reward.end(), "Bet case doesn't exist");


    auto round_itr = _globals.find(GLOBAL_ID_ROUND);
    eosio_assert(round_itr != _globals.end(), "Unknown global id");
    uint64_t current_round = round_itr->val;

    auto betid_itr = _globals.find(GLOBAL_ID_BET);
    eosio_assert(betid_itr != _globals.end(), "Unknown global id");

    auto round_max_players_itr = _globals.find(GLOBAL_ID_ROUND_MAX_PLAYERS);
    eosio_assert(round_max_players_itr != _globals.end(), "Unknown global id");
    uint64_t round_max_players = round_max_players_itr->val;

    auto game_itr = _games.find(current_round);
    eosio_assert((game_itr->player_num < round_max_players), "current game was reached to max players");

    _games.modify(game_itr, 0, [&](auto &info) {
        info.player_num += 1;
    });
    // Todo: check bet_num by eosio_assert

    _bets.emplace(_self, [&](auto &bet) {
        bet.id = betid_itr->val;
        bet.bet_round = current_round;
        bet.bettor = transfer_data.from;
        bet.bet_case = bet_str;
        bet.bet_amount = transfer_data.quantity;
        bet.active = 1;
        bet.bet_at = eosio::time_point_sec(now());
    });
}

void dicegame::setactived(bool actived)
{
    require_auth(_self);
    auto pos = _globals.find(GLOBAL_ID_ACTIVE);
    if (pos == _globals.end())
    {
        _globals.emplace(_self, [&](auto &info) {
            info.id = GLOBAL_ID_ACTIVE;
            info.val = (uint64_t)actived;
        });
    }
}

void dicegame::setglobal(uint64_t id, uint64_t val)
{
    require_auth(_self);
    auto pos = _globals.find(id);
    if (pos == _globals.end())
    {
        _globals.emplace(_self, [&](auto &info) {
            info.id = id;
            info.val = val;
        });
    }
    else
    {
        _globals.modify(pos, 0, [&](auto &info) {
            info.val = val;
        });
    }
}
void dicegame::login(account_name bettor, account_name referral)
{
    require_auth(_self);
    auto pos = _players.find(bettor);
    if (pos == _players.end())
    {
        _players.emplace(_self, [&](auto &player) {
            player.bettor = bettor;
            player.referral = referral;
        });
    }
    else
    {
        _players.modify(pos, 0, [&](auto &player) {
            player.referral = referral;
        });
    }
}

void dicegame::startgame(account_name username)
{
    // Ensure this action is authorized by contract owner
    require_auth(_self);

    auto round_itr = _globals.find(GLOBAL_ID_ROUND);
    eosio_assert(round_itr != _globals.end(), "Unknown global id");
    uint64_t current_round = round_itr->val;

    // check current round was ended
    auto game_itr = _games.find(current_round);
    eosio_assert(game_itr->status == DONE, "current game hasn't done yet");

    uint64_t next = current_round + 1;
    eosio_assert(next > round_itr->val, "new round number should greater than the old!");
    //Todo: initial for new game
    _games.emplace(_self, [&](auto &game) {
        game.round = next;
        game.start_at = eosio::time_point_sec(now());
        game.status = ONGOING;
    });

    _globals.modify(round_itr, 0, [&](auto &info) {
        info.val = next;
    });
}

void dicegame::revealdice(account_name username)
{
    require_auth(_self);

    auto round_itr = _globals.find(GLOBAL_ID_ROUND);
    eosio_assert(round_itr != _globals.end(), "Unknown global id");
    uint64_t current_round = round_itr->val;

    auto round_duration_itr = _globals.find(GLOBAL_ID_ROUND_DURATION);
    eosio_assert(round_duration_itr != _globals.end(), "Unknown global id");
    uint64_t round_duration = round_duration_itr->val;



    auto game_itr = _games.find(current_round);
    eosio_assert(game_itr->status == ONGOING, "current game hasn't active yet");

    // get radom for three bet:
    _games.modify(game_itr, 0, [&](auto &game) {
        game.dice_one = random(6) + 1;
        game.dice_two = random(6) + 1;
        game.dice_three = random(6) + 1;
        game.stop_at = eosio::time_point_sec(now());
        game.status = MINING;
    });
}

void dicegame::endgame(account_name username)
{
    // Ensure this action is authorized by the player
    require_auth(_self);

    // add action to stop game
}


uint64_t dicegame::get_bet_reward(uint64_t bet_case, uint64_t amount_atm)
{
    auto game_itr = _games.find(current_round);

    auto bet_itr = _bets.find(bet_id);
    eosio_assert(bet_itr != _bets.end(), "bet id doesn't exist");

    switch{
        case 111:
        case 222:
        case 333:
        case 444:
        case 555:
        case 666:

        case 121

    }

    return bet_itr->amount*find_prefix(betcase_reward, bet_itr->bet_case)->second;
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

EOSIO_ABI_EX(dicegame, (transfer)(setactived)(setglobal)(login)(startgame)(revealdice)(mine)(endgame)(playgame)(nextround))
