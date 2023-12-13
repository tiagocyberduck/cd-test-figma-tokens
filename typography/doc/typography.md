```js script
import '../../tokens.scss';
import '../typography.scss';
```

# Typography

A set of classes to define basic typography.

## Setup

```scss
@import './node_modules/@divriots/starter-sass/tokens.scss';

// all components
@import './node_modules/@divriots/starter-sass/components.scss';
// or button only
@import './node_modules/@divriots/starter-sass/button/button.scss';
```

## Demos

### Headlines

```html preview-story
<h1>H1 Headline</h1>
<h2>H2 Headline</h2>
<h3>H3 Headline</h3>
<h4>H4 Headline</h4>
<h5>H5 Headline</h5>
```

### List

```html preview-story
<ul>
    <li>List item #1</li>
    <li>List item #2</li>
    <li>List item #3</li>
</ul>
```

### Blank List

```html preview-story
<ul class="-list-reset">
    <li>List item #1</li>
    <li>List item #2</li>
    <li>List item #3</li>
</ul>
```

### Link

```html preview-story
<a href="#" class="link link--inline">Inline Link</a><br /><br />
<a href="#" class="link link--btn">Button Link</a>
```