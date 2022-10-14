const getRecipes = async () => {
  let recipes;

  await fetch("recipes.json")
    .then((res) => res.json())
    .then((json) => (recipes = json.recipes));

  return recipes;
};

const displayData = async (datas) => {
  const recipeContainer = document.querySelector(".recipes");
  recipeContainer.innerHTML = "";

  datas.forEach((data) => {
    const recipeFactory = recipe(data);
    const recipeCardDOM = recipeFactory.getRecipeCardDOM();
    recipeContainer.append(recipeCardDOM);
  });
};

const init = async () => {
  const recipes = await getRecipes();

  displayData(recipes);

  // search bar function
  const searchBar = document.querySelector("#search-bar");
  searchBar.addEventListener("input", (e) => {
    const tags = getActivesTags();
    const result = searchFilter(
      e,
      tags.length > 0 ? searchTagFilter(tags, recipes) : recipes
    );
    displayData(result);
  });

  // select filter tag function
  const selects = document.querySelectorAll(".select-filters button");

  selects.forEach((select) =>
    select.addEventListener("click", (e) => tagFilter(e, recipes))
  );
};
init();
