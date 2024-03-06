
const Store = {};



Store.saveObject = (_key, object) => {
  localStorage.setItem(_key, JSON.stringify(object));
}

Store.getObject = (_key) => {
  return JSON.parse(localStorage.getItem(_key));
}


export default Store;

