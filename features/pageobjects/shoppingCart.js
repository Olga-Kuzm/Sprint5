const Base = require("./base");

class Cart extends Base{
    get cartTable(){
        return $('*[class*="product-list"] > table')
    }
    get cartImages(){
        return $$('*[class*="product-list"] > table img')
    }

}

module.exports = { Cart : new Cart()}