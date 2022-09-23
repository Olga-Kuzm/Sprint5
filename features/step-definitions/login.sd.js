const { Given, When, Then } = require('@wdio/cucumber-framework');
const {Login} = require('../pageobjects/login.page')

Given('I go to Login Page', async()=>{
    await Login.openLogin() // navigate to https://automationteststore.com/, then click on "Login or register"
})

When (/^I login as "([^"]*)" and "([^"]*)"$/, async(login, password)=>{   
    await Login.login(login, password) // enter given login and password to appropriate fields
        
})
Then (/^I check error "([^"]*)"$/, async(message)=>{   
    await expect(message).toEqual('Error: Incorrect login or password provided.')  // Check the text of message
})

