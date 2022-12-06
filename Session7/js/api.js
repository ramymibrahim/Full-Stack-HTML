// const loadProducts = function () {
//   let obj= JSON.parse(request.responseText);
//   console.log(obj.data.map(x=>x.name));

// };
// const request = new XMLHttpRequest();
// request.open("GET", "http://localhost:5000/api/products/");
// request.send();
// request.addEventListener("load", loadProducts);

const request = fetch("http://localhost:5000/api/products/");
request
  .then((data) => {
    data.json().then((json_data) => {
      const request2 = fetch("");
      request2.then((data) => {
        data.json().then(dj=>{
          let req3
        })
      });
    });
  })
  .catch((err) => {})
  .finally(() => {});

const getData = async () => {
  console.log("getData");
  let response = await request;
  let data = await response.json();
  console.log(data);
};

// console.log(0);
// try {
//   getData();
// } catch (err) {
//   console.log(err);
// }
// finally{

// }

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// let interval = setInterval(() => {
//   console.log("setInterval");
// }, 1000);

// console.log(1);
