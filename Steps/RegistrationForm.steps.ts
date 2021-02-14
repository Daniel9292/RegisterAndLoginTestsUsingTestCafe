import { iGoToRegisterAccountForm } from './TopBar.steps';
import { RegisterPage } from '../PageObjects/RegisterPage.po';
import { SuccessPageInfo } from '../PageObjects/SuccessPageInfo.po';

export function iFillTheFormWithCorrectData(t: TestController, firstName:string, lastName: string, uniqueEmail: string, password: string): TestControllerPromise{
    return t
    .typeText(RegisterPage.RegistrationFormFirstNameInputField(), firstName)
    .typeText(RegisterPage.RegistrationFormLastNameInputField(), lastName)
    .typeText(RegisterPage.RegistrationFormEmailInputField(), uniqueEmail)
    .typeText(RegisterPage.RegistrationFormTelephoneInputField(), '111 222 333')
    .typeText(RegisterPage.RegistrationFormPasswordInputField(), password)
    .typeText(RegisterPage.RegistrationFormPasswordConfirmInputField(), password)
    .click(RegisterPage.RegistrationFormNewsletterRadiobuttonYes())
    .click(RegisterPage.RegistrationFormPrivacyPolicyCheckbox())
}

export function iSubmitForm(t: TestController): TestControllerPromise{
    return t
    .click(RegisterPage.RegistrationFormContinueButton())
}

export function iShouldTheTextConfirmingAboutCreatedAccount(t: TestController): TestControllerPromise{
    return t
    .expect(SuccessPageInfo.SuccessPageInfoHeader().textContent)
    .eql('Your Account Has Been Created!');
}

export async function iRegisterAccount(t: TestController, firstName:string, lastName: string, uniqueEmail: string, password: string): Promise <any>{
    await iGoToRegisterAccountForm(t);
    await iFillTheFormWithCorrectData(t, firstName, lastName, uniqueEmail, password);
    await iSubmitForm(t);
}