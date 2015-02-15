riot.tag('paginator', '<ul> <li class="{ disabled: current==1 }" onclick="{ prev }">&lt;</li> <li each="{ num in range }" class="{ active: parent.current==num }" onclick="{ parent.page }">{ num }</li> <li class="{ disabled: current==total }" onclick="{ next }">&gt;</li> </ul>', function(opts) {
  var self = this

  this.init = function(o) {
    this.total = o.total      // total pages
    this.current = 1          // current page
    this.nblocks = o.nblocks  // how many to display
    this.pages = []
    for (i = 1; i <= this.total; i++) this.pages.push(i)
    this.setRange()
  }

  this.setRange = function() {
    var start = this.current <= this.nblocks ?
      1 : (this.total - this.current) >= this.nblocks ?
      this.current : this.total - this.nblocks + 1

    this.range = this.pages.slice(start - 1, start + this.nblocks - 1)
    this.update && this.update()
    this.trigger('pageChange', {
      'page': this.current
    })
  }

  this.page = function(e) {
    self.current = parseInt(e.target.innerHTML) // self because called from loop
    self.setRange()
  }

  this.next = function() {
    if (this.current == this.total) return;
    this.current = Math.min(this.total, this.current + 1)
    this.setRange()
  }

  this.prev = function() {
    if (this.current == 1) return;
    this.current = Math.max(1, this.current - 1)
    this.setRange()
  }

  this.init(opts)

  this.on('setPage', function(p) {
    if (p.page == this.current) return
    this.current = p.page
    this.setRange()
  })

});