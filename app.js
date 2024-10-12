const app = Vue.createApp({
    data() {
        return {
            newTodo:'',
            todos:[],
            completed:[],
        };
    },
    methods: {
        addTodo(){
            if(this.newTodo.trim() != '') {
                this.todos.push(this.newTodo);
                this.newTodo='';
            }
        },
        
        deleteTodo(index){
           this.todos.splice(index, 1);
        },
        
        // completeTodo(index){
        //     this.completed.push(this.todos[index]);
        //     this.todos.splice(index, 1);
        // },

        completeTodo(index){
                var c = this.todos[index]
                this.completed.push(c)
                this.todos.splice(index, 1);
        },

    },
});
app.mount("#app")