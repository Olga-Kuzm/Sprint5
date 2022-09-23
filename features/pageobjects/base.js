module.exports = class Base {
        
    get logReg (){       
        return $('#customer_menu_top > li > a')
    }
    get categoryMenu(){
        return $('//nav/ul')
    }
    get searchBar(){
        return $('#filter_keyword')
    }
    get searchButton(){
        return $('.button-in-search')
    }
    get addToCartButton(){
        return $('.cart')
    }
    get logo(){
        return $('.logo')
    } 
    get mainText(){
        return $('.maintext')
    }  
    async openPage () {
        await browser.maximizeWindow()
        await browser.url('https://automationteststore.com/')
    }    
}