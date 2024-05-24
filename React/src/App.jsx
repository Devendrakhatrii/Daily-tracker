import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const [rating, setRating] = useState(false);

  const [query, setQuery] = useState("");

  const { data, error, loading } = useFetch(
    `https://dummyjson.com/recipes/search?q=${query}&select=name,image,rating,instructions,ingredients&?limit=50&skip=10`
  );

  const { recipes } = data;
  setRecipe(recipes);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong!</h1>;

  const searchRecipe = (key) => {
    setQuery(key);
  };

  return (
    <>
      <div>
        <h1>Receipe App</h1>
        <input
          type="text"
          placeholder="Search receipe"
          onChange={(e) => searchRecipe(e.target.value)}
        />
        <input type="checkbox" name="name" id="" checked disabled />
        <label htmlFor="name">Name</label>
        <input type="checkbox" name="image" id="" checked disabled />
        <label htmlFor="image">image</label>
        <input
          type="checkbox"
          name=""
          id=""
          onChange={() => setIngredients(!ingredients)}
        />
        <label htmlFor="ingredients">ingredients</label>
        <input
          type="checkbox"
          name="instrustions"
          id=""
          onChange={() => setInstructions(!instructions)}
        />
        <label htmlFor="instructions">instructions</label>
        <input
          type="checkbox"
          name="rating"
          id=""
          onChange={() => setRating(!rating)}
        />
        <label htmlFor="rating">rating</label>
      </div>
      <ul>
        {recipe.length > 0 ? (
          recipe.map((item, index) => {
            return (
              <>
                <div>
                  <li key={index}>
                    <h1>{item.name}</h1>
                  </li>
                  <img src={`${item.image}`} alt="" id="recipe-img" />
                </div>
                {ingredients && (
                  <div>
                    <h3>Ingrediants</h3>
                    {item.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </div>
                )}
                {instructions && (
                  <div>
                    <h3>Instructions</h3>
                    {item.instructions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </div>
                )}
                {rating && (
                  <div>
                    <h3>Rating : {item.rating}</h3>
                  </div>
                )}
              </>
            );
          })
        ) : (
          <h1>Item not found</h1>
        )}
      </ul>
    </>
  );
}

export default App;
