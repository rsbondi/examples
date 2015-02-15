    // could pass additional attributes to access ex. colors.selected[i].value
    var colors = riot.mount('#colors', {
      selections: [{
        name: "Red"
      }, {
        name: "Blue"
      }, {
        name: "Green"
      }, {
        name: "White"
      }]
    })[0];

    var hobbies = riot.mount('#hobbies', {
      selections: [{
        name: "Art"
      }, {
        name: "Writing"
      }, {
        name: "Meditation"
      }, {
        name: "Sports"
      }, {
        name: "Music"
      }, {
        name: "Computers"
      }]
    })[0];
