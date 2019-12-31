
let todolist = {

    template: 
    `
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
        
            <div class="row">

                <div class="col-sm-12" v-for="item in items">
                    {{item}}
                </div>

            </div>

        </div>

    `,
    
    props: ['items'],

    methods: {

        add:  function() {
            this.$emit('newitem', this.$refs.addinput.value)
        }

    }

}

export {

    todolist as default
    
}