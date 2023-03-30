import storage from "./modules/storage.js";

window.onload = async e => {
  const openTabButtonElement = document.createElement('button');
  openTabButtonElement.appendChild(document.createTextNode('Settings Page'));
  openTabButtonElement.onclick = e => { window.open('settings.html', '_blank'); };
  document.body.appendChild(openTabButtonElement);
};