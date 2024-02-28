# Practices

## Setup the project
- Set the current directory as the workspace: `code ./ -r`
- Install dependencies: `npm i`
- Run the development server: `npm start`
- Open the product page in the browser: http://localhost:4200/customers

## Tasks
- Generate a new component: `page/customer-edit`
- Set the router path to the CustomerEditComponent: `customers/edit/:id`

- Open [customers.component.ts](src/app/page/customers/customers.component.ts)
- Import the RouterModule
- Open [customers.component.html](src/app/page/customers/customers.component.html)
- Place a new TD element at the last of the tr elements
- Place a new div element with the `btn-group` class in that TD element
- Place a new button element with the `btn btn-info` classes in that div
- Set the RouterLink to the button, with the URL: `customers/edit/:id`, where 
the id is the id of the customer

- Open [customer-edit.component.ts](src/app/page/customer-edit/customer-edit.component.ts)
- Set an input property of the class:
  - name: id
  - transform: numberAttribute
  - value: 0
- Inject the CustomerService
- Create a new variable:
  - name: customer$
  - type: Observable<Customer>
  - value: a new Customer in Observable
- Create the ngOnInit method, which sets the customer$ variable 
to the return value of the CustomerService get method with the id

- Open [customer-edit.component.html](src/app/page/customer-edit/customer-edit.component.html)
- Place an if statement with the customer$ that is piped an AsyncPipe
- After the AsyncPipe set a Template Reference Variable to the customer$, 
named `customer`
- Inside the if statement, place a form
- Inside the form, place input elements for the following properties of the customer:
  - name
  - email
  - address
  - ip_address
  - active
- Connect the form fields to the customer properties with the NgModel directive
- Note: set the name values of the input elements correctly


## Testing
- `npm test`
- Testing individually: `npm run test:01`, `npm run test:02`

## Further helps

### Setting up an Observable in the ngOnInit method
```typescript
ngOnInit() {
  this.user$ = this.userService.get(this.id);
}
```

### Creating a template reference variable from an Observable
```html
@if (user$ | async; as user) {
  ...
}
```

### Binding an input field with an object property
```html
<input [(ngModel)]="user.email" name="email" type="email" />
```
__Warning:__ The name of the input field must match the object property name
