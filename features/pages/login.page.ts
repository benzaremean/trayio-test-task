import { actionable } from '../../helpers';

class LoginPage {
  get usernameInput() {
    return $('[data-test="username"]');
  }
  get passwordInput() {
    return $('[data-test="password"]');
  }
  get loginBtn() {
    return $('[data-test="login-button"]');
  }

  login(username: string, password: string) {
    actionable(this.usernameInput).setValue(username);
    actionable(this.passwordInput).setValue(password);
    actionable(this.loginBtn).click();
  }

  open() {
    browser.url('/');
  }
}

export default new LoginPage();
