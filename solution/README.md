# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/customers
- We will only work on the "customers" page.

## Tasks
- Generate a new pipe: `pipe/ip`
- The pipe's transform method is waiting for two parameters:
  - value: array of Customers
  - txt: string for filtering customers
- The transform method filters customers by their ip_address. Where the ip_address 
includes the txt string, the filter method callback returns true.

- Open [customers.component.ts](src/app/page/customers/customers.component.ts)
- Create a new variable in the class:
  - name: ipFilter
  - value: a signal with an empty string initial value
- Change the value of the list variable to the return value of the CustomerService getAll method

- Open [customers.component.html](src/app/page/customers/customers.component.html)
- Create a new row at the top of the content
- Create a new input field with the form-control class
- Bind the value property of the input with the ipFilter signal
- When the input value is changed, update set the ipFilter signal value to the current value of the input

- Set ip pipe to the last pipe after the async pipe in the @for loop
- Give the ipFilter signal value to the ip pipe

## Testing
- `npm test`
- Testing individually: `npm run test:01`, `npm run test:02`

## Further helps

### Create a pipe
```cmd
ng g pipe pipe/filter
```

### Bind a signal with an input field
```html
<input 
  #inp
  [value]="sig()"
  (input)="sig.set(inp.value)">
```

### Apply a pipe to filter data after an AsyncPipe
```html
@for (let row of list$ | async | myPipe:sig()) {
  ...
}
```
