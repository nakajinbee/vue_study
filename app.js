Vue.createApp({
  data: function () {
    return {
      todoTitle: "",
      todoDescription: "",
      todoCategories: [],
      hideDoneTodo: false,
      searchWord: "",
      order: "desc",
    };
  },
  computed: {
    canCreateTodo: function () {
      return this.todoTitle !== "";
    },
  },
}).mount("#app");
