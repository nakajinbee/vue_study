Vue.createApp({
    data: function(){
        return{
            todoTitle:'',
            todoDescription:'',
            todoCategories:[],
            hideDoneTodo:false,
            searchWord:'',
            order:"desc"
        }
    },
}).mount("#app")