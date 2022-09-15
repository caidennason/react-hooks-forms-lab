import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setName] = useState('')
  const [category, setCategory] = useState('Produce')

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: itemName,
    category: category,
  };

function changeHandler(event){
  event.preventDefault()
  console.log(event.target.value)
  setName(event.target.value)
}

function searchBarHandler(event){
  console.log(event.target.value)
  setCategory(event.target.value)
}

function submitHandler(event){ //this click needs to create a new line with info submitted
  // console.log(newItem)
  event.preventDefault()
  onItemFormSubmit(newItem)
  console.log(newItem)
}


  return (
    <form className="NewItem" onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" onChange={changeHandler} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={searchBarHandler} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
