var array = [];
const fetchApi = (text) => {
  fetch(
    `https://api.edamam.com/search?q=${text}&app_id=3c9f0985&app_key=b2f4f7856dfc35e9de885c966e3f7608`
  )
    .then((res) => res.json())
    .then((dat) => (array = dat.hits))
    .catch((error) => console.log(error.message));
  update();
};
window.onload = fetchApi("plov");
setTimeout(() => {
  fetchApi("plov");
}, 2000);
const input = document.querySelector("#input");
const button = document.querySelector("#button");
button.addEventListener("click", function () {
  fetchApi(input.value);
});
let div;
let image;
let title;
let ingredients;
function update() {
  array &&
    array.map((element) => {
      ingredients = document.createElement("p");
      ingredients.classList.add("ingredients");
      ingredients.innerText = "Ingredients";
      title = document.createElement("p");
      title.innerText = element.recipe.label;
      image = document.createElement("img");
      image.setAttribute("src", element.recipe.image);
      div = document.createElement("div");
      div.append(image);
      div.append(title);
      div.append(ingredients);
      element.recipe.ingredients.map((element) => {
        ingredients.innerHTML += `<br>${element.text}`;
      });
      document.getElementById("push").append(div);
    });
}
