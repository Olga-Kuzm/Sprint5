const {Given, When, Then} = require('@wdio/cucumber-framework')
const { MainPage} = require('../pageobjects/mainPage')
const { Cart } = require('../pageobjects/shoppingCart')

When('I buy some goods', async()=>{
    // Add items to cart
    await MainPage.buyItem(MainPage.featuredItem1, MainPage.featuredItem3, MainPage.featuredItem4)
})

Then ('I check shopping card item images:', async(table)=>{
    /**
     *  get information from docstring
     *  get list of images in the cart
     *  compare each of images with information from the given data
     * @param table - info from docstring
     * EXAMPLE:
     * I got list of properties from table
     * I got list of images
     * I compare properties of first image with first set of given properties
     * then I compare second image with second set
     * etc.
     */
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