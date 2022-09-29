const getRecipes = async () => {
  let recipes;

  await fetch("./recipes.json")
    .then((res) => res.json())
    .then((json) => (recipes = json.recipes));

  return recipes;
};

const displayData = async (datas) => {
  const recipeContainer = document.querySelector(".recipes");

  datas.forEach((data) => {
    const recipeFactory = recipe(data);
    const recipeCardDOM = recipeFactory.getRecipeCardDOM();
    recipeContainer.append(recipeCardDOM);
  });
};

const init = async () => {
  const recipes = await getRecipes();
  displayData(recipes);
};
init();
