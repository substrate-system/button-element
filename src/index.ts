import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'button-element': ButtonElement
    }
}

export class ButtonElement extends HTMLElement {
    // constructor () {
    //     super()
    // }

    // Define the attributes to observe
    // need this for `attributeChangedCallback`
    // static observedAttributes = ['exmaple']

    // /**
    //  * Handle [example] attribute changes
    //  *
    //  * @param  {string} oldValue The old attribute value
    //  * @param  {string} newValue The new attribute value
    //  */
    // handleChange_example (oldValue:string, newValue:string) {
    //     debug('handling example change', oldValue, newValue)

    //     if (newValue === null) {
    //         // [example] was removed
    //     } else {
    //         // set [example] attribute
    //     }
    // }

    // /**
    //  * Runs when the value of an attribute is changed on the component
    //  * @param  {string} name     The attribute name
    //  * @param  {string} oldValue The old attribute value
    //  * @param  {string} newValue The new attribute value
    //  */
    // attributeChangedCallback (name:string, oldValue:string, newValue:string) {
    //     this[`handleChange_${name}`](oldValue, newValue)
    //     debug('an attribute changed', name)
    // }

    disconnectedCallback () {
        debug('disconnected')
    }

    connectedCallback () {
        this.innerHTML = `<button>
            ${Array.from(this.childNodes).map(el => {
                return el.textContent
            })}
        </button>`
    }
}

customElements.define('button-element', ButtonElement)
