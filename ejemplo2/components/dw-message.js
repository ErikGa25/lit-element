import { LitElement, html, css } from "lit";

class DwMessage extends LitElement {
    static styles = css`
        :host {
            display: block;
            border: 1px solid red;
            padding: 1em;
        }

        div {
            background-color: green;
        }

        p {
            text-decoration: underline;
        }
    `

    render() {
        return html`<div>Hola desde LitElement</div><p>Texto...</p>`;
    }
}

customElements.define('dw-message', DwMessage);