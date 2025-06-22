# Angular 20 Beyond Basics: UI Magic (Material + Tailwind)

## Angular Material Integration

Angular Material 20 integrates seamlessly with your Angular project.

### Installation

To add Angular Material to your project, run:

```bash
ng add @angular/material
```

### Configuration

Angular Material will automatically modify your `angular.json` and `styles.css` (or `styles.scss` if you chose that initially) files during installation.

## Tailwind CSS 4 Integration

### Installation

Tailwind CSS 4 is a ground-up rewrite with performance improvements and a simplified setup.

```bash
npm install tailwindcss @tailwindcss/postcss postcss --force
```

**Package breakdown:**
- `tailwindcss`: The core Tailwind CSS package
- `@tailwindcss/postcss`: The PostCSS plugin for Tailwind CSS 4
- `postcss`: Essential for processing CSS with plugins like Tailwind CSS
- `--force`: Often needed with new major versions to resolve potential peer dependency conflicts

### Configure PostCSS

Tailwind CSS works as a PostCSS plugin. Create a `.postcssrc.json` file in the root of your project:

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

This configuration tells PostCSS to process your CSS files using the Tailwind CSS plugin.

### Import Tailwind CSS into Global Styles

Open your `src/styles.css` (or `src/styles.scss`) file and add the Tailwind CSS import:

```css
/* You can add global styles to this file, and also import other style files */
@use "tailwindcss";

/* You can also import Angular Material's theme here if it wasn't added automatically */
/* @include mat.all-component-themes($your-material-theme); */
```

## Usage

### Using Angular Material Components

Import the necessary Material modules in your components:

```typescript
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  // ... other component configuration
})
```

### Using Tailwind CSS Classes

Apply Tailwind utility classes directly in your templates:

```html
<mat-card class="mt-6 p-6 rounded-lg shadow-xl bg-white">
  <mat-card-title class="text-2xl font-semibold mb-4 text-gray-800">
    Card Title
  </mat-card-title>
  <mat-card-content>
    <p class="text-lg text-gray-700 mb-4">
      This is styled with Tailwind CSS utility classes.
    </p>
    <button mat-raised-button color="primary" class="hover:opacity-90">
      Click Me
    </button>
  </mat-card-content>
</mat-card>
```

## Best Practices

### Styling Approach

1. **Use Tailwind classes in templates** for component-specific styling
2. **Use SCSS for global Material overrides** when needed
3. **Avoid `@apply` in global styles** with Tailwind CSS v4
4. **Combine both frameworks** for the best of both worlds

### Performance

- Tailwind CSS v4 includes only the utilities you actually use
- Angular Material components are tree-shakeable
- Both frameworks work together efficiently

## Troubleshooting

### Common Issues

1. **Material components not recognized**: Make sure to import the required Material modules
2. **Tailwind classes not working**: Verify PostCSS configuration and imports
3. **Build errors**: Check for proper module imports and syntax

### Build Commands

```bash
# Development
npm start

# Production build
npm run build

# Watch mode
npm run watch
```

## Resources

- [Angular Material Documentation](https://material.angular.io/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Angular Documentation](https://angular.io/docs)

