 
import   React from 'react';
import classes from './Order.module.css'
 const order = (props) => {
      const ingredients=[]
      for(let obj in props.ingredients){
          ingredients.push({name:obj,amount:props.ingredients[obj]})
      }
      const ingredientOutput=ingredients.map(item=>
        <span key ={item.name}
        style ={{
            textTransform:'capitalize',
            margin:'0 4px',
            padding:'5px 20px',
            display:'inline-block',
            border:'1px solid #ccc'
        }}> 
        {item.name} ({item.amount})</span>)
    return (
        <div className ={classes.Order}>
           <p>Ingredients: {ingredientOutput}</p> 
           <p>Price: <strong>£{props.price.toFixed(2)}</strong></p>
        </div>
    );
};
export default order