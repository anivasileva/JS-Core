class Person{
    constructor(firstName,lastName,age,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


let girl=new Person('Annie', 'Anastasova',22,'anivasileva1995@abv.bg');
console.log('' + girl);