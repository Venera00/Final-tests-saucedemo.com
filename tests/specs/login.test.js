const LoginPage = require("../pageobjects/loginPage");
const InventoryPage = require("../pageobjects/inventoryPage");

async function clearValue(input) {
  await input.click();
  await browser.keys(["Control", "a"]);
  await browser.keys(["Backspace"]);
}

describe("Login tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it("UC-1: should show error for empty credentials", async () => {
    await LoginPage.usernameField.setValue("test");
    await LoginPage.passwordField.setValue("test");

    await clearValue(LoginPage.usernameField);
    await clearValue(LoginPage.passwordField);

    await LoginPage.loginBtn.click();

    const errorText = await LoginPage.errorMessage.getText();
    expect(errorText).toEqual("Epic sadface: Username is required");
  });

  it("UC-2: should show error for empty password", async () => {
    await LoginPage.usernameField.setValue("standard_user");
    await LoginPage.passwordField.setValue("test");

    await clearValue(LoginPage.passwordField);

    await LoginPage.loginBtn.click();

    const errorText = await LoginPage.errorMessage.getText();
    expect(errorText).toEqual("Epic sadface: Password is required");
  });

  it("UC-3: should login with valid creds and see Swag Labs", async () => {
    await LoginPage.usernameField.setValue("standard_user");
    await LoginPage.passwordField.setValue("secret_sauce");

    await LoginPage.loginBtn.click();

    const title = await InventoryPage.headerTitle.getText();
    expect(title).toEqual("Swag Labs");
  });
});
