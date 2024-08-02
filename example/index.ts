import '../src/button-one.css'
import '../src/button-one.js'
import '../src/button-two.js'
import '../src/button-two.css'
import './index.css'
import Debug from '@bicycle-codes/debug'
const debug = Debug()

document.body.innerHTML += `
    <div class="one">
        <button-one class="tester" title="title example">
            hello
        </button-one>
        <p>this button will spin for 2 seconds</p>

        <hr />
        <p>
            this is a link, actually
        </p>
        <button-one href="#example">
            a link that looks like a button
        </button-one>

        <hr />

        <button-one disabled>Disabled button one</button-one>
    </div>

    <div class="two">
        <button-two class="tester">
            hello two
        </button-two>

        <button-two class="disabled-example" disabled>
            hello disabled
        </button-two>
    </div>
`

// @ts-expect-error dev
const el = window.el = document.querySelector('button-one.tester')!

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
    await sleep(2500)
    el2.removeAttribute('spinning')
})

function sleep (ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
