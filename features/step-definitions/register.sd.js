const { Given, When, Then }= require('@wdio/cucumber-framework')
const { Register } = require('../pageobjects/register')

When('I create new user', async()=>{
    await Register.loginOrRegister('register')
    
})
Then ('I check registration', async()=>{    
    //  expect(await Register.mainText.getText()).toEqual('YOUR ACCOUNT HAS BEEN CREATED!') 
    await Register.registerCheck()
    expect (await Register.mainText.getText()).toEqual('MY ACCOUNT')


})
