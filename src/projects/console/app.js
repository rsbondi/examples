riot.tag('app', '<form onsubmit="{ add }"><input id="message" type="text"><button type="submit">Add</button></form>  <label>log <input type="radio" name="cls" onclick="{ set }" value="log" checked></label>  <label>warn <input type="radio" name="cls" onclick="{ set }" value="warn"></label>  <label>debug <input type="radio" name="cls" onclick="{ set }" value="debug"></label>  <label>error <input type="radio" name="cls" onclick="{ set }" value="error"></label>', function(opts) {
    
  this.cls = 'log'

  this.add = function() {
      riotConsole.add({message: message.value, cls: this.cls})
      message.value=''
    }
    
  this.set = function(e) {
      this.cls = e.target.value
      riotConsole.add({message: 'now logging type '+this.cls, cls: this.cls})
      return true
    }
})