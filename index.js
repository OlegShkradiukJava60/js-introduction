// console.log (fetch("https://api.thecatapi.com/v1/breeds") )

// fetch("https://api.thecatapi.com/v1/breeds")
//   .then(resp => resp.json())
//   .then(data => console.log(data))

const ulElem = document.getElementById("ul_elem");
drawImages(ulElem);

async function drawImages(elem) {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();
  const images = getImages(data);
  const items = getItems(images);
  elem.innerHTML = items;
}

function getImages(data) {
  const images = data.map(record => `https://cdn2.thecatapi.com/images/${record.reference_image_id}.jpg`)
  return images;
}

function getItems(images) {
  const items = images.map(getItem);
  return items.join("");
}
function getItem(image) {
  const item = `<li><img src="${image}"></li>`; //width="300" height="300"
  return item;
}