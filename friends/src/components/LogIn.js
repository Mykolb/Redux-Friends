import React from 'react';
import { Button, Form, FormGroup, Input,} from 'reactstrap';

import { connect } from 'react-redux';
import { login } from '../actions';
import Loader from 'react-loader-spinner'



class LogIn extends React.Component {
    state = {
        identity: {
            username: '',
            password: ''
        }
    };


//function for input    
handleChanges = event => {
    this.setState({ 
        identity: {
            ...this.state.identity,
            [event.target.name]: event.target.value
        }
    });
}

login = event => {
    event.preventDefault();
    this.props
    .login(this.state.identity) //action creator called 'login'
    .then(() => this.props.histoy.push('/protected'));
};


render() {
    return (
    <div className='container'>
     <Form onSubmit={this.login}>
        <FormGroup>
        <Input
         type='text'
         placeholder='Username'
         name='username'
         onChange={this.handleChanges}
         value={this.state.identity.username}
            />
        </FormGroup>

        <FormGroup>
         <Input 
         type='password'
         placeholder='Password'
         name='password'
         onChange={this.handleChanges}
         value={this.state.identity.password}
        />
        </FormGroup>
        <Button size='large' >
        {this.props.loggingIn ?  (
            <Loader type='Hearts' color='pink' height='12' width='30' />
        ): (
          'Log In'
         )} 
            </Button>
     </Form>
    </div>
    )
}}

const mapStateToProps = state => {
    return {
     loggingIn: state.loggingIn
    };
}


export default connect(
    mapStateToProps, 
    { login }
    )(LogIn);