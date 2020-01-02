
import todoitem from './ToDoItem.js';


let todolist = {
    
    components: {
        toDoItem: todoitem
    },

    template: 
    `
        <div class="outer">
            <div class="row">
                <div class="col-sm-8 itemAddInp">
                    <input type="text" ref="addinput">    
                </div>

                <div class="col-sm-4">
                    <a href="" @click.prevent="additem" class="addItem">
                        <i class="fas fa-plus"></i>
                    </a>            
                </div>                    
            </div>                    
        
            <div class="itemsList">
                <to-do-item 
                    v-for="(item, index) in items" :key="index"
                    :item="item" 
                    :index="index" 
                    @deleteitem="deleteitem"
                >
                </to-do-item>
            </div>
        </div>
    `,

    data() {

        return {
            items : ['a', 'b', 'abdsdfs'],
            isEmpty: false
        }

    },
    
    methods: {

        additem:  function() {
            this.items.push(this.$refs.addinput.value);
        },

        deleteitem: function(item) {
            this.items.splice(item, 1);
        }

    },

}

export {
    todolist as default    
}