import { test } from '@bicycle-codes/tapzero'
import '../src/button-one.js'

test('button element', t => {
    document.body.innerHTML += `
        <button-element class="test">click this</button-element>
    `

    const el = document.querySelector('button-element.test button')
    t.ok(el, 'should find a button inside the `button-element`')
})

test('button element `a` tag', t => {
    document.body.innerHTML += `
        <button-element class="a-tag" href="#example">click</button-element>
    `

    const el = document.querySelector('button-element.a-tag a')
    t.equal(el?.getAttribute('href'), '#example',
        'should create an `a` tag given an `href` attribute')
})
