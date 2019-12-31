
let todolist = {

    template: 
    `
        <div>
            <a href="" @click.prevent="additem">Add item</a>
            <input type="text" ref="addItem">
        
            <ul>
                <li v-for="item in items">{{item}}</li>
            </ul>
        </div>
        
    `,
    
    props: ['items'],

    methods: {

        additem: function() {
            this.$emit('newitem', this.$refs.addItem.value)
        }

    }

}

export {

    todolist as default
    
}