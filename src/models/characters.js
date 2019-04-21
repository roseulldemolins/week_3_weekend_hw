const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

class Characters {

  constructor() {
    this.data = []
  }

  getData() {
    const url = `https://rickandmortyapi.com/api/character/`
    const requestHelper = new RequestHelper(url);

    requestHelper.get()
      .then(data => {
        this.data = data
        PubSub.publish('Characters:all-characters-ready', this.data)
      })
      .catch(message => {
        console.error(message);
      })
  }

  bindEvents(){
    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      this.publishCharacterDetail(selectedIndex);
    });
  };

  publishCharacterDetail(characterIndex){
    const selectedCharacter = this.data.results[characterIndex];
    PubSub.publish('Characters:selected-character-ready', selectedCharacter);

  };

};

module.exports = Characters;
