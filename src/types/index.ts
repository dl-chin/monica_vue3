

 interface PersonInter {
    id: string,
    name: string,
    age: number
}

 type Persons = PersonInter[]

 export {type PersonInter, type Persons}