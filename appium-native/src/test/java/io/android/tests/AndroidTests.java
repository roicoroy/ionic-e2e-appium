package io.android.tests;

import org.testng.annotations.Test;

import io.ios.pages.HomePage;

/**
 * @author Ricardo Bento
 * @since 07/08/2023
 **/
public class AndroidTests extends BaseTest {

    @Test
    public void testHomePageTitle() {
        HomePage homePage = new HomePage();
        // try {
        //     Thread.sleep((1000));
        // } catch (InterruptedException e) {
        //     e.printStackTrace();
        // }
        // homePage.openPickerButton();
        // try {
        //     Thread.sleep((1000));
        // } catch (InterruptedException e) {
        //     e.printStackTrace();
        // }
    }
}