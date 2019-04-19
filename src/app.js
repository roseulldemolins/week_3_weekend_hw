const SelectView = require('./views/select_view.js');
const CharacterInfoView = require('./views/character_info_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {
  const characterDropdown = new SelectView();
  characterDropdown.bindEvents();

  const characterInfoDisplay = new CharacterInfoView();
  characterInfoDisplay.bindEvents();

  const characters = new Characters();
  characters.bindEvents();
  characters.getData();
});
