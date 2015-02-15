var a = {
    title: 'I want to behave!',
    items: [{
      title: 'Avoid excessive coffeine',
      done: true
    }, {
      title: 'Be less provocative'
    }, {
      title: 'Be nice to people'
    }]

};

var b =   {
    title: 'Learn riotjs!',
      items: [{
        title: 'Set up plunker example',
        done: true
      }, {
        title: 'Set up inline template',
        done: true
      }, {
        title: 'Add multiple instances to example',
        done: true
      }, {
        title: 'Make non todo example'
      }]

};

riot.mount('todos', {todos:[a,b]});