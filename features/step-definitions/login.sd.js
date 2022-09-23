const { Given, When, Then } = require('@wdio/cucumber-framework');
const {Login} = require('../pageobjects/login.page')


/** Navigate to appropriate url
 * EXAMPLE:
 *  I navigate to https://automationteststore.com/
 *  I click on "Login or register" on the top of the page
 */
Given('I go to Login Page', async()=>{
    await Login.openLogin() 
})
 /** 
 * enter given login and password to appropriate fields  
 * @param login = login given in login.feature
 * @param password = password given in login.feature
 * */ 
When (/^I login as "([^"]*)" and "([^"]*)"$/, async(login, password)=>{
    await Login.login(login, password)         
})

  /**
     *  Check the text of message
     * @param message = text of message given in login.feature
     *  */ 
Then (/^I check error "([^"]*)"$/, async(message)=>{  
    await expect(message).toEqual('Error: Incorrect login or password provided.')  
})

