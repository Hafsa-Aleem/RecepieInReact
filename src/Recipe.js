import React from 'react';
import Styles from './Recipe.module.css'
import Card from 'react-bootstrap/Card';



const Recipe =(props)=>{

return <div className={Styles.recipe}>

    <img src={props.recepeList.recipe.image} className={Styles.image}/>
    <h1>{props.recepeList.recipe.label}</h1>
    
    <h3>{props.recepeList.recipe.calories}K/cal</h3>
</div>
}

export default Recipe



