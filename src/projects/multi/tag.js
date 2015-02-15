riot.tag('multi-select', selectTag.value, function(opts) {
  
  this.selections = opts.selections.sort(function(a,b) {return a.name > b.name});
  this.selected = [];
  this.showing = false;
  self = this;
  
  this.remove = function(e) {
    this._swap(e.item, this.selected, this.selections);
    this.selections.sort(function(a,b) {return a.name > b.name});

  }.bind(this);

  this.select = function(e) {
    this._swap(e.item, this.selections, this.selected);
  }.bind(this);
  
  this.show = function(e) {
    this.showing = !this.showing;
  }.bind(this);
  
  this._swap = function(item, src, dest) {
    dest.push(item);
    src.splice(src.indexOf(item), 1);
    this.showing = false;
  };
  
});
