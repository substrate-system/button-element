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

    disconnectedCallback () {
        this._dispose && this._dispose()
    }

    set request (req:RequestSignal) {
        this._dispose && this._dispose()
        this._request = req
        this._dispose = effect(() => {
            if (req.value === 'pending') {
                this.querySelector('.button')?.classList.add('spinning')
                return
            }

            this.querySelector('.button')?.classList.remove('spinning')
        })
    }

    get request ():RequestSignal|undefined {
        return this._request
    }

    connectedCallback () {
        debug('connected', this.innerHTML)

        this._text = this.textContent ?? undefined

        this.innerHTML = `<button class="button">
            <span class="button-content">
                ${this._text}
            </span>
        </button>`
    }
}

customElements.define('button-element', ButtonElement)
