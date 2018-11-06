#include <eosiolib/eosio.hpp>

using namespace std;
class eosdicegame : public eosio::contract
{

private:
  //@abi table global i64
  struct global_item
  {
    uint64_t currrent_round;
    asset total_price;
    uint32_t total_users;
    bool active;

    EOSLIB_SERIALIZE(global_item, (currrent_round)(total_price)(total_users)(active))
  };
  typedef eosio::singleton<N(global), global_item> global_singleton;

  // @abi table players i64
  struct player
  {
    uint64_t id;
    account_name bettor;
    account_name referral;
    uint64_t bet_amount;
    uint64_t bet_num;
    time_point_sec bet_time;

    uint64_t primary_key() const { return id; }

    EOSLIB_SERIALIZE(player, (id)(bettor)(referral)(bet_amount)(bet_num)(bet_time))
  };

  typedef eosio::multi_index<N(players), player> players_table;

  // @abi table activebets i64
  struct game
  {
    uint64_t round;
    uint8_t dice_one = 0;
    uint8_t dice_two = 0;
    uint8_t dice_three = 0;
    uint32_t player_num = 0;
    uint32_t total_amount = 0;
    int8_t status = ONGOING;
    checksum256 seed;
    time_point_sec start_at;
    uint64_t primary_key() const { return round; }

    EOSLIB_SERIALIZE(game, (round)(dice_one)(dice_two)(dice_three)(player_num)(total_amount)(status)(seed)(start_at))
  };

  typedef eosio::multi_index<N(games), game> games_table;

  struct game_setting
  {
    uint64_t setting_id;
    uint64_t setting_value;

    EOSLIB_SERIALIZE(game_setting, (setting_id)(setting_value))
  };

  typedef eosio::multi_index<N(game_setting), game_setting> game_setting_table

      enum game_mode : int8_t {
        NOT_START = 0,
        ONGOING = 1,
        SUSPEND = 2,
        DONE = 3,
      };

  enum game_status : int8_t
  {
    ONGOING = 0,
    PLAYER_WON = 1,
    PLAYER_LOST = -1
  };

  typedef eosio::multi_index<N(seed), seed> seed_table;

  players_table _players;
  games_table _games;
  game_setting_table _game_setting;
  global_singleton _global;
  global_item _global_state;

public:
  eosdicegame(account_name self) : contract(self), _users(self, self), _seed(self, self) {}

  void startgame(account_name username);

  void endgame(account_name username);

  ///@abi action
  void setactived(bool actived);

  // @abi action
  void setstatus(uint64_t id, uint64_t val);

  void playgame(account_name username, uint8_t bet_num);

  void nextround(account_name username);

  void reveal(account_name username);
};
