import { attributesToString } from '@substrate-system/util'

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'button-two': ButtonTwo
    }
}

export class ButtonTwo extends HTMLElement {
    static observedAttributes = ['spinning', 'disabled']

    constructor () {
        super()

        if (this.hasAttribute('href')) {
            this.classList.add('link')
        }

        const classes = ([
            'button',
            this.hasAttribute('spinning') ? 'spinning' : null
        ]).filter(Boolean).join(' ')

        if (this.hasAttribute('spinning')) this.classList.add('spinning')

        // if href, then render a link
        const href = this.getAttribute('href')
        const tag = href ? 'a' : 'button'
        this.removeAttribute('href')

        this.innerHTML = `<${tag}${href ? ` href=${href} ` : ''}
            class="${classes}"
            ${attributesToString(Array.from(this.attributes))}
        >
            <span class="button-content">
                ${this.textContent}
            </span>
        </${tag}>`

        this.querySelector('button')?.addEventListener('click', ev => {
            if (this.hasAttribute('disabled')) {
                ev.preventDefault()
                ev.stopPropagation()
            }
        })
    }

    spinning (spin:boolean) {
        if (spin) {
            this.classList.add('spinning')
        } else {
            this.classList.remove('spinning')
        }
    }

    /**
     * Runs when the value of an attribute is changed on the component
     *
     * @param  {string} name     The attribute name
     * @param  {string} oldValue The old attribute value
     * @param  {string} newValue The new attribute value
     */
    attributeChangedCallback (name:string, oldValue:string, newValue:string) {
        this[`handleChange_${name}`](oldValue, newValue)
    }

    /**
     * `null` means it is absent; empty string means it exists
     */
    handleChange_spinning (_, newValue) {
        if (newValue === null) {
            // remove class
            this.querySelector('button')?.classList.remove('spinning')
            this.classList.remove('spinning')
        } else {
            // add class
            this.querySelector('button')?.classList.add('spinning')
            this.classList.add('spinning')
        }
    }

    handleChange_disabled (_, newValue) {
        if (newValue !== null) {
            this.querySelector('button')?.setAttribute('disabled', '')
        } else {
            this.querySelector('button')?.removeAttribute('disabled')
        }
    }
}

customElements.define('button-two', ButtonTwo)
