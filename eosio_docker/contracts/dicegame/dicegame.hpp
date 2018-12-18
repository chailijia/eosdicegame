#include <eosiolib/eosio.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/symbol.hpp>

using namespace std;
class dicegame : public eosio::contract
{

private:
  enum game_status : uint8_t
  {
    SUSPEND = 0,
    ONGOING = 1,
    MINING = 2,
    DONE = 3,

  };

  const map<std::string, uint64_t> betcase_reward = {
      {"SMALL", 1},
      {"BIG", 1},
      {"TRIPLE_ONE", 150},
      {"TRIPLE_TWO", 150},
      {"TRIPLE_THREE", 150},
      {"TRIPLE_FOUR", 150},
      {"TRIPLE_FIVE", 150},
      {"TRIPLE_SIX", 150},
      {"NUM_4", 150},
      {"NUM_5", 150},
      {"NUM_6", 150},
      {"NUM_7", 150},
      {"NUM_8", 150},
      {"NUM_9", 150},
      {"NUM_10", 150},
      {"NUM_11", 150},
      {"NUM_12", 150},
      {"NUM_13", 150},
      {"NUM_14", 150},
      {"NUM_15", 150},
      {"NUM_16", 150},
      {"NUM_17", 150},
      {"SINGLE_1", 1},
      {"SINGLE_2", 1},
      {"SINGLE_3", 1},
      {"SINGLE_4", 1},
      {"SINGLE_5", 1},
      {"SINGLE_6", 1}};

  struct st_transfer
  {
    account_name from;
    account_name to;
    eosio::asset quantity;
    std::string memo;
  };

// @abi table globals i64
  struct global
  {
    uint64_t id;
    uint64_t val;

    uint64_t primary_key() const { return id; }
    EOSLIB_SERIALIZE(global, (id)(val))
  };
  typedef eosio::multi_index<N(globals), global> globals_table;

// @abi table players i64
  struct player
  {
    account_name bettor;
    account_name referral;
    uint64_t bet_total;
    uint64_t bet_payout;
    uint64_t primary_key() const { return bettor; }

    EOSLIB_SERIALIZE(player, (bettor)(referral)(bet_total)(bet_payout))
  };

  typedef eosio::multi_index<N(players), player> players_table;

  // @abi table games i64
  struct game
  {
    uint64_t round;
    uint8_t dice_one = 0;
    uint8_t dice_two = 0;
    uint8_t dice_three = 0;
    eosio::time_point_sec start_at;
    eosio::time_point_sec stop_at;
    uint32_t player_num = 0;
    uint32_t total_amount = 0;
    uint8_t status = SUSPEND;
    checksum256 seed;

    uint64_t primary_key() const { return round; }

    EOSLIB_SERIALIZE(game, (round)(dice_one)(dice_two)(dice_three)(start_at)(stop_at)(player_num)(total_amount)(status)(seed))
  };

  typedef eosio::multi_index<N(games), game> games_table;

  //@abi table bets i64
  struct bet_info
  {
    uint64_t id;
    uint64_t bet_round;
    account_name bettor;
    std::string bet_case;
    eosio::asset bet_amount;
    bool active;
    eosio::time_point_sec bet_at;

    uint64_t primary_key() const { return id; }

    EOSLIB_SERIALIZE(bet_info, (id)(bet_round)(bettor)(bet_case)(bet_amount)(active)(bet_at))
  };

  typedef eosio::multi_index<N(bets), bet_info> bets_table;

   // @abi table seed
    struct seed {
      uint64_t        key = 1;
      uint32_t        value = 1;

      auto primary_key() const { return key; }
    };

    typedef eosio::multi_index<N(seed), seed> seed_table;

  globals_table _globals;
  players_table _players;
  games_table _games;
  bets_table _bets;
  seed_table _seed;

int random(const int range);

uint64_t get_bet_reward(int64_t bet_id);

template<typename Map> typename Map::const_iterator
find_prefix(Map const& map, typename Map::key_type const& key)
{
    typename Map::const_iterator it = map.upper_bound(key);
    while (it != map.begin())
    {
        --it;
        if(key.substr(0, it->first.size()) == it->first)
            return it;
    }

    return map.end(); // map contains no prefix
}

public:
  dicegame(account_name _self);

  void transfer(uint64_t sender, uint64_t receiver);

  ///@abi action
  void setactived(bool actived);

  // @abi action
  void setglobal(uint64_t id, uint64_t val);

  ///@abi action
  void login(account_name player, account_name referal);

  ///@abi action
  void startgame(account_name username);

  ///@abi action
  void revealdice(account_name username);

  ///@abi action
  void mine(uint64_t bet_id);

  ///@abi action
  void endgame(account_name username);

  ///@abi action
  void playgame(account_name username, uint8_t bet_num);
  ///@abi action
  void nextround(account_name username);

};
