const Base = require('../pageobjects/base')

class Login extends Base{ 

    get username() {
        return $('#loginFrm_loginname');
    }
    get password() {
        return $('#loginFrm_password');
    }
    get submitButton() {
        return $('[title="Login"]');
    }
    get alertMsg(){
        return $('.alert-danger')
    }
    get registerButton(){
        return $('#accountFrm > fieldset > button')
    }
    async openLogin(){
        await this.openPage();
        await this.logReg.click()
    }
    async login(login, password) {
        await this.username.setValue(login);
        await this.password.setValue(password);
        await this.submitButton.click();
    }
}
module.exports = {Login: new Login()}