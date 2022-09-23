const { Given, When, Then }= require('@wdio/cucumber-framework')
const { Register } = require('../pageobjects/register');
const YAML = require('yaml');

When('I create new user', async()=>{
    /**  
     * Navigate to https://automationteststore.com/
    Click on "Continue" button
    Fill the fields with random information
    Click on "Continue" button to finish registration
    * @param register - type of using function (register or login)
    */
    await Register.loginOrRegister('register',null) 
    
})

 /**
  * -Delete cookies (to log out)
  * -login with credentials we used to register
  * check that user can login with credentials we use for registration
    
*/    
Then ('I check registration', async()=>{ 
    await Register.registerCheck()
    expect (await Register.mainText.getText()).toEqual('MY ACCOUNT')
})

/**
 * Get information from the table
 * register new user using provided information
 * @param table - information to fill for user creation 
 * @register - type of using function (register or login)
 */
When ('I create new user with following data:', async(table)=>{
    const data = YAML.parse(table)
    await Register.loginOrRegister('register', data)
;
})
