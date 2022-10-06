const tagFilter = (e, datas) => {
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

  // Event listener for closing if click isnt in the tagDiv
  document.addEventListener("click", (e) => {
    if (!target.contains(e.target)) {
      tagDiv.remove();
      input.style.display = "none";
      input.previousElementSibling.style.display = "block";
    }
  });
  // Display tags in the tag div
  allTags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.innerText = tag;
    tagSpan.addEventListener("click", () => {
      filteringByTag(tag);
      selectedTag(tag, tagType);
    });
    tagDiv.append(tagSpan);
  });

  target.append(tagDiv);
};

const selectedTag = (title, type) => {
  const parent = document.querySelector(".selected-tags");
  const tag = document.createElement("div");
  tag.innerText = title;
  tag.classList.add("selected-tags");
  tag.dataset.tagType = type;
  parent.append(tag);
};
