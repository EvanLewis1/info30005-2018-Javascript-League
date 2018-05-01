const faker = require("faker");
var list = [

];

for (let i = 0; i <10; i++){
    var acfun = {
        "name": faker.name.firstName()+faker.name.lastName(),
        "address": faker.address.streetAddress()+", "+faker.address.state()+",  "+faker.address.country(),
        "phone": faker.phone.phoneNumber()
    }
    list.push(acfun);
}

console.log(list);
