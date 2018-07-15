import React, {Component} from 'react';
import LoginForm from './../user/LoginForm';
import '../../styles/submit.css';
import RegisterForm from './../user/RegisterForm';
import About from './About';

export default class HomeContainer extends Component {
    render = () => {
        return (
            <section id="viewSignIn">
                <div className="welcome">
                    <About />
                    <div className="signup">
                        <LoginForm {...this.props} />
                        <RegisterForm />
                    </div>
                </div>
            </section>
        )
    }
}