package io.android.pages.wdio;

import io.android.commonTemplates.HomePageTemplate;
import io.appium.java_client.AppiumBy;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static io.drivers.AndroidDriverManager.getDriver;

/**
 * @author Faisal Khatri
 * @since 2/23/2023
 **/
public class HomePage extends HomePageTemplate {

    private final WebDriverWait wait;

    public HomePage() {
        wait = new WebDriverWait(getDriver(), Duration.ofSeconds(10));
    }

    public void openPickerButton() {
        getDriver().findElement(AppiumBy.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[3]/android.widget.Button")).click();
    }

    public void navigateToLogin() {
        // getDriver().findElement(AppiumBy.accessibilityId(menuName)).click();
    }

    public String getActiveLoginTitle() {
        return getDriver().findElement(AppiumBy.iOSClassChain("**/XCUIElementTypeStaticText[`label == \"Login\"`]"))
                .getText();
    }

    public String getTitle() {
        return wait.until(ExpectedConditions
                .visibilityOfElementLocated(AppiumBy.androidUIAutomator("new UiSelector().text(\"WEBDRIVER\")")))
                .getText();
    }

    void openMenu(String menuName) {
        getDriver().findElement(AppiumBy.accessibilityId(menuName)).click();

    }

    public String tagLine() {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(
                AppiumBy.androidUIAutomator("new UiSelector().text(\"Demo app for the appium-boilerplate\")")))
                .getText();
    }

}
