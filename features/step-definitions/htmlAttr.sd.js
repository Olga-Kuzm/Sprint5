const {Given, When, Then} = require('@wdio/cucumber-framework')

/**
 * Open approprialte url
 * @param - https://automationteststore.com/ 
 */
When('I open {string}', async (url)=>{
    await browser.maximizeWindow()
    await browser.url(url)    
})

/**Get info from table
 * Comparing attributes from table with given values
 * EXAMPLE:
 * I find element ".facebook" - from the first column
 * Get attribute "target" - from the second column
 * Compare value of attribute with value from third column "_blank "
 * @param table = given table of elements, their attributes and values
 */
Then ('I expect element attributes:', async(table)=>{
    const data = await table.hashes();  
    for (const i of data){
        const attr = await $(i.element).getAttribute(i.attribute)
        await expect(i.value).toEqual(attr)
    }

})