const todo = new Vue({
  el: '#todo',
		data: {
      newTask: '',
			todoList: []
      },
      methods: {
        addTask: function() {
          this.todoList.push(this.newTask);
        },
        removeTask: function( task ){
          const index = this.todoList.indexOf(task);
								this.todoList.splice(index, 1);
        }

		}
});
