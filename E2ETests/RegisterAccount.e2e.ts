import { iGoToRegisterAccountForm } from '../Steps/TopBar.steps';
import { iFillTheFormWithCorrectData, iSubmitForm, iShouldTheTextConfirmingAboutCreatedAccount } from '../Steps/RegistrationForm.steps';
import { Helper } from '../E2ETests/Helpers/Helper';

fixture `Starting Page`
    .page `http://tutorialsninja.com/demo/`;

    test('[Register Account test] \
    GIVEN I tutorialsninja.com Home Page \
    WHEN I go to Register Account Form \
    AND I fill the form with correct data \
    AND I submit form \
    THEN I should the text confirming about created account', async t => {

        const firstName = 'TestFirstName';
        const lastName = 'TestLastName';
        const domain = 'testdomain.com';
        const uniqueEmail = Helper.makeUniqueEmail(firstName, lastName, domain);
        const password = 'testpassword1';

        await iGoToRegisterAccountForm(t);
        await iFillTheFormWithCorrectData(t, firstName, lastName, uniqueEmail, password);
        await iSubmitForm(t);
        await iShouldTheTextConfirmingAboutCreatedAccount(t);
    });