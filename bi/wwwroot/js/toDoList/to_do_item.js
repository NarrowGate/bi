let todoitem = {
    template: 
    `
    <div>
        <div class="col-sm-12" v-for="item in items">
            {{item}}
        </div>
    
    </div>
    `,
    props : ["items"],
    methods: {

    }
}

export {
    todoitem as default
}