let parsed = [];
// https://fakestoreapi.com/products
fetch("./products.json")
  .then((data) => data.json())
  .then((finalResult) => {
    parsed = finalResult;
    storedContent(finalResult);
    // storedData.push(finalResult);
  });

const searchInput = document.getElementById("inputSearch");

function storedContent(datas) {
  const elemContainer = document.getElementById("Container");
  // const inputSearch = document.createElement("input");
  // elemContainer.appendChild(inputSearch);
  for (let i = 0; i < datas.length; i++) {
    const card = document.createElement("div");
    card.className = "cardStyle";
    const cardTitle = document.createElement("div");
    const cardPrice = document.createElement("div");
    const cardPicture = document.createElement("img");
    cardPicture.src = datas[i].image;
    cardPicture.className = "imageStyle";
    cardTitle.innerText = datas[i].title;
    cardPrice.innerText = datas[i].category;
    card.appendChild(cardPicture);
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);

    elemContainer.appendChild(card);
  }
}

searchInput.addEventListener("input", () => {
  let searchText = searchInput.value.trim().toLowerCase();
  searchFilter(searchText, parsed);
});

function searchFilter(searchText, totalData) {
  const elemContainer = document.getElementById("Container");
  console.log(elemContainer);
  for (let i = 0; i < totalData.length; i++) {
    const { title } = totalData[i];
    const finalTitle = title.toLowerCase().trim();
    const card = elemContainer.children[i];

    console.log(card);

    if (finalTitle.includes(searchText)) {
      card.style.display = "inline";
    } else {
      card.style.display = "none";
    }
  }
  // console.log(searchText);
  // console.log(parsed);
}
