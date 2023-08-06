package io.android.commonTemplates;
import org.openqa.selenium.WebElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;

public class CommonTemplate {
    /**
     * Common Elements
     */
    @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Go\"]")
    protected WebElement iOSLocatorForHideKeyBoardGoButton;

    @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Done\"]")
    protected WebElement iOSLocatorForHideKeyBoardDoneButton;

    @iOSXCUITFindBy(accessibility = "QLOverlayDoneButtonAccessibilityIdentifier")
    protected WebElement pdfDoneButton;

    @iOSXCUITFindBy(xpath = "//XCUIElementTypeButton[@name=\"Done\"]")
    @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Continue\"]")
    protected WebElement ContinueButtonOnForms;

}
