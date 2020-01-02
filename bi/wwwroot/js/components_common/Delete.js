
let remove = {
    template:         
    `
        <a class="delete" @click="deleClicked">
            <i class="fa fa-trash" aria-hidden="true"></i>
        </a>
    `,
    methods: {
        deleClicked: function() {
            this.$emit('clicked');
        }
        
    }

};

export {
    remove as default
}