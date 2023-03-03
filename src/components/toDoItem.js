class ToDoItem extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.task = this.getAttribute('task');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = 
        `
            <li class="item">
                <input type="checkbox" name="task1" id="task1">
                <label for="task1">${this.task}</label>
                <button>Delete</button>
            </li>
        `
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => this.remove());
    }

    static get observedAttributes() { return ['task']; }

    attributeChangedCallback(propName, _, newValue){
        this[propName] = newValue;
        this.render();
    }
}

customElements.define('to-do-item' , ToDoItem)
export default ToDoItem;
