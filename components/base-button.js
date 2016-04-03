import React from 'react';

export default class BaseButton extends React.Component {
  render() {
    const childProps = {
      type: 'button',
      role: 'button',
      'data-functional-selector': this.props.functionalSelector,
      onClick: this.props.onClick,
      className: this.props.className,
      'aria-label': this.props.ariaLabel,
      autoFocus: this.props.autoFocus,
      tabIndex: this.props.tabIndex,
      title: this.props.tooltip
    };
    const html = this.props.html;

    let component;

    if (html) {
      component = (
        <button
          {...childProps}
          dangerouslySetInnerHTML={{__html: html}}>
        </button>
      );
    } else {
      component = (
        <button
          {...childProps}>
          {this.props.text}
          {this.props.children}
        </button>
      );
    }

    return component;
  }
}

BaseButton.propTypes = {
  functionalSelector: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string,
  html: React.PropTypes.string,
  className: React.PropTypes.string,
  ariaLabel: React.PropTypes.string,
  autoFocus: React.PropTypes.bool,
  tabIndex: React.PropTypes.number,
  tooltip: React.PropTypes.string
};
