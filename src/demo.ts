// declaring variables with a type
let x: number
let y: string
let b: number[]
let c: any
let d: any[]


b = [1,100]

c = 'hi'
c = 100

d = [100, 'hundred']

// declare and intialize a variable with type any
let e = 5 as any
e = 'test123'

// define a custom type with Typescript interface
// makes fields optional by adding '?'
interface Contact {
  id: number,
  name: string,
  birthDate: Date,
  age?: number,
  status: ContactStatus
}

// define an enumerable type
enum ContactStatus {
  Active = 'active',
  Inactive = 'inactive'
}

// declare a variable with the type Contact
let primaryContact: Contact = {
  id: 123,
  name: 'Jef',
  birthDate: new Date(),
  status: ContactStatus.Active
}
