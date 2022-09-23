const {faker} = require('@faker-js/faker')
class Data{
    get url(){
        return 'https://automationteststore.com/'
    }
    get registerData(){
         const data = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.internet.password(),
            email: faker.internet.email(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            zip: faker.address.zipCode(),
            loginName: faker.internet.userName(),
            password: faker.internet.password()
        };
        return data
    }
}

module.exports = {Data : new Data()}