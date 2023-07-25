import { clearIndexedDB, pause, restartApp, url } from '../helpers';
import Home from '../pageobjects/home.page';
import loginPage from '../pageobjects/login.page';
import Login from '../pageobjects/login.page';

describe('Home', () => {
  beforeEach(async () => {
    await restartApp('/home');
    await url('/home');
    await pause(500);
  });

  it('Should navigate to home page', async () => {
    const btn = await Home.navigateToLoginPageButton;

    await btn.tap();
    const loginTitle = await loginPage.loginIonTitle;
    
    const txt = await loginTitle.getText();
    
    console.log(txt);
    console.log(loginTitle.selector.toString());

    // expect(loginText).toBe('Login');
  });
});
