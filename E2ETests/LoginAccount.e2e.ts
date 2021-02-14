import { iLogout, iGoToLoginPage } from '../Steps/TopBar.steps';
import { iRegisterAccount } from '../Steps/RegistrationForm.steps';
import { iPutCorrectLoginData, iClickLoginButton, iShouldBeSuccessfullyLoggedToTheAccount } from '../Steps/LoginPage.steps';
import { Helper } from '../E2ETests/Helpers/Helper';

fixture `Starting Page`
    .page `http://tutorialsninja.com/demo/`;

    test('[Login Account test] \
    GIVEN I open tutorialsninja.com Home Page \
    AND I register account \
    AND I logout \
    WHEN I go to Login page \
    AND I put correct Login data \
    AND I click Login button \
    THEN I should be successfully logged to the account', async t => {

        const firstName = 'TestFirstName';
        const lastName = 'TestLastName';
        const domain = 'testdomain.com';
        const uniqueEmail = Helper.makeUniqueEmail(firstName, lastName, domain);
        const password = 'testpassword1';

        await iRegisterAccount(t, firstName, lastName, uniqueEmail, password);
        await iLogout(t);
        await iGoToLoginPage(t);
        await iPutCorrectLoginData(t, uniqueEmail, password);
        await iClickLoginButton(t);
        await iShouldBeSuccessfullyLoggedToTheAccount(t);
    });