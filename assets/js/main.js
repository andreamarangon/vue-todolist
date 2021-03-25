var app = new Vue({
  el: '#root',
  data: {
    inputTxt : '',
    todos: [
      {
        title: 'Fare la spesa',
        status: 'todo'
      },
      {
        title: 'Andare in piscina',
        status: 'todo'
      },
      {
        title: 'Guardare il webinar',
        status: 'done'
      },
    ],
  },
  computed : {
    todosComputed: function () {
      let todosDone = this.todos.filter((todo) => todo.status == 'done');
      let todosTodo = this.todos.filter((todo) => todo.status == 'todo');
      return [...todosTodo, ...todosDone];
    }
  },
  methods: {
    add: function () {
      if (this.inputTxt != '') {
        let obj = {
          title: this.inputTxt,
          status: 'todo'
        }
        this.todos.push(obj);
        this.inputTxt = '';
      }
    },
    check: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index].status = 'done';
    },
    remove: function (todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    }
  }
});
