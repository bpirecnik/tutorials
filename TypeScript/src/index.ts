// Basic Types
let id: number = 5
let company: string = 'Traversy Media'
let isPublished: boolean = true

let x: any = 'Hello'
x = true

let age: number
age = 30

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Test"]

// Tuple - exact type inside of array
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Test']
]


// Union
let pid: string | number = 22
pid = "22"


// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}


//Objects
type User = {
    id: number,
    name: string
}

const user: {
    id: number,
    name: string
 } = {
    id: 1,
    name: 'John'
}

const user1: User = {
    id: 1,
    name: 'John'
}


// Type Assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number


// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

log("Hello")



// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user2: UserInterface = {
    id: 1,
    name: 'John'
}


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    // PUBLIC    PRIVATE (only inside this class)    PROTECTED (only this class or extended)
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Test")
const mike = new Person(2, "Test2")

// Subclass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "Shawn", "Programmer")

console.log(emp.register())



// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArry = getArray<number>([1,2,3,4])
let strrry = getArray<string>(['brad', 'john', 'joe'])

numArry.push(1)