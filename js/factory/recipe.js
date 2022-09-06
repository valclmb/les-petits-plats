const recipe = (data) => {
  const { name, servings, ingredients, time } = data;

  const getRecipeCardDOM = () => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.classList.add("col-4");

    const img = document.createElement("img");
    img.setAttribute("src", "../../img/cardImg.png");
    img.setAttribute("alt", "");

    const body = document.createElement("div");
    body.classList.add("card-body");

    // title
    const title = document.createElement("section");
    title.classList.add("card-body-title");
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const timeToCook = document.createElement("div");
    timeToCook.innerHTML = `<i class="fa-regular fa-clock"></i> ${time} min`;
    title.append(h2);
    title.append(timeToCook);

    // infos
    const infos = document.createElement("section");
    infos.classList.add("card-body-infos");
    const list = document.createElement("ul");
    ingredients.forEach((ingr) => {
      const li = document.createElement("li");
      console.log(ingr);
      li.textContent = `${ingr.ingredient}${
        ingr.quantity ? `: ${ingr.quantity}` : ""
      }${ingr.unit ? ingr.unit : ""}`;
      list.append(li);
    });

    infos.append(list);

    body.append(title);
    body.append(infos);

    card.append(img);
    card.append(body);
    return card;
  };

  return { getRecipeCardDOM };
};
