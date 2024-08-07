import './App.css';
import { useState } from 'react';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';


function App() {

  const[recipes,setRecipes] = useState([]);
  const[loading,setLoding] = useState(false);

 async function searchRecipes(input) {
    setLoding(true);
    const apiKey = '077ae1bf790a42b784e772017e38ceee';

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${apiKey}`);
    const data = await response.json();
    setRecipes(data.results);
    setLoding(false);
    // console.log(data);
  }

  return (
    <div className="App">

      <h1>Recipe Finder App</h1>

      <SearchForm searchRecipes={searchRecipes} /> 

      {loading ? <img src='https://th.bing.com/th/id/OIP.GXLlB7HB7WQ4ywNLu4WBKAHaHd?pid=ImgDet&w=191&h=192&c=7' className="spin-animation" /> : <RecipeList recipes={recipes} /> }
      
      
    </div>
  );
}

export default App;
