
import todoitem from './ToDoItem.js';
import modal from '../components_common/Modal.js';



let todolist = {
    
    components: {
        toDoItem: todoitem,
        modale: modal
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
            <modale
                :showmodal = "showModal"
                @ok="deleteitem"
                @cancel="cancelDialog"
            >
            </modale>
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