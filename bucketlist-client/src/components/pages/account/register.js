import React, { Component } from 'react';
import { connect } from 'react-redux'
import { registerAction } from '../../../redux/actions/AccountAction';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        })
    }


    onSubmit(e) {
        e.preventDefault()
        this.props.registerAction(this.state)
    }
    render() {
        return (
            <div className="error">
                <div className="error__content">
                    <div className="col-lg-8">
                        <div className="card card-small mb-4">
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Register</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-3">
                                    <div className="row">
                                        <div className="col">
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form-row">
                                                    <div className="form-group col-md-12">
                                                        <label for="feFirstName">Username</label>
                                                        <input type="text" className="form-control" name="username" placeholder="" onChange={this.onChange} required /> </div>
                                                    <div className="form-group col-md-12">
                                                        <label for="feLastName">Password</label>
                                                        <input type="password" className="form-control" name="password" placeholder="" onChange={this.onChange} required /> </div>
                                                    <div className="form-group col-md-12">
                                                        <label for="feLastName">Confirm Password</label>
                                                        <input type="password" className="form-control" name="confirmPassword" placeholder="" onChange={this.onChange} required /> </div>
                                                </div>
                                                <button type="submit" className="btn btn-accent" disabled={this.props.submitted}>Register</button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    submitted: state.account.submitted
})
export default connect(mapStateToProps, { registerAction })(Registration);