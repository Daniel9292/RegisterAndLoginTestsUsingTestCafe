import { Selector } from 'testcafe';

export abstract class MyAccountPage {
    static MyAccountPage(){
        return Selector('#account-account')
        .find('#content')
    }

    static MyAccountPageMyAccountHeader(){
        return this.MyAccountPage()
        .child()
        .nth(0)
        .withText('My Account')
    }

    static MyAccountPageMyOrdersHeader(){
        return this.MyAccountPage()
        .child()
        .nth(2)
        .withText('My Orders')
    }
}