const { faker } = require('@faker-js/faker');


exports.generateUsers=(limit,minAge,maxAge)=>{
    const dummyUsers = [];
    for (let i = 0; i < limit; i++) {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password(10);
        const age = Math.floor(Math.random() * (maxAge+1)) + minAge;
        const dob = faker.date.birthdate({ mode: 'age', min: age, max: age }).toISOString().split('T')[0];
        const address = faker.location.streetAddress() + ', ' + faker.location.city() + ', ' + faker.location.country();
        
      
        dummyUsers.push({
          name: name,
          email: email,
          password: password,
          age: age,
          dob: dob,
          address: address
        });
    }
    return dummyUsers;
}
