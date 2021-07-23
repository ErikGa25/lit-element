import { css, html, LitElement } from 'lit-element';

class Boton extends LitElement {
    static get properties() {
        return {
            texto: {Type: String, attribute: true}
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return css`
            button{
                all:initial;
                background-color: #9292b5;
                font-family:cursive; 
                margin-right:20px;
                width: 150px;
                border-radius:10px;
                text-align:center;
                padding: 2px;
                cursor: pointer;
            };
        `
    }

    firstUpdated() {
        this.boton = this.shadowRoot.querySelector('button');
    }

    mouseDownListener(event) {
        this.boton.style.backgroundColor = '#F60';
    }

    mouseUpListener(event) {
        this.boton.style.backgroundColor = '#9292b5';
    }

    render() {
        return html`<button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${this.texto}</button>`
    }
}

window.customElements.define('wc-boton', Boton);