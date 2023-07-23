import HomeScreen from '../screenobjects/HomeScreen';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await HomeScreen.waitForIsShown(true);
    });

    it('should get the home text element', async () => {
        
    });
});
