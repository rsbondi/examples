riot.tag('theme', '<link rel="stylesheet" href="{style}">', function(opts) {
  
    this.style='style.css'
    
    this.switch = function(s) {
      this.style = s
      this.update()
    }
    
})

riot.tag('theme-switch', '<select onchange="{switch}"><option value="style.css">default</option><option value="style2.css">alt</option></select>', function(opts) {
  
  this.switch = function() {
    this.trigger('switch', this.root.firstChild.value)
  }
})