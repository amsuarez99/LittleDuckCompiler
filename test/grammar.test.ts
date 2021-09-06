import { grammar } from '../src'
import fs from 'fs'

describe('grammar', () => {
  it('supports a correct grammar', () => {
    const input = fs.readFileSync(__dirname + '/correct_input.txt', 'utf-8')
    expect(grammar.match(input).succeeded()).toBe(true)
  })

  it('rejects a wrong grammar', () => {
    const input = fs.readFileSync(__dirname + '/wrong_input.txt', 'utf-8')
    expect(grammar.match(input).succeeded()).toBe(false)
  })
})
