import { FC } from 'react'

import { ButtonProps } from '../interfaces'

import './styles.scss'

const Button: FC<ButtonProps> = ({ children, className, onClick }) => (
  <button className={`btn ${className}`} onClick={() => onClick()}>
    {children}
  </button>
)

export { Button }
