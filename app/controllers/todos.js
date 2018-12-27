import Controller from '@ember/controller';
import sortBy from 'ember-computed-sortby';
export default Controller.extend({
    
    filter : '',
    filteredTodos: function(){
        let filter = this.get('filter');
        var rx = new RegExp(filter,'gi');
        let todos = this.model;
        return todos.filter( function(todo){
            return todo.get('title').match(rx);
        });

        }.property('arrangedContent','filter'),
     sortedTodos: sortBy('model', 'date:asc')
    
});
