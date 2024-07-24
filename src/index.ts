// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'button-element': ButtonElement
    }
}

export class ButtonElement extends HTMLElement {
    static observedAttributes = ['spinning']

    /**
     * Runs when the value of an attribute is changed on the component
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

    connectedCallback () {
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
        >
            <span class="button-content">
                ${this.textContent}
            </span>
        </${tag}>`
    }
}

customElements.define('button-element', ButtonElement)
