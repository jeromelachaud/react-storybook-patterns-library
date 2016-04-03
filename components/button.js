import React from 'react';
import _extend from 'lodash/object/extend';
import BaseButton from './base-button';
import classNames from 'classnames';

export default class Button extends React.Component {
  render() {
    const childProps = _extend({}, this.props, {
      className: classNames('button', this.props.className)
    });

    return (
      <BaseButton
        {...childProps} />
    );
  }
}

Button.propTypes = {
  className: React.PropTypes.string
};
