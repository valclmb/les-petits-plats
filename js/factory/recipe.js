const recipe = (data) => {
  const { name, description, ingredients, time } = data;

  const getRecipeCardDOM = () => {
    const card = document.createElement("article");
    card.classList.add("card", "col-sm-6", "col-lg-4", "border-0", "py-4");

    const img = document.createElement("img");
    img.setAttribute("src", "./../../img/cardImg.png");
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
    // ingredients
    const list = document.createElement("ul");

    ingredients.forEach((ingr) => {
      const li = document.createElement("li");
      li.textContent = `${ingr.ingredient}${
        ingr.quantity ? `: ${ingr.quantity}` : ""
      }${ingr.unit ? ingr.unit : ""}`;
      list.append(li);
    });

    // Instruction
    const instruct = document.createElement("p");
    instruct.textContent = description;

    infos.append(list);
    infos.append(instruct);

    body.append(title);
    body.append(infos);

    card.append(img);
    card.append(body);
    return card;
  };

  return { getRecipeCardDOM };
};
