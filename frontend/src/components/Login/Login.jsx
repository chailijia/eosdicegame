import React, { Component } from 'react';
import { connect } from 'react-redux';

// Services and redux action
import { UserAction } from 'actions';

class Login extends Component {
    constructor(props) {
        // Inherit constructor
        super(props);
        // State for form data and error message
        this.state = {
            //   form: {
            //     username: '',
            //     key: '',
            //     error: '',
            //   },
        }
        // Bind functions
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="Login"> {/*back ground and position of Login form */}
                <div className="title">Elemental Battles - powered by EOSIO</div> {/*Logo of login form */}
                <div className="description">Please use the Account Name and Private Key generated in the previous page to log into the game.</div> {/*Description of form */}

                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Account name</label>
                        <input
                            type="text"
                            name="username"
                            // value={form.username}
                            placeholder="All small letters, a-z, 1-5 or dot, max 12 characters"
                            onChange={this.handleChange}
                            pattern="[\.a-z1-5]{2,12}"
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Private key</label>
                        <input
                            type="password"
                            name="key"
                            // value={form.key}
                            onChange={this.handleChange}
                            pattern="^.{51,}$"
                            required
                        />
                    </div>
                    <div className="field form-error">
                        {/* {error && <span className="error">{error}</span>} */}
                    </div>
                    <div className="bottom">

                    </div>
                </form>










            </div>



        );
    }
}

// Map all state to component props (for redux to connect)
const mapStateToProps = state => state;

// Map the following action to props
const mapDispatchToProps = {
    setUser: UserAction.setUser,
};

// Export a redux connected component
export default connect(mapStateToProps, mapDispatchToProps)(Login);