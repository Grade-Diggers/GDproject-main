import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Upload = () => {
  const [recipeInputs, setRecipeInputs] = useState([
    { imageUrl: 'https://uchealth-wp-uploads.s3.amazonaws.com/wp-content/uploads/sites/6/2020/06/02161229/tinyavocadotoast.webp', recipe: '', ingredients: '' },
    { imageUrl: 'https://www.loveandoliveoil.com/wp-content/uploads/2019/05/ahi-mango-poke-FEAT-1200x800.jpg', recipe: '', ingredients: '' },
    { imageUrl: 'https://pricechopperready.com/home/wp-content/gallery/recipes/RoastedAsianGlazedSalmonVeggies.jpg', recipe: '', ingredients: '' },
    { imageUrl: 'https://www.eatingwell.com/thmb/9Bt-gqZfJMSgykx9XoVoHmMg-l8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stuffed-Peppers-ddmfs-beauty-02-cf58b24a471e40818041c3f10b1230c6.jpg', recipe: '', ingredients: '' },
    { imageUrl: 'https://foolproofliving.com/wp-content/uploads/2017/12/Greek-Yogurt-Parfait-with-fruit-600x600.jpg', recipe: '', ingredients: '' },
    { imageUrl: 'https://assets.epicurious.com/photos/64a845e67799ee8651e4fb8f/1:1/w_2240,c_limit/AshaGrilledChickenSalad_RECIPE_070523_56498.jpg', recipe: '', ingredients: '' },
  ]);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/recipes')
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Upload Recipe</h2>

      <div className="row">
        {recipeInputs.map((input, boxIndex) => (
          <div className="col-md-4 mb-4" key={boxIndex}>
            <div className="card">
              <img
                src={input.imageUrl}
                className="card-img-top"
                alt={`Food ${boxIndex + 1}`}
              />
              <div className="card-body">
                <div>
                  <p>Recipe:</p>
                  <div>{input.recipe}</div>
                </div>
                <div>
                  <p>Ingredients:</p>
                  <div>{input.ingredients}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2>Recipe List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Recipe</th>
            <th scope="col">Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id}>
              <td>{recipe.recipe}</td>
              <td>{recipe.ingredients}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Upload;
