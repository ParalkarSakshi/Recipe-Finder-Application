import React from "react";
import Recipe from "./Recipe";


function RecipeList({ recipes }) {

    return (

        <>

            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div className="recipe-item" key={index}>
                            <Recipe recipe={recipe} />
                        </div>
                    ))
                ) : (
                    <p>No Recipe Found</p>
                )}
            </div>

        </>
    );

}

export default RecipeList;