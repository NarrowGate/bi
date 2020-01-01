
import deleteitem from '../components_common/Delete.js';

let todoitem = {
    template: 
    `
    <div class="row">
        <div class="col-sm-8" v-for="item in items">
            <div class="toDoItem">
                {{item}}
            </div>  
            <delete
            >
            </delete>      
        </div>    
    </div>
    `,
    props : ["items"],
    methods: {

    },
    components: {
        delete: deleteitem
    }    
}

export {
    todoitem as default
}