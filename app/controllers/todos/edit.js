import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        editTodo: function()
        {
            this.set('model.date',new Date(this.get('model.date')));
            this.get('model').save();
            this.transitionToRoute('todos');
        },
        delTodo: function( id)
        {
            this.get('store').find('todo', id).then(function(rec) {
                rec.destroyRecord();
            });
            this.transitionToRoute('todos');
        }
          
    }
   
});
