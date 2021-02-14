import { TopBar } from '../PageObjects/TopBar.po';

export function iGoToRegisterAccountForm(t: TestController): TestControllerPromise{
    return t
    .click(TopBar.MyAccountTab())
    .click(TopBar.MyAccountTabDropdownOptionRegister())
}

export function iLogout(t: TestController): TestControllerPromise{
    return t
    .click(TopBar.MyAccountTab())
    .click(TopBar.MyAccountTabDropdownOptionLogout())
}

export function iGoToLoginPage(t: TestController): TestControllerPromise{
    return t
    .click(TopBar.MyAccountTab())
    .click(TopBar.MyAccountTabDropdownOptionLogin())
}