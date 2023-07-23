fetch("https://fakestoreapi.com/products")
  .then((Text) => {
    return Text.json();
  })
  .then((jsonText) => {
    const data = jsonText;
    console.log(data);
  });

const searchInput = document.getElementById("searchId");

searchInput.addEventListener("input", () => {
  const qurey = searchInput.ariaValueMax.trim();
  searchFunction(qurey, data);
});
