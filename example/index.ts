import { signal } from '@preact/signals'
import '../src/index.css'
import Debug from '@bicycle-codes/debug'
import type { RequestSignal } from '../src/index.js'
import '../src/index.js'
import './index.css'
const debug = Debug()

// @ts-expect-error dev
window.signal = signal

document.body.innerHTML += `
    <button-element class="tester">hello</button-element>
`

// @ts-expect-error dev
const el = window.el = document.querySelector('button-element')!

const request:RequestSignal = signal(null)
el.request = request

el?.addEventListener('click', async ev => {
    ev.preventDefault()
    debug('click')
    request.value = 'pending'
    await sleep(2000)
    request.value = true
})

function sleep (ms:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
