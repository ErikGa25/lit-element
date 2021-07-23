import { html, LitElement } from "lit-element";
import './tabla';

class Home extends LitElement {
    constructor() {
        super();
        this.lista = [
            {nombre: 'María', apellidos: 'Garcia Perez', edad:30},
            {nombre: 'Alberto', apellidos: 'Reyes Mendoza', edad:30},
            {nombre: 'Pepe', apellidos: 'Fernandez', edad:30}
        ]
    }

    render() {
        return html`
            <wc-tabla .lista="${this.lista}"></wc-tabla>
        `
    }
}

window.customElements.define('wc-home', Home);