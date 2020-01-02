
import deleteitem from '../components_common/Delete.js';


let todoitem = {

    components: {
        delete: deleteitem
    },

    template: 
    `
        <div class="row">
            <div class="col-sm-8">
                <div class="toDoItem">
                    {{item}}
                </div>  
                <delete title="Delete item"
                    @clicked="deleteItem"
                >
                </delete>      
            </div>    
        </div>
    `,

    props : ["item", "index"],

    methods: {
        deleteItem : function() {
            this.$emit('deleteitem', this.index)
        }
    }

}

export {
    todoitem as default
}