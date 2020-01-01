
import todoitem from './to_do_item.js';


let todolist = {

    template: 
    `
        <div>

            <div>

                <div class="row">

                    <div class="col-sm-8 itemAddInp">
                        <input type="text" ref="addinput">    
                    </div>

                    <div class="col-sm-4">
                        <a href="" @click.prevent="add" class="addItem">
                            <i class="fas fa-plus"></i>
                        </a>            
                    </div>
                    
                </div>                    

            </div>
        
            <div class="itemsList">

                <to-do-item
                    :items="items"
                >
                </to-do-item>

            </div>

        </div>

    `,
    
    props: ['items'],

    methods: {

        add:  function() {
            this.$emit('newitem', this.$refs.addinput.value)
        }

    },

    components: {
        toDoItem: todoitem,
    }

}

export {

    todolist as default
    
}
