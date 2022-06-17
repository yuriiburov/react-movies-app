import { FC } from 'react'

import { Button } from '../button'

import { ButtonProps } from '../interfaces'

import './outlineButton.scss'

const OutlineButton: FC<ButtonProps> = ({ children, className, onClick }) => (
  <Button className={`btn-outline ${className}`} onClick={() => onClick()}>
    {children}
  </Button>
)

export { OutlineButton }
