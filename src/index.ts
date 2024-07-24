import { Signal, effect } from '@preact/signals'
import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'button-element': ButtonElement
    }
}

export type RequestSignal = Signal<boolean|'pending'|null>

export class ButtonElement extends HTMLElement {
    _request?:RequestSignal
    _dispose?:()=>any
    _text?:string

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

    // disconnectedCallback () {
    //     debug('disconnected')
    // }

    set request (req:RequestSignal) {
        this._request = req
        this._dispose = effect(() => {
            debug('request changing state', req.value)

            if (req.value === 'pending') {
                this.querySelector('.button')?.classList.add('spinning')
            }

            if (req.value === true) {
                // show checkmark
                const btn = this.querySelector('.button')!
                btn.classList.remove('spinning')
                btn.classList.add('success')

                setTimeout(() => {
                    btn.classList.remove('success')
                }, 2000)
            }

            if (req.value === false) {
                // error
            }
        })
    }

    get request ():boolean|'pending'|null {
        return this._request?.value ?? null
    }

    connectedCallback () {
        debug('connected', this.innerHTML)

        this._text = this.textContent ?? undefined
        // const classes = ([
        //     'button',
        // ]).filter(Boolean).join(' ')

        this.innerHTML = `<button class="button">
            <span class="button-content">
                ${this.textContent}
            </span>
        </button>`
    }
}

customElements.define('button-element', ButtonElement)

function svg () {
    return `
        <svg 
            class="progress-indicator__check"
            focusable="false" 
            viewBox="0 0 20 20" 
            fill="none"
        >
            <path d="m8.335 12.643 7.66-7.66 1.179 1.178L8.334 15 3.032 9.697 4.21 8.518l4.125 4.125Z" fill="currentColor"/>
        </svg>
    `
}
