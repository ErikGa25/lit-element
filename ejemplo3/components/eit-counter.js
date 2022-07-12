import {LitElement, html, css} from 'lit';
import { WiredButton } from 'wired-elements/lib/wired-button.js'
import { WiredCard } from'wired-elements/lib/wired-card.js';
//import { WiredInput } from'wired-elements/lib/wired-input.js';
import '@dile/dile-input/dile-input';
import { WiredSlider } from'wired-elements/lib/wired-slider.js';

export class EitCounter extends LitElement {
    // plantilla para CSS
    static styles = [
        css`
            :host {
                /*border: 1px solid blue;*/
                display: block;
                //padding: 1em;
            }
            h2 {
                color: red;
            }
            .parrafo {
                font-size: 1.2em;
            }
            wired-input {
                width: 60px;
            }
            wired-button {
                background-color: #ccf;
            }
            wired-button.decrement {
                background-color: #e16969;
            }
            wired-card {
                padding: 2em;
            }
            @media(min-width: 500px) {
                .parrafo {
                    color: red;
                }
            }
        `
    ];

    // definicion de propiedades
    static properties = {
        counter: { 
            type: Number,
            reflect: true
        },
        quantity: {
            type: Number
        }
    }

    constructor() {
        super();
        this.counter = 0;
        this.quantity = 10;
    }

    render() {
        // plantilla para renderizar el HTML
        return html`
            <wired-card elevation="3">
                <slot></slot>
                <p class="parrafo">${this.counter}</p>
                <p>
                    <!--<wired-input id="quantity" type="number" .value="${this.quantity}"></wired-input>-->
                    <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad"></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="10" 
                        min="1" 
                        max="20"
                        @change=${this.doChangeQuantity}>
                    </wired-slider>
                </p>
                <!-- Eventos -->
                <wired-button @click=${this.increment}>Incrementar</wired-button>
                <wired-button @click=${this.decrement} class="decrement">Decrementar</wired-button>
            </wired-card>
        `;
    }

    /*get quantity() {
        return this.shadowRoot.querySelector('#quantity').value;
    }*/
    doChangeQuantity(e) {
        this.quantity = e.detail.value;
    }

    increment() {
        this.counter += parseInt(this.quantity);
    }

    decrement() {
        this.counter -= parseInt(this.quantity);
    }
}

customElements.define('eit-counter', EitCounter);