let container = document.querySelector(".container");
document.querySelector("button").addEventListener("click", () => {
  newImage();
});

async function newImage() {
  try {

    container.innerHTML = `<p>Loading... Please Wait</p>`;

    let response = await fetch("https://dog.ceo/api/breeds/imagrandom");
    let image = await response.json();
    console.log(response);
    console.log(image);

    document.querySelector(".container").innerHTML = `<img>`;
    document.querySelector("img").setAttribute("src", image.message);

  } catch (err) {
    container.innerHTML = `<p>${err}Not found</p>`;
    console.log("error found");

  }

}

// /----------------BY .then and .catch method--------------------/;
// function newImage() {
//   let myPromise = new Promise((resolve, reject) => {
//     let response = fetch("https://dog.ceo/api/breeds/image/random");
//     let image = response.json();
//     console.log(image);
//     if (!response.ok) {
//       reject("err");
//     }
//     resolve(response);
//   });



// myPromise
//   .then((image) => {
//     document.querySelector(".container").innerHTML = `<img>`;
//     document.querySelector("img").setAttribute("src", image.message);
//   })
//   .catch((err) => {
//     container.innerHTML = `<p>${err}</p>`;
//     console.log("error found");
//   });
// }