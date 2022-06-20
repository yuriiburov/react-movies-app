import { FC } from 'react'

import { ButtonProps } from '../interfaces'

import './styles.scss'

const OutlineButton: FC<ButtonProps> = ({ children, className, onClick }) => (
  <button className={`btn-outline ${className}`} onClick={() => onClick()}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {children}
  </button>
)

export { OutlineButton }
