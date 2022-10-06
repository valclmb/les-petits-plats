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

const tagFilter = (e, datas) => {
  const filteringByTag = (tag) => {
    console.log(tag);
  };
  // selectors
  const target = e.target.closest("button");
  const typeSpan = target.children[0].children[0];
  const input = target.children[0].children[1];
  const allInput = document.querySelectorAll(".select-filters input");
  const allTagDiv = document.querySelectorAll(".tag-div");

  const tagType = target.dataset.tagType;
  const allTags = getAllTags(datas, tagType);

  // Display style
  allInput.forEach((input) => {
    input.style.display = "none";
    input.previousElementSibling.style.display = "block";
  });
  typeSpan.style.display = "none";
  input.style.display = "block";

  allTagDiv.forEach((div) => div.remove());
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("tag-div");

  // Display tags in the tag div
  allTags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.innerText = tag;
    tagSpan.addEventListener("click", () => filteringByTag(tag));
    tagDiv.append(tagSpan);
  });

  target.append(tagDiv);
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
