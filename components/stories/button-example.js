import React from 'react';
import BaseButton from '../base-button';
import Button from '../button';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .add('Button', () => (
    <button className="button" onClick={action('clicked')}>Button</button>
  ))
  .add('Button Create', () => (
    <button className="button button button--cta-create" onClick={action('clicked')}>Button Create</button>
  ))
  .add('Button Play', () => (
    <button className="button button button--cta-play" onClick={action('clicked')}>Button Play</button>
  ))

  .add('Button Disabled', () => (
    <button className="button is-disabled" disabled>Button Disabled</button>
  ))

  .add('Button Positive', () => (
    <button className="button button--positive" onClick={action('clicked')}>Button Positive</button>
  ))

  .add('Button Warning', () => (
    <button className="button button--warning" onClick={action('clicked')}>Button Warning</button>
  ))

  ;
