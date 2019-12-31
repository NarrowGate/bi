
import todolist from '../toDoList/to_do_list.js';

new Vue({

    el: '#toDoWrap',
    data: {
        items : ['a', 'b', 'abdsdfs'],
        isEmpty: false
    },

    methods: {

        additem: function(newItem) {
            this.items.push(newItem);
        }

    },

    components: {

        toDoList: todolist
        
    }

});