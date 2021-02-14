import { Selector } from 'testcafe';

export abstract class TopBar {
    static MyAccountTab(){
        return Selector('#top')
        .find('span')
        .withText('My Account')
    }

    static MyAccountTabDropdown(){
        return Selector('#top')
        .find('a')
    }

    static MyAccountTabDropdownOptionRegister(){
        return this.MyAccountTabDropdown()
        .withText('Register')
    }

    static MyAccountTabDropdownOptionLogin(){
        return this.MyAccountTabDropdown()
        .withText('Login')
    }

    static MyAccountTabDropdownOptionLogout(){
        return this.MyAccountTabDropdown()
        .withText('Logout')
    }
}