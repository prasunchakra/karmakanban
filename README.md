# Karmakanban: Multi Role Portfolio

## Quiz Section


### 1. What is the new Angular control flow syntax for iterating over arrays?

- A: `*ngFor="let item of items"`
- B: `@for (item of items; track item.id) { ... }`
- C: `@repeat (item of items) { ... }`
- D: `@loop (item of items) { ... }`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The new Angular control flow syntax is `@for (item of items; track item.id) { ... }`. This replaces the older `*ngFor` directive and provides better performance with built-in tracking.
</details>

---

### 2. What is the main advantage of using the `track` function in Angular's new control flow?

- A: It prevents memory leaks
- B: It improves rendering performance by tracking item identity
- C: It enables automatic sorting
- D: It provides better error handling

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `track` function improves rendering performance by tracking item identity. Angular can efficiently update only the items that have changed instead of re-rendering the entire list, leading to better performance especially with large datasets.
</details>

---

### 3. What is the purpose of using `@Input()` decorator in Angular components?

- A: To emit events to parent components
- B: To receive data from parent components
- C: To inject services
- D: To define component lifecycle hooks

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `@Input()` decorator allows a component to receive data from its parent component. This enables parent-child communication and makes components more reusable by accepting external data.
</details>

---

### 4. What is the correct syntax for passing data from a parent component to a child component in Angular?

- A: `[propertyName]="data"`
- B: `(propertyName)="data"`
- C: `{{propertyName}}="data"`
- D: `*propertyName="data"`

<details>
<summary><b>Answer</b></summary>

#### Answer: A

The correct syntax is `[propertyName]="data"` using square brackets for property binding. This passes data from the parent component to the child component's `@Input()` property.
</details>

---

### 5. What is the advantage of using property binding `[property]="value"` over interpolation `{{value}}`?

- A: Property binding is faster
- B: Property binding can bind to any property, not just text content
- C: Property binding prevents XSS attacks
- D: Property binding is required for all data binding

<details>
<summary><b>Answer</b></summary>

#### Answer: B

Property binding can bind to any property (like `src`, `href`, `disabled`, etc.), while interpolation only works for text content. Property binding is more flexible and powerful for component communication.
</details>

---

### 6. What is the new Angular control flow syntax for conditional rendering?

- A: `*ngIf="condition"`
- B: `@if (condition) { ... }`
- C: `@when (condition) { ... }`
- D: `@show (condition) { ... }`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The new Angular control flow syntax for conditional rendering is `@if (condition) { ... }`. This replaces the older `*ngIf` directive and provides better performance and more intuitive syntax.
</details>

---

### 7. What is the purpose of the `@Injectable()` decorator in Angular services?

- A: To make a class available for dependency injection
- B: To define component metadata
- C: To create custom directives
- D: To handle form validation

<details>
<summary><b>Answer</b></summary>

#### Answer: A

The `@Injectable()` decorator marks a class as available to Angular's dependency injection system. It allows the class to be injected as a dependency into other classes (components, services, etc.) and manages its lifecycle.
</details>

---

### 8. How do you configure HTTP client in Angular standalone applications?

- A: Using `provideHttpClient()` in app.config.ts
- B: Using `HttpClientModule` in imports
- C: Using `@Injectable()` decorator
- D: Using `provideRouter()` configuration

<details>
<summary><b>Answer</b></summary>

#### Answer: A

In Angular standalone applications, you configure HTTP client using `provideHttpClient()` in the app.config.ts file within the providers array. This replaces the traditional `HttpClientModule` import approach.
</details>

---

### 9. What is the purpose of the `ActivatedRoute` service in Angular routing?

- A: To navigate between routes
- B: To access route parameters and query parameters
- C: To create new routes
- D: To handle route guards

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `ActivatedRoute` service provides access to information about the current route, including route parameters, query parameters, and route data. It's commonly used to extract dynamic values from the URL.
</details>

---

### 10. What is the difference between `Router` and `ActivatedRoute` services?

- A: Router is for navigation, ActivatedRoute is for accessing route data
- B: They serve the same purpose
- C: Router is deprecated in favor of ActivatedRoute
- D: ActivatedRoute is only for route guards

<details>
<summary><b>Answer</b></summary>

#### Answer: A

The `Router` service is used for programmatic navigation between routes, while `ActivatedRoute` is used to access information about the current route, such as parameters, query parameters, and route data.
</details>

---

### 11. What is the purpose of the `ngOnInit` lifecycle hook in Angular components?

- A: To handle component destruction
- B: To perform initialization logic after component creation
- C: To handle input changes
- D: To manage component state

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `ngOnInit` lifecycle hook is called after the component is initialized and all inputs are set. It's the recommended place for complex initialization logic, API calls, and setup that requires the component to be fully initialized.
</details>

---

### 12. How do you handle errors in RxJS observables using Angular services?

- A: Using try-catch blocks
- B: Using the `catchError` operator
- C: Using async/await syntax
- D: Using Promise rejection

<details>
<summary><b>Answer</b></summary>

#### Answer: B

In RxJS observables, you handle errors using the `catchError` operator. This operator catches errors from the source observable and allows you to return a fallback value or handle the error gracefully without breaking the observable chain.
</details>

---

### 13. What is the purpose of TypeScript interfaces in Angular applications?

- A: To define component templates
- B: To provide type safety and structure for data objects
- C: To handle dependency injection
- D: To manage component lifecycle

<details>
<summary><b>Answer</b></summary>

#### Answer: B

TypeScript interfaces in Angular provide type safety and structure for data objects. They define the shape of objects, making code more maintainable and helping catch errors at compile time rather than runtime.
</details>

---

### 14. What is the difference between `Observable` and `Promise` in Angular?

- A: Observable can emit multiple values, Promise emits only one
- B: They serve the same purpose
- C: Promise is deprecated in favor of Observable
- D: Observable is only for HTTP requests

<details>
<summary><b>Answer</b></summary>

#### Answer: A

Observables can emit multiple values over time and can be cancelled, while Promises emit only a single value and cannot be cancelled. Observables are more powerful for handling asynchronous operations and are the preferred choice in Angular.
</details>

---

### 15. What is the purpose of the `map` operator in RxJS?

- A: To filter values from an observable
- B: To transform values emitted by an observable
- C: To combine multiple observables
- D: To handle errors in observables

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `map` operator transforms each value emitted by an observable. It applies a function to each emitted value and returns a new observable with the transformed values, making it useful for data transformation in reactive programming.
</details>

---