# To test text input

## Add your text input to the test folder

```bash
touch test/new_input.txt
```

## Create a new test

In the file: `grammar.test.ts` create a new test for your input

```typescript
it('tests new input', () => {
  const input = fs.readFileSync(__dirname + '/new_input', 'utf-8')
  expect(grammar.match(input).succeeded()).toBe(true | false)
})
```

## Run your test

```bash
yarn test
```
