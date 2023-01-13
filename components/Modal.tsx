import React, { ReactChildren, useEffect } from 'react'
import ReactPortal from './ReactPortal'

interface modalProps {
  children: React.ReactChildren | React.ReactChild
  isOpen: boolean
  handleClose: () => void
}

const Modal = ({ children, isOpen, handleClose }: modalProps) => {
  //close modal on Escape
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null

    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  useEffect(() => {})

  //close modal on Scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed top-0 left-0 h-screen w-screen z-40 bg-neutral-800 opacity-50" />
        <div className="fixed rounded-lg flex-col box-border z-50 bg-white min-w-fit overflow-hidden p-5 inset-y-36 inset-x-96">
          <div className="box-border h-5/6">{children}</div>
        </div>
      </>
    </ReactPortal>
  )
}

export default Modal
