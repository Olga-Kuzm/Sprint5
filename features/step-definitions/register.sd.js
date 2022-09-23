const { Given, When, Then }= require('@wdio/cucumber-framework')
const { Register } = require('../pageobjects/register')

When('I create new user', async()=>{
    /* Navigate to https://automationteststore.com/
    Click on "Continue" button
    Fill the fields with random information
    Click on "Continue" button to finish registration
    */

    await Register.loginOrRegister('register') 
    
})
Then ('I check registration', async()=>{    
    // Delete cookies (to log out), then login with credentials we used to register
    await Register.registerCheck()
    expect (await Register.mainText.getText()).toEqual('MY ACCOUNT') // check successful login


})
