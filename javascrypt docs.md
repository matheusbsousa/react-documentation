# Javascript

## Const, Var and Let

> We don't use **var** anymore

> If you want to store value, use **let** .

> If you want to store a constant value, use **const**

## Arrow Functions

### Function with no parameter

```javascript
const functionName = () => {
    console.log();
}

const functionName = () => console.log("Parameter");
```

### Function with one parameter

```javascript
const functionName = (parameter) => {
    console.log(parameter);
}

const functionName = parameter => {
    console.log(parameter);
}

const functionName = parameter => console.log(parameter);
```

### Function with more than one parameter

```javascript
const functionName = (parameter1, paramenter2) => {
    console.log(parameter1, paramenter2);
}

const functionName = (parameter1, paramenter2) => console.log(parameter1, paramenter2);
```

## Export and Imports

### Export

#### Export Default

```javascript
const Person = {
    name: 'name'
}

export default Person
```

#### Export Named

```javascript
export const Person = {
    name: 'name'
}

export const getName = () => "My name";
```

### Import

#### Import Default

> **The name in your import does not matter, it will import the default anyway**

```javascript
import Person from './person'
```

#### Import Named

> **The name in your import must be exacly the const name**

```javascript
import {Person, NotAPerson} from './person'
import {Person as Someone} from './person'
import * as bundled from './person'
```

## Classes

```javascript
class Person {
    name = 'Matheus';

    printName = () => console.log(this.name);
}
```

## Spread and Rest Operators **(...)**

### Spread 

> Used to copy all elements from array or objects
> It can override props of the old object simple using 
> the prop name and puting a new value into it.

```javascript
const newArray = [...oldArray, 1, 2]

const newObject = {...oldObject, name: 'Matheus'}
```

### Rest
> Works excly as **varargs** in java

```javascript
const filter = (...args) => console.log(args.map(arg => arg === 1));
```

## Destructuring

> Extract array or object properties and store them in variables

```javascript
[a,b] = ['My', 'Name']

{name} = {name: 'Matheus', age: 27};
```

## Array Fucntions

```javascript
const numbers = [1, 2, 3]

//select each value of the array
numbers.map(number => num * 2);
```
