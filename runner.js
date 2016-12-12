var Request = bookshelf.Model.extend({
  tableName: 'Requests'
})

var r = new Request({title: 'formal request for things', description: 'I would like some things'})
r.save()
r.destroy()
