import { store } from "store";
import { getTodosAction } from "modules/todo/actions";

export class GetTodosBtn extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener("click", this.#handleClick);
  }

  #handleClick() {
    store.dispatch(getTodosAction());
  }
}

if (!window.customElements.get("get-todos-btn")) {
  window.customElements.define("get-todos-btn", GetTodosBtn, {
    extends: "button",
  });
}
