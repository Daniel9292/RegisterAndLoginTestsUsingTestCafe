import { LoginPage } from '../PageObjects/LoginPage.po';
import { MyAccountPage } from '../PageObjects/MyAccountPage.po';

export function iPutCorrectLoginData(t: TestController, uniqueEmail: string, password: string): TestControllerPromise{
    return t
    .typeText(LoginPage.LoginPageEmailInputField(), uniqueEmail)
    .typeText(LoginPage.LoginPagePasswordInputField(), password)
}

export function iClickLoginButton(t: TestController): TestControllerPromise{
    return t
    .click(LoginPage.LoginPageLoginButton())
}

export function iShouldBeSuccessfullyLoggedToTheAccount(t: TestController): TestControllerPromise{
    return t
    .expect(MyAccountPage.MyAccountPageMyAccountHeader().exists)
    .ok()
    .expect(MyAccountPage.MyAccountPageMyOrdersHeader().exists)
    .ok()
}