const { Given, When, Then } = require('@wdio/cucumber-framework');
const {Login} = require('../pageobjects/login.page')

Given('I go to Login Page', async()=>{
    await Login.openLogin()
})

When (/^I login as "([^"]*)" and "([^"]*)"$/, async(login, password)=>{   
    await Login.login(login, password) 
        
})
Then (/^I check error "([^"]*)"$/, async(message)=>{   
    await expect(message).toEqual('Error: Incorrect login or password provided.')  
})

