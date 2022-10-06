// Return an array of filtered recipes corresponding to search-bar input value
const searchFilter = (e, datas) => {
  const inputValue = e.target.value.toLowerCase();

  let filteredArray = [];

  for (let i = 0; i < datas.length; i++) {
    // If one of the ingredients includes the input value 'hasIngredients' is true
    let hasIngredients = false;

    const ingredients = datas[i].ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      if (ingredients[j].ingredient.toLowerCase().includes(inputValue)) {
        hasIngredients = true;
        break;
      }
    }

    if (
      hasIngredients ||
      datas[i].name.toLowerCase().includes(inputValue) ||
      datas[i].description.toLowerCase().includes(inputValue)
    ) {
      filteredArray.push(datas[i]);
    }
  }
  return filteredArray;
};

// For tag search, return the tag without double
const getAllTags = (datas, type) => {
  let result = new Set();

  datas.forEach((data) => {
    if (type === "appliance") {
      result.add(data[type]);
      return;
    } else {
      data[type].forEach((elem) => {
        if (type === "ingredients") {
          result.add(elem.ingredient.toLowerCase());
          return;
        }
        // ustensils
        result.add(elem.toLowerCase());
      });
    }
  });

  return result;
};

const filteringByTag = (tag) => {
  console.log(tag);
};
