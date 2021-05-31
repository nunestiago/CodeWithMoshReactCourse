const person = {
    firstName: 'John',
    lastName: 'Snow',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    }
    set fullName(value){
        if(typeof value !== 'string') 
           throw new Error("Value must be a string");

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

person.fullName = "Joe Smith"

console.log(person)