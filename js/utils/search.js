// Return an array of filtered recipes corresponding to search-bar input value
const searchFilter = (e, datas) => {
  const inputValue = e.target.value.toLowerCase();

  const result = datas.filter(({ name, description, ingredients }) => {
    // If one of the ingredients includes the input value 'includesIngredients' is true
    let ingr = [];
    ingredients.forEach(({ ingredient }) => {
      ingr.push(ingredient.toLowerCase());
    });
    const includesIngredients = ingr.some((elem) => elem.includes(inputValue));

    // filter on title(name), description and ingredients
    return (
      includesIngredients ||
      name.toLowerCase().includes(inputValue) ||
      description.toLowerCase().includes(inputValue)
    );
  });
  return result;
};

// For tag search
const getAllIngredients = (datas) => {
  let ingredientsArr = [];

  datas.forEach(({ ingredients }) => {
    ingredients.forEach(({ ingredient }) => {
      if (!ingredientsArr.includes(ingredient)) {
        ingredientsArr.push(ingredient);
      }
    });
  });

  return ingredientsArr;
};
