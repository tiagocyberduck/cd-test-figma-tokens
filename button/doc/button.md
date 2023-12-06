```js script
import '../../tokens.scss';
import '../button.scss';
```

# Button

A set of classes implementing diffent button types with all necessary states.

## Setup

```scss
@import './node_modules/@divriots/starter-sass/tokens.scss';

// all components
@import './node_modules/@divriots/starter-sass/components.scss';
// or button only
@import './node_modules/@divriots/starter-sass/button/button.scss';
```

## Demos

### Primary

```html preview-story
<button class="btn">Primary</button>
<button class="btn" disabled>Disabled</button>
```

### Primary (Dark Mode)

```html preview-story
<div class="-dark-mode">
    <button class="btn">Primary</button>
    <button class="btn" disabled>Disabled</button>
</div>
```

### Secondary

```html preview-story
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--secondary" disabled>Disabled</button>
```

### Secondary (Dark Mode)

```html preview-story
<div class="-dark-mode">
    <button class="btn btn--secondary">Primary</button>
    <button class="btn btn--secondary" disabled>Disabled</button>
</div>
```

### Outline

```html preview-story
<button class="btn btn--outline">Outline</button>
<button class="btn btn--outline" disabled>Disabled</button>
```

### Outline (Dark Mode)

```html preview-story
<div class="-dark-mode">
    <button class="btn btn--outline">Primary</button>
    <button class="btn btn--outline" disabled>Disabled</button>
</div>
```

### Negative

```html preview-story
<button class="btn btn--negative">Negative</button>
<button class="btn btn--negative" disabled>Disabled</button>
```

### Negative (Dark Mode)

```html preview-story
<div class="-dark-mode">
    <button class="btn btn--negative">Primary</button>
    <button class="btn btn--negative" disabled>Disabled</button>
</div>
```

### Sizes

```html preview-story
<button class="btn btn--small">Small</button>
<button class="btn">Medium</button>
<button class="btn btn--large">Large</button>
<button class="btn btn--xlarge">Extra Large</button>
```
