import '../src/button-one.css'
import '../src/button-one.js'
import '../src/button-two.js'
import '../src/button-two.css'
import './index.css'
import Debug from '@bicycle-codes/debug'
const debug = Debug()

document.body.innerHTML += `
    <div class="one">
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
    </div>

    <div class="two">
        <button-two>
            hello two
        </button-two>
    </div>
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

const el2 = document.querySelector('button-two')
el2?.addEventListener('click', async ev => {
    ev.preventDefault()
    debug('click two')
    el2.setAttribute('spinning', '')
    await sleep(2000)
    el2.removeAttribute('spinning')
})

function sleep (ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
