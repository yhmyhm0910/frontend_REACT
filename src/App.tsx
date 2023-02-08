import React from 'react';  //https://stackoverflow.com/questions/60754963/cant-use-usestate-with-typescript-cannot-find-name-usestate
import NavBar from './components/NavBar';   //User-Defined Components Must Be Capitalized
import Home from './components/Home'
//can't print boolean

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

/*
//function: if return nothing (:void)
//console.log(errmsg) === throw new Error(errmsg)
type User = {
  readonly name: string   //readonly means cannot be edited after initialized
  isPaid: boolean
  wife?: boolean    //? means can be left blank
}


function createUser(user: User):User{   //Output is type User   //Input is type User
  return {name: "Jerry", isPaid: false}
}

enum Color {  
  Red = 1,  // == Color[0]
  Green,  // == Color[1]
  Blue, // == Color[2]
}
let colorName: string = Color[2];
 
console.log(colorName);   // Displays 'Green'

interface Admin {
  Name: string,
  ID: number
}

const Jerry:Admin = {
  ID:123,
  Name:"Jerry"
}

function iden<you>(g: you): Boolean{
  return true
}

class SS<T>{
  cart: T[] = []
  addit(product: T){
    this.cart.push(product)
  }
}

interface NewObj {
  somethingNew: string,
  somethingOld: boolean
}
const newObj: NewObj = {somethingNew: '123',somethingOld: true}

const added = new SS()
const obj = added.addit([1, '2', 3])
const obj2 = added.addit(newObj) */

