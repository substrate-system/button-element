import '../src/index.css'
import '../src/index.js'
import './index.css'
import Debug from '@bicycle-codes/debug'
const debug = Debug()

document.body.innerHTML += `
    <button-element class="tester" title="title example">
        hello
    </button-element>
    <p>this button will spin for 2 seconds</p>

    <hr />
    <p>
        this is a link, actually
    </p>
    <button-element href="#example">
        a link that looks like a button
    </button-element>
`

// @ts-expect-error dev
const el = window.el = document.querySelector('button-element.tester')!

el?.addEventListener('click', async ev => {
    ev.preventDefault()
    debug('click')
    el.setAttribute('spinning', '')
    await sleep(2000)
    el.removeAttribute('spinning')
})

function sleep (ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
