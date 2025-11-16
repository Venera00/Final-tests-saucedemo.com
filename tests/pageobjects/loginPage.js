class LoginPage {
  get usernameField() {
    return $('//input[@id="user-name"]');
  }

  get passwordField() {
    return $('//input[@id="password"]');
  }

  get loginBtn() {
    return $('//input[@id="login-button"]');
  }

  get errorMessage() {
    return $('//*[@data-test="error"]');
  }

  open() {
    return browser.url("https://www.saucedemo.com/");
  }
}

module.exports = new LoginPage();
