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

