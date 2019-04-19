const PubSub = require('../helpers/pub_sub.js');

class SelectView{

  constructor(){
    this.element = document.querySelector('select#character');
    }

bindEvents(){
  PubSub.subscribe('Characters:all-characters-ready', (event) => {
    const allCharacters = event.detail.results;
    this.populate(allCharacters);

  });

  this.element.addEventListener('change', (event) => {
    const selectIndex = event.target.value;
    console.log(event.target.value);
    PubSub.publish('SelectView:change', selectIndex);
  });
};


populate(characterData){
  characterData.forEach((character, index) => {
    const option = document.createElement('option');
    option.textContent = character.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

}
module.exports = SelectView;
