const faker = require("faker");
var list = [

];

for (let i = 0; i <10; i++){
    var acfun = {
        "name": faker.name.firstName()+" "+faker.name.lastName(),
        "address": faker.address.streetAddress()+", "+faker.address.state()+",  "+faker.address.country(),
        "phone": faker.phone.phoneNumber(),
        "email": faker.internet.email()
    }
    list.push(acfun);
}

console.log(list);

var format = "[{\"_id\":\"5ae94612734d1d133184d041\",\"name\":\"CasandraBuckridge\",\"address\":\"5077 Kuhn Wells, Maine, Myanmar\",\"phone\":\"599-973-7677 x66543\",\"email\":\"Fannie_Wunsch@yahoo.com\",\"passwordHash\":\"password\"}]";
var format = JSON.parse(format);
console.log(format[0].passwordHash);