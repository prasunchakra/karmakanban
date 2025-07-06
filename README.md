# Karmakanban: Portfolio Gallary

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

### 2. How do you configure dynamic routing with route parameters in Angular?

- A: `{ path: 'portfolio/:username', component: Portfolio }`
- B: `{ path: 'portfolio/{username}', component: Portfolio }`
- C: `{ path: 'portfolio/[username]', component: Portfolio }`
- D: `{ path: 'portfolio/{{username}}', component: Portfolio }`

<details>
<summary><b>Answer</b></summary>

#### Answer: A

Dynamic routing with route parameters uses the colon syntax: `{ path: 'portfolio/:username', component: Portfolio }`. The `:username` is a route parameter that can be accessed in the component using `ActivatedRoute`.
</details>

---

### 3. How do you access route parameters in an Angular component?

- A: `this.route.params.subscribe(params => { ... })`
- B: `this.route.paramMap.subscribe(paramMap => { ... })`
- C: `this.route.queryParams.subscribe(params => { ... })`
- D: `this.route.data.subscribe(data => { ... })`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The modern way to access route parameters is using `paramMap`: `this.route.paramMap.subscribe(paramMap => { const username = paramMap.get('username'); })`. This provides better type safety and is the recommended approach.
</details>

---

### 4. What decorator is used to make a service injectable in Angular?

- A: `@Service()`
- B: `@Injectable()`
- C: `@Inject()`
- D: `@Provider()`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

The `@Injectable()` decorator is used to make a service injectable in Angular. It tells Angular's dependency injection system that this class can be injected into other components or services.
</details>

---

### 5. How do you configure HTTP client in Angular's application config?

- A: `provideHttpClient()` in the providers array
- B: `importHttpClient()` in the imports array
- C: `configureHttpClient()` in the configuration object
- D: `setupHttpClient()` in the setup function

<details>
<summary><b>Answer</b></summary>

#### Answer: A

HTTP client is configured by adding `provideHttpClient()` to the providers array in the application configuration. This enables HTTP functionality throughout the application.
</details>

---

### 6. What is the correct way to perform programmatic navigation in Angular?

- A: `this.router.go(['/portfolio'])`
- B: `this.router.navigate(['/portfolio'])`
- C: `this.router.redirect(['/portfolio'])`
- D: `this.router.move(['/portfolio'])`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

Programmatic navigation is done using `this.router.navigate(['/portfolio'])`. This method takes an array of route segments and navigates to the specified route.
</details>

---

### 7. How do you handle errors in RxJS observables when making HTTP requests?

- A: Using `catchError` operator with `of()` for fallback values
- B: Using `throwError` operator to re-throw the error
- C: Using `error` callback in the subscribe method only
- D: Using try-catch blocks around the observable

<details>
<summary><b>Answer</b></summary>

#### Answer: A

Error handling in RxJS observables is done using the `catchError` operator with `of()` to provide fallback values: `.pipe(catchError(error => { console.error('Error:', error); return of(null); }))`.
</details>

---

### 8. What is the purpose of the `providedIn: 'root'` option in the `@Injectable` decorator?

- A: It makes the service available only in the root component
- B: It creates a singleton instance available throughout the application
- C: It restricts the service to root-level components only
- D: It makes the service available only in the app module

<details>
<summary><b>Answer</b></summary>

#### Answer: B

`providedIn: 'root'` creates a singleton instance of the service that is available throughout the entire application. This is the most common way to provide services in Angular.
</details>

---

### 9. How do you configure lazy loading for components in Angular routes?

- A: `{ path: 'portfolio', component: Portfolio }`
- B: `{ path: 'portfolio', loadComponent: () => import('./portfolio').then(m => m.Portfolio) }`
- C: `{ path: 'portfolio', lazyLoad: Portfolio }`
- D: `{ path: 'portfolio', async: Portfolio }`

<details>
<summary><b>Answer</b></summary>

#### Answer: B

Lazy loading is configured using `loadComponent` with a dynamic import: `{ path: 'portfolio', loadComponent: () => import('./portfolio').then(m => m.Portfolio) }`. This loads the component only when the route is accessed.
</details>

---

### 10. What is the correct way to inject a service into an Angular component?

- A: `constructor(service: MyService) {}`
- B: `constructor(private service: MyService) {}`
- C: `constructor(public service: MyService) {}`
- D: All of the above are correct

<details>
<summary><b>Answer</b></summary>

#### Answer: D

All of the above are correct ways to inject a service. The `private`, `public`, or no access modifier can be used depending on whether you need to access the service from the template or other components.
</details>

---