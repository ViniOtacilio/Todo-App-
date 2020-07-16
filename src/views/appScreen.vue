<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">ToDo App</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="clipped" class="side-menu">
        <md-list class="list-icons">
          <md-list-item @click="show = 'todo'">
            <md-icon>list</md-icon>
            <span class="md-list-item-text">To Do</span>
          </md-list-item>

          <md-list-item @click="show = 'doing'">
            <md-icon>hourglass_empty</md-icon>
            <span class="md-list-item-text">Doing</span>
          </md-list-item>

          <md-list-item @click="show = 'done'">
            <md-icon>check</md-icon>
            <span class="md-list-item-text">Done</span>
          </md-list-item>

          <md-list-item @click="show = 'trash'">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="text-div">
        <div v-if="show == 'todo'">
          <div class="header-todo">
            <span class="md-headline">To Do List</span>
            <span class="add-item">
              <md-icon>add_circle_outline</md-icon>
            </span>
          </div>
          
        </div>
        <div v-if="show == 'doing'">
          <h1>Doing</h1>
        </div>
        <div v-if=" show == 'done'">
          <h1>Done</h1>
        </div>
        <div v-if=" show == 'trash'">
          <h1>Trash</h1>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: "todo",
      teste: "nada"
    };
  },
  methods: {
    testeFunc: function() {
      let self = this;
      self.teste = "nadinha";
      return self.teste;
    }
  }
};
</script>

<style lang="less" scoped>
.md-list-item:hover {
  cursor: pointer;
  background-color: #f5f2f4;
}
.text-div {
  max-width: 1200px;
}

.side-menu {
  border-right: 1px solid #f5f2f4;
}

.md-list-item-container {
  color: #07576b;
}
.header-todo {
  display: flex;
  align-items: center;
  .add-item {
    margin-left: 1rem;
  }
}
//   .md-app {
//     min-height: 350px;
//     border: 1px solid rgba(#000, .12);
//   }

//    // Demo purposes only
//   .md-drawer {
//     width: 230px;
//     max-width: calc(100vw - 125px);
//   }
</style>