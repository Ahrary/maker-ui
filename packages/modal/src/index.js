import React, { useRef, useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Box } from 'theme-ui'

// TODO move to components package
// - react spring mount transition

const focusElements = [
  'a',
  'button:not([disabled])',
  'input',
  'textarea',
  'select',
  '[tabIndex]:not([tabIndex="-1"])',
].join(', ')

const Portal = ({ children, root }) => {
  const target = document.getElementById(root)
  return createPortal(children, target)
}

const Modal = ({
  id,
  title = 'Modal Dialog',
  closeOnBlur = false,
  show,
  toggle,
  focusRef,
  bg = 'rgba(0, 0, 0, 0.5)',
  children,
  ...props
}) => {
  const modalRef = useRef(null)
  const [focusable, setFocusable] = useState({
    count: 0,
    first: null,
    last: null,
  })

  const closeModal = useCallback(() => {
    if (focusRef !== undefined) {
      focusRef.current.focus()
    }

    toggle(false)
  }, [toggle, focusRef])

  // Handle Focus

  useEffect(() => {
    if (show) {
      const elements = modalRef.current.querySelectorAll(focusElements)

      if (elements.length !== 0) {
        setFocusable({
          count: elements.length,
          first: elements[0],
          last: elements[elements.length - 1],
        })
        elements[0].focus()
      } else {
        modalRef.current.focus()
      }
    }
  }, [show, setFocusable])

  // Handle Keyboard

  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.keyCode) {
        case 27: // esc
          return closeModal()
        case 9: // tab
          if (focusable.count <= 1) {
            e.preventDefault()
            return
          } else {
            if (e.shiftKey && document.activeElement === focusable.first) {
              e.preventDefault()
              return focusable.last.focus()
            }
            if (document.activeElement === focusable.last) {
              e.preventDefault()
              return focusable.first.focus()
            }
            return
          }
        default:
          return
      }
    }

    if (show) {
      window.addEventListener(`keydown`, handleKeyDown)
    }
    return () => window.removeEventListener(`keydown`, handleKeyDown)
  }, [show, focusable, closeModal])

  return show ? (
    <Portal root={id}>
      <Box
        ref={modalRef}
        role="dialog"
        aria-label={title}
        tabIndex={focusable.count === 0 ? '0' : undefined}
        onClick={e => (closeOnBlur ? closeModal() : null)}
        {...props}
        __css={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 100,
          bg,
        }}>
        {children}
      </Box>
    </Portal>
  ) : null
}

export default Modal