// Return an array of filtered recipes corresponding to search-bar input value
const searchFilter = (e, datas) => {
  const inputValue = e.target.value.toLowerCase();

  const result = datas.filter(({ name, description, ingredients }) => {
    // If one of the ingredients includes the input value 'includesIngredients' is true
    const hasIngredients = ingredients.some(({ ingredient }) =>
      ingredient.toLowerCase().includes(inputValue)
    );

    // filter on title(name), description and ingredients
    return (
      hasIngredients ||
      name.toLowerCase().includes(inputValue) ||
      description.toLowerCase().includes(inputValue)
    );
  });
  return result;
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

const searchInTags = (e) => {
  const filterValue = e.target.value.toLowerCase();
  const divTag = e.target.parentElement.parentElement.lastChild;
  const divSpans = divTag.children;

  // Display none tagspan if don't includes input value
  Array.from(divSpans).forEach((child) => {
    child.style.display = "block";
    if (!child.innerText.toLowerCase().includes(filterValue)) {
      child.style.display = "none";
    }
  });
};

const searchTagFilter = (tags, datas) => {
  let result = datas.filter(({ ingredients, ustensils, appliance }) => {
    let haveIngredients = false;
    let haveUstensils = false;
    let haveAppliances = false;

    // Is true if one of the elements includes the tag's content
    tags.forEach(({ type, content }) => {
      if (type === "ingredients") {
        ingredients.forEach(({ ingredient }) => {
          if (ingredient.toLowerCase().includes(content))
            haveIngredients = true;
        });
      } else if (type === "ustensils") {
        haveUstensils = ustensils.some((elem) => {
          return elem.toLowerCase().includes(content);
        });
      } else {
        // type appliances
        haveAppliances = appliance.toLowerCase().includes(content);
      }
    });
    return haveIngredients || haveUstensils || haveAppliances;
  });

  return result;
};
