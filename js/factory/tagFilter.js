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
  input.addEventListener("input", searchInTags);

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
      selectedTag(tag, tagType, datas);
    });
    tagDiv.append(tagSpan);
  });

  target.append(tagDiv);
};

const selectedTag = (title, type, datas) => {
  const parent = document.querySelector(".selected-tags");
  const tag = document.createElement("div");

  // Check if a tag-type already exist, delete if yes
  const tagType = document.querySelector(
    `.selected-tag[data-tag-type=${type}]`
  );
  if (tagType) tagType.remove();
  // Create element
  tag.innerHTML = `${title}`;
  tag.classList.add("selected-tag", "mr-3");
  tag.dataset.tagType = type;

  // Delete icon
  const deleteIcon = document.createElement("span");
  deleteIcon.innerHTML = `<i class="fa-regular fa-circle-xmark mx-2"></i>`;

  // Appends
  tag.append(deleteIcon);
  parent.append(tag);

  const tags = getActivesTags();

  displayData(searchTagFilter(tags, datas));

  // Delete tags
  deleteIcon.addEventListener("click", (e) => closeTag(e, datas));
};

const closeTag = (e, datas) => {
  e.target.closest(".selected-tag").remove();

  const tags = getActivesTags();

  displayData(tags.length > 0 ? searchTagFilter(tags, datas) : datas);
};

const getActivesTags = () => {
  // Detect all the tags and call filter function
  const activesTagsChild = document.querySelectorAll(".selected-tag");

  let tags = [];

  activesTagsChild.forEach((tag) => {
    const type = tag.dataset.tagType;
    const content = tag.innerText.toLowerCase();
    tags.push({ type, content });
  });
  return tags;
};
