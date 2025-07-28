

 interface PersonInter {
    id: string,
    name: string,
    age: number,
     x?:string
}

 type Persons = PersonInter[]

 export {type PersonInter, type Persons}