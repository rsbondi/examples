riot.tag('console', '<ul class="console"><li each="{ items }" class="{ cls }">  { message }  </li></ul>', function(opts) {
  
    this.items=[]
    
    this.add = function(a) {
      this.items.push(a)
      this.update() 
      this.root.lastChild.scrollTop =  this.root.lastChild.scrollHeight // scroll when full
    }
    
    this.clear = function() {
      this.items = []
      this.update()
    }
    
})