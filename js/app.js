var array = [];
const fetchApi = (text) => {
  fetch(
    `https://api.edamam.com/search?q=${text}&app_id=3c9f0985&app_key=b2f4f7856dfc35e9de885c966e3f7608`
  )
    .then((res) => res.json())
    .then((dat) => (array = dat.hits))
    .catch((error) => console.log(error.message));
};
window.onload = fetchApi("plov");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
button.addEventListener("click", function () {
  fetchApi(input.value);
});
array &&
  array.map((element) =>
    // document.getElementById("push").appendChild(`<p>${element}</p>`)
    console.log(element)
  );
