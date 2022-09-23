const {Given, When, Then} = require('@wdio/cucumber-framework')
const { MainPage} = require('../pageobjects/mainPage')
const { Cart } = require('../pageobjects/shoppingCart')

When('I buy some goods', async()=>{
    await MainPage.buyItem(MainPage.featuredItem1, MainPage.featuredItem3, MainPage.featuredItem4)
})

Then ('I check shopping card item images:', async(table)=>{
    await browser.logToViewport();
    const data = JSON.parse(table)     
    const images = await Cart.cartImages
    for(const i of data){
        const index = data.indexOf(i)
        for(const key in i){
            const attr = await images[index].getAttribute(key)
            const value = i[key]          
            await expect(attr).toEqual(value)            
        }
    } 
})