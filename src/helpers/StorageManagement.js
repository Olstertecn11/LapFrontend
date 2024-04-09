
const Store = {};



Store.saveObject = (_key, object) => {
  localStorage.setItem(_key, JSON.stringify(object));
}


Store.getObject = (_key) => {
  const item = localStorage.getItem(_key);
  if (item === null) {
    return null;
  }
  return JSON.parse(item);
}



export default Store;

