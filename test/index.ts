import { test } from '@bicycle-codes/tapzero'
import '../src/button-one.js'

test('button-one element', t => {
    document.body.innerHTML += `
        <button-one class="test">click this</button-one>
    `

    const el = document.querySelector('button-one.test button')
    t.ok(el, 'should find a button inside the `button-one element`')
})

test('button element `a` tag', t => {
    document.body.innerHTML += `
        <button-one class="a-tag" href="#example">click</button-one>
    `

    const el = document.querySelector('button-one.a-tag a')
    t.equal(el?.getAttribute('href'), '#example',
        'should create an `a` tag given an `href` attribute')
})
