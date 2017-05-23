import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './styles.styl'

const ModalTitle = ({ title }) =>
  (
    <h2 className={styles['coz-modal-title']}>{title}</h2>
  )

const ModalCloseButton = ({ hasCloseButton, dismissAction, dismissText }) =>
  hasCloseButton &&
  (
    <button
      className={classNames('coz-btn', 'coz-btn--close', styles['coz-btn-modal-close'])}
      onClick={dismissAction}
      >
      <span className='coz-hidden'>{dismissText}</span>
    </button>
)

const ModalCross = ({ withCross, secondaryAction, secondaryText }) => (
  <ModalCloseButton
    hasCloseButton={withCross}
    dismissAction={secondaryAction}
    dismissText={secondaryText} />
)

const ModalDescription = ({ description }) =>
  description &&
  (
    <div className={classNames(styles['coz-modal-content'], styles['coz-description'])}>
      {description}
    </div>
  )

const ModalButtons = ({ secondaryText, secondaryAction, secondaryType, primaryText, primaryAction, primaryType }) => {
  const displayPrimary = primaryText && primaryAction
  const displaySecondary = secondaryText && secondaryAction
  return (displaySecondary || displayPrimary) &&
    (
      <div className={classNames(styles['coz-modal-content'], styles['coz-modal-buttons'])}>
        { displaySecondary &&
          <button className={classNames('coz-btn', 'coz-btn--' + secondaryType)} onClick={secondaryAction}>
            {secondaryText}
          </button>
        }
        { displayPrimary &&
          <button className={classNames('coz-btn', 'coz-btn--' + primaryType)} onClick={primaryAction}>
            {primaryText}
          </button>
        }
      </div>
    )
}

const ESC_KEYCODE = 27

class Modal extends Component {
  constructor (props) {
    super(props)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleOutsideClick = this.handleOutsideClick.bind(this)
  }

  componentDidMount () {
    if (this.props.hasCloseButton || this.props.withCross) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  }

  componentWillUnmount () {
    if (this.props.hasCloseButton || this.props.withCross) {
      document.removeEventListener('keydown', this.handleKeydown)
    }
  }

  handleKeydown (e) {
    if (e.keyCode === ESC_KEYCODE) {
      this.props.secondaryAction()
    }
  }

  handleOutsideClick (e) {
    if (e.target === e.currentTarget) this.props.secondaryAction()
  }

  render () {
    const { children, title, withCross, hasCloseButton } = this.props
    if (withCross) console.warn('Modal `withCross` property is deprecated and will soon be removed, please use `hasCloseButton` instead.')
    return (
      <div className={styles['coz-modal-container']}>
        <div
          onClick={(withCross || hasCloseButton) && this.handleOutsideClick}
          className={styles['coz-overlay']}
        >
          <div className={styles['coz-modal']}>
            {title && <ModalTitle {...this.props} />}
            {withCross && !hasCloseButton && <ModalCross {...this.props} />}
            {hasCloseButton && <ModalCloseButton {...this.props} />}
            <ModalDescription {...this.props} />
            { children }
            <ModalButtons {...this.props} />
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.node,
  secondaryType: React.PropTypes.string,
  secondaryText: React.PropTypes.string,
  secondaryAction: React.PropTypes.func,
  dismissAction: React.PropTypes.func,
  dismissText: React.Proptypes.string,
  primaryType: React.PropTypes.string,
  primaryText: React.PropTypes.string,
  primaryAction: React.PropTypes.func,
  withCross: React.PropTypes.bool,
  hasCloseButton: React.PropTypes.bool
}

Modal.defaultProps = {
  primaryType: 'secondary',
  secondaryType: 'regular',
  withCross: true,
  hasCloseButton: true
}

export default Modal
