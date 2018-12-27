import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        addTodo: function(){
            // var list = this.get('model');
            // this.get('store').createRecord('todo',list).save().
            //     then( console.log(this.get('store').findAll('todo') )
            // );
            var date = this.get('date');
            var title = this.get('title');
            var body = this.get('body');
            var newTodo = this.get('store').createRecord('todo',{
                title: title,
                body:body,
                date: new Date(date)
            });
            newTodo.save();
            this.set('title',null);
            this.set('body',null);
        }
    }
});
