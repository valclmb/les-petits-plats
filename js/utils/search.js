// Return an array of filtered recipes corresponding to search-bar input value
const searchFilter = (e, datas) => {
  const inputValue = e.target.value.toLowerCase();

  let filteredArray = [];

  for (let i = 0; i < datas.length; i++) {
    // If one of the ingredients includes the input value 'includesIngredients' is true
    let ingr = [];

    const ingredients = datas[i].ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      ingr.push(ingredients[j].ingredient.toLowerCase());
    }

    let includesIngredients = false;
    for (let j = 0; j < ingr.length; j++) {
      if (ingr[j].includes(inputValue)) {
        includesIngredients = true;
        break;
      }
    }

    if (
      includesIngredients ||
      datas[i].name.toLowerCase().includes(inputValue) ||
      datas[i].description.toLowerCase().includes(inputValue)
    ) {
      filteredArray.push(datas[i]);
    }
  }
  return filteredArray;
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
