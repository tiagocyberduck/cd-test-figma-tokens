```js script
import '../../tokens.scss';
import '../button.scss';
```

# Button

A set of classes implementing the layout when two or more buttons are used together

## Setup

```scss
@import './node_modules/@divriots/starter-sass/tokens.scss';

// all components
@import './node_modules/@divriots/starter-sass/components.scss';
// or button only
@import './node_modules/@divriots/starter-sass/button-group/button-group.scss';
```

## Demos

### Inline

```html preview-story
<button class="btn">Primary</button>
<button class="btn" disabled>Disabled</button>
```

### No gap

```html preview-story
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--secondary" disabled>Disabled</button>
```
