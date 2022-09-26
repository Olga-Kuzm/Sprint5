const { Login } = require('./login.page')
const { Data } = require('../pageobjects/data')
const Base = require('./base')

class Register  extends Base {
    
    get firstName(){
        return $('#AccountFrm_firstname')
    }
    get lastName(){
        return $('#AccountFrm_lastname')
    }
    get email(){
        return $('#AccountFrm_email')
    }
    get phoneNumber(){
        return $('#AccountFrm_telephone')
    }
    get fax (){
        return $('#AccountFrm_fax')
    }
    get company (){
        return $('#AccountFrm_company')
    }
    get addres1 (){
        return $('#AccountFrm_address_1')
    }
    get address2(){
        return $('#AccountFrm_address_2')
    }
    get city (){
        return $('#AccountFrm_city')
    }
    get region (){
        return $('#AccountFrm_zone_id')
    }
    get postcode (){
        return $('#AccountFrm_postcode')
    }
    get country (){
        return $('#AccountFrm_country_id')
    }
    get loginName(){
        return $('#AccountFrm_loginname')
    }
    get password(){
        return $('#AccountFrm_password')
    }
    get passwordConfirm (){
        return $('#AccountFrm_confirm')
    }
    get agreement (){
        return $('#AccountFrm_agree')
    }
    get continueButton (){
        return $('*[type="submit"][title="Continue"]')
    }
    get option(){
        return $('//*[@id="AccountFrm_zone_id"]/option[5]')
    }
    async register(...arg){ 
        let data 
        if (arg[0]!==null){
            data = arg[0]
        }else if (arg[0] === null){
            data = Data.registerData    
        }         
        await this.firstName.setValue(data.firstName);
        await this.lastName.setValue(data.lastName);
        await this.addres1.setValue(data.address);
        await this.email.setValue(data.email)
        await this.city.setValue(data.city);
        await this.region.click()
        await this.option.click();
        await this.postcode.setValue(data.zip);
        await this.loginName.setValue(data.loginName);
        await this.password.setValue(data.password);
        await this.passwordConfirm.setValue(data.password)
        await this.agreement.click()
        const creds = {name : data.loginName, password : data.password}
        console.log(creds)
        console.log(data)
        this.creds = creds
        await this.continueButton.click()
        
    }

    async loginOrRegister(type, ...arg){
        if(type === 'login'){
            await Login.login(arg[0], arg[1])
        }
        else if( type === 'register'){
            await this.logReg.click();
            await Login.registerButton.click()
            await this.register(...arg)
        }
    }
    async registerCheck(){
        await browser.deleteCookies()
        await Login.openLogin()        
        await this.loginOrRegister('login', this.creds.name, this.creds.password)
        
    }

}

module.exports = {Register: new Register()}