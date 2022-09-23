const {Given, When, Then} = require('@wdio/cucumber-framework')

When('I open {string}', async (url)=>{
    await browser.maximizeWindow()
    await browser.url(url)    
})

Then ('I expect element attributes:', async(table)=>{
    const data = await table.hashes();    
    for (const i of data){
        const attr = await $(i.element).getAttribute(i.attribute)
        await expect(i.value).toEqual(attr)
    }

})