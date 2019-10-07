import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";

class AdminPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            password: null,
            passwordCorrect: false,
            showMessage: false
        }
    }

    checkPassword = (e) => {
        e.preventDefault();
        this.setState({ showMessage: !this.state.showMessage });
        if (this.state.password === '55ouvre-toi') {
            this.setState({ passwordCorrect: true });
            const { history } = this.props;
            history.push('/results');
        }
    }

    on_Change = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <div className='container'>
                <form className='form text-center'>
                    <div className='offset-md-4 col-md-4'>Enter admin password:</div>
                    <div className='offset-md-4 col-md-4'>
                        <input type='password' className='form-control center-block' value={this.state.password} onChange={this.on_Change} />
                    </div>
                    <div className='offset-md-4 col-md-4'>
                        <button className='btn btn-danger seeResult' onClick={this.checkPassword} >See results</button>
                    </div>
                </form>
                {this.state.showMessage && !this.state.passwordCorrect &&
                    <div className='error'>Sorry password not correct</div>}
            </div>
        )
    }

}

export default withRouter(AdminPage);