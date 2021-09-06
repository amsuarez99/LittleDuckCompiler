import fs from 'fs'
import ohm from 'ohm-js'

const source = fs.readFileSync(`${__dirname}/grammar.ohm`, 'utf-8')
const grammar = ohm.grammar(source)

export { grammar }
