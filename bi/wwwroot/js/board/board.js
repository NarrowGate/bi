
import todolist from '../toDoList/ToDoList.js';

new Vue({

    el: '#toDoWrap',

    components: {
        toDoList: todolist
    }

});