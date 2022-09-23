const Base = require('../pageobjects/base')

class MainPage extends Base{ 

   get featuredItem1(){
    return $$('.prdocutname')[0]
   }
   get featuredItem2(){
    return $$('.prdocutname')[1]
   }
   get featuredItem3(){
    return $$('.prdocutname')[2]
   }
   get featuredItem4(){
    return $$('.prdocutname')[3]
   }

   async buyItem(...item){
    for(const i of item){
        await i.click();
        await this.addToCartButton.click()
        if(i !== item[item.length - 1]){
            await this.logo.click()
        }        
    }    
   }
}
module.exports = {MainPage: new MainPage()}