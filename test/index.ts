import { test } from '@bicycle-codes/tapzero'
import '../src/index.js'

test('example', async t => {
    document.body.innerHTML += `
        <button-element class="test">
        </button-element>
    `

    const el = document.querySelector('button-element.test button')
    t.ok(el, 'should find a button inside the `button-element`')
})
