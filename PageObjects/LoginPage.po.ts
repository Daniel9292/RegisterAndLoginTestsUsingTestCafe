import { Selector } from 'testcafe';

export abstract class LoginPage {
    static LoginPage(){
        return Selector('#content')
    }

    static LoginPageEmailInputField(){
        return this.LoginPage()
        .find('#input-email')
    }

    static LoginPagePasswordInputField(){
        return this.LoginPage()
        .find('#input-password')
    }

    static LoginPageLoginButton(){
        return this.LoginPage()
        .find('input')
        .withAttribute('value', 'Login')
    }
}