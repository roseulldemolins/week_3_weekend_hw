const PubSub = require('../helpers/pub_sub.js');

class CharacterInfoView{

  constructor(){

    this.container = document.querySelector('div#character-info');
  }

  bindEvents(){

    PubSub.subscribe('Characters:selected-character-ready', (event) => {
      const data = event.detail;
      console.log(data);
      this.render(data);
    });
  }

  render(character){
    this.container.innerHTML = '';

    const characterName = document.createElement('h2');
    characterName.textContent = `${character.name}`;
    this.container.appendChild(characterName);

    const characterStatus = document.createElement('p');
    characterStatus.textContent = `STATUS: ${character.status}`;
    this.container.appendChild(characterStatus);

  }
}

module.exports = CharacterInfoView;
