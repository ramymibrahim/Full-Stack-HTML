// const loadProducts = function () {
//   let obj= JSON.parse(request.responseText);
//   console.log(obj.data.map(x=>x.name));

// };
// const request = new XMLHttpRequest();
// request.open("GET", "https://warm-mesa-88190.herokuapp.com/api/products/");
// request.send();
// request.addEventListener("load", loadProducts);

const request = fetch("https://warm-mesa-88190.herokuapp.com/api/products/");
request
  .then((data) => {
    request = fetch();
    request.then(() => {});
  })
  .catch((err) => {})
  .finally(() => {});

const getData = async () => {
  console.log("getData");
  let response = await request;
  let data = await response.json();
  console.log(data);
};

console.log(0);
try {
  getData();
} catch (err) {
  console.log(err);
}
finally{
  
}

setTimeout(() => {
  console.log("setTimeout");
}, 0);

let interval = setInterval(() => {
  console.log("setInterval");
}, 1000);

console.log(1);
