import Column from "./components/Column.js";
import Component from "./core/Component.js";

export default class App extends Component {
  setup() {
    this.state = {
      columns: [{ title: "해야할 일" }, { title: "하고 있는 일" }, { title: "완료한 일" }],
    };
  }
  template() {
    return `
      <main class="flex">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="aaa"></div>
      </main>
    `;
  }
  mounted() {
    const $columns = this.$target.querySelectorAll(".column");
    $columns.forEach(($column, index) => {
      new Column($column, null, this.state.columns[index]);
    });
  }
}

new App(document.querySelector(".app"));
