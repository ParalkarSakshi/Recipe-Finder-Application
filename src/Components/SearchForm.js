import React, { useState } from "react";

function SearchForm({searchRecipes}) {

    const[input,setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        searchRecipes(input);
        setInput('');
    }

    return(

        <>

        <div className="search-form">
        <form onSubmit={handleSubmit}>
            <input 
                  type="text" 
                  placeholder="Search for a recipes"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type="submit">Search</button>
        </form>
        </div>
        
        </>
    );

}

export default SearchForm;