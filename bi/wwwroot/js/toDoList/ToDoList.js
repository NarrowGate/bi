
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
                    @showdeletemodal="openmodal" 
                    @deleteitem="deleteitem"
                >
                </to-do-item>
            </div>

            <div class="modalOverlay" v-if="showModal">
                <div class="modale">
                    <button value="Delete" @click="deleteitem">Delete</button>
                    <button value="Cancel" @click="cancelDialog">Cancel</button>
                </div>
            </div>

        </div>
    `,

    data() {

        return {
            items : ['a', 'b', 'abdsdfs'],
            isEmpty: false,
            showModal: false,
            deleteItem: 0
        }

    },
    
    methods: {

        additem:  function() {
            this.items.push(this.$refs.addinput.value);
        },

        deleteitem: function() {
            this.items.splice(this.deleteItem, 1);
            this.showModal = false;
        },

        openmodal: function(item) {
            this.showModal = true;
            this.deleteItem = item;
        },

        cancelDialog: function() {
            this.showModal = false;
        }

    },

}

export {
    todolist as default    
}