/**
 * Utilizando esta url (https://jsonplaceholder.typicode.com/users/6) 
 * hacer un get y mostrar todas las propiedades que puedan cada una en su propio <input>.
 */

//V1
/*
const load = () => {
  axios.get("https://jsonplaceholder.typicode.com/users/6")
  .then(res => {
    document.querySelector("#id").value = res.data.id;
    document.querySelector("#name").value = res.data.name;
    document.querySelector("#username").value = res.data.username;
    document.querySelector("#email").value = res.data.email;
    document.querySelector("#address-street").value = res.data.address.street;
  })
  .catch(err => console.log(err));
}
*/

//V2 - Corrección en clase

const getUser = id => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) // esto sólo funciona con comillas así. Con las otras NO!
  .then(res => {
    document.querySelector("#id").value = res.data.id;
    document.querySelector("#name").value = res.data.name;
    document.querySelector("#username").value = res.data.username;
    document.querySelector("#email").value = res.data.email;
    document.querySelector("#address-street").value = res.data.address.street;
  })
  .catch(err => console.log(err));
}

const searchById = () => {
  let id = document.querySelector("#search").value;
  if (!id) throw new Error ("El valor ingresado no es válido");
  getUser(id);
}

const load = () => {
  getUser(6);
  document.querySelector("#search-button").addEventListener("click", searchById);
}