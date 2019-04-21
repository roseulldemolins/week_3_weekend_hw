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
  
    clearCharacter() {
      this.container.innerHTML = '';
    }


  render(character){

    this.clearCharacter()

    const characterName = document.createElement('h2');
    characterName.textContent = `${character.name}`;
    document.getElementById('div2').appendChild(characterName);

    const characterStatus = document.createElement('p');
    characterStatus.textContent = `STATUS: ${character.status}`;
    document.getElementById('div2').appendChild(characterStatus);

    const characterType = document.createElement('p');
    characterType.textContent = `TYPE: ${character.type}`;
    document.getElementById('div2').appendChild(characterType);

    const characterGender = document.createElement('p');
    characterGender.textContent = `GENDER: ${character.gender}`;
    document.getElementById('div2').appendChild(characterGender);

    const characterOrigin = document.createElement('p');
    characterOrigin.textContent = `ORIGIN: ${character.origin.name}`;
    document.getElementById('div2').appendChild(characterOrigin);

    const characterImage = document.createElement('img')
    characterImage.src = character.image
    document.getElementById('div1').appendChild(characterImage)

  }
}




module.exports = CharacterInfoView;
