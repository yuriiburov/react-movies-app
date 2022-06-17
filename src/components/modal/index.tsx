import { FC, ReactNode, useEffect, useRef, useState } from 'react'

interface ModalProps {
  active: boolean
  children: ReactNode
  id: string
}

const Modal: FC<ModalProps> = props => {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    setActive(props.active)
  }, [props.active])

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

interface ModalContentProps {
  onClose: Function
  children: ReactNode
}

export const ModalContent: FC<ModalContentProps> = ({ onClose, children }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const closeModal = () => {
    contentRef.current?.parentElement?.classList.remove('active')
    if (onClose) onClose()
  }

  return (
    <div ref={contentRef} className='modal__content'>
      {children}
      <div className='modal__content_close' onClick={closeModal}>
        <i className='bx bx-x'></i>
      </div>
    </div>
  )
}

export { Modal }
