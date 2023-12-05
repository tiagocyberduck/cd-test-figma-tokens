import '../../tokens.scss';
import '../button.scss';

export const btnPrimary = () => /*html*/ `<button class="btn">Accent</button>`;

export const btnPrimaryDisabled = () =>
  /*html*/ `<button class="btn" disabled>Disabled</button>`;

export const btnSecondary = () =>
  /*html*/ `<button class="btn btn-secondary">Neutral</button>`;

export const btnSecondaryDisabled = () =>
  /*html*/ `<button class="btn btn-secondary" disabled>Disabled</button>`;
