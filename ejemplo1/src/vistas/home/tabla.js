import { html, LitElement } from "lit-element";

class Tabla extends LitElement {
    static get properties() {
        return {
            lista: {type: Array}
        }
    }

    render() {
        return html`
            <h1>Tabla de registros</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>

                <body>
                    ${
                        this.lista.map((elemento) => {
                            return html`
                                <tr>
                                    <td>${elemento.nombre}</td>
                                    <td>${elemento.apellidos}</td>
                                    <td>${elemento.edad}</td>
                                </tr>
                            `
                        })
                    }
                </body>
            </table>
        `
    }
}

window.customElements.define('wc-tabla', Tabla);