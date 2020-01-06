
let modale = {
    template:
    `
        <div class="modalOverlay" v-if="showmodal">
            <div class="modale">
                <button value="Delete" @click="ok">Delete</button>
                <button value="Cancel" @click="cancel">Cancel</button>
            </div>
        </div>
    `,
    props: ['showmodal'],
    methods: {
        ok: function() {
            this.$emit('ok');
        }, 
        cancel: function() {
            this.$emit('cancel');
        }
    }
}

export {
    modale as default
}