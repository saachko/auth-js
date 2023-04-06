function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value));
}
function get(name) {
  return JSON.parse(window.localStorage.getItem(name));
}

function remove(name) {
  localStorage.removeItem(name);
}

export { set, get, remove };
