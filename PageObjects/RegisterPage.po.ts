import { Selector } from 'testcafe';

export abstract class RegisterPage {
    static RegistrationForm(){
        return Selector('#account-register')
    }

    static RegistrationFormFirstNameInputField(){
        return this.RegistrationForm()
        .find('#input-firstname')
    }

    static RegistrationFormLastNameInputField(){
        return this.RegistrationForm()
        .find('#input-lastname')
    }

    static RegistrationFormEmailInputField(){
        return this.RegistrationForm()
        .find('#input-email')
    }

    static RegistrationFormTelephoneInputField(){
        return this.RegistrationForm()
        .find('#input-telephone')
    }

    static RegistrationFormPasswordInputField(){
        return this.RegistrationForm()
        .find('#input-password')
    }

    static RegistrationFormPasswordConfirmInputField(){
        return this.RegistrationForm()
        .find('#input-confirm')
    }

    static RegistrationFormPrivacyPolicyCheckbox(){
        return this.RegistrationForm()
        .find('input')
        .withAttribute('name', 'agree')
        .filterVisible();
    }

    static RegistrationFormNewsletterRadiobuttonYes(){
        return this.RegistrationForm()
        .find('input')
        .withAttribute('name', 'newsletter')
        .withAttribute('value', '1')
        .parent()
    }

    static RegistrationFormNewsletterRadiobuttonNo(){
        return this.RegistrationForm()
        .find('input')
        .withAttribute('name', 'newsletter')
        .withAttribute('value', '0')
        .parent()
    }

    static RegistrationFormContinueButton(){
        return this.RegistrationForm()
        .find('input')
        .withAttribute('value', 'Continue')
    }
}