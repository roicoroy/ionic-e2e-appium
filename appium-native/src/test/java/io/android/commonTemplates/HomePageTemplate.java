package io.android.commonTemplates;

import org.openqa.selenium.WebElement;

import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.iOSXCUITFindBy;

public class HomePageTemplate extends CommonTemplate {

    @iOSXCUITFindBy(xpath = "**/XCUIElementTypeButton[`label == \\\"Open Picker\\\"`]")
    @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Open Picker\"]")
    public WebElement OpenPickerButton;
    
    @iOSXCUITFindBy(xpath = "**/XCUIElementTypeOther[`label == \\\"banner\\\"`]/XCUIElementTypeButton")
    @AndroidFindBy(xpath = "//android.widget.Button[@text=\"Open Picker\"]")
    public WebElement NavigateToLoginButton;
}
