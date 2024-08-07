import React from "react";

function Recipe({recipe}) {

    return(
        <>

            <div className="recipe">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title}></img>
            </div>
            
        </>
    );
}

export default Recipe;