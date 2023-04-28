import { useEffect, useState } from 'react'
import {
  removeClassNamesForOverlayAndBody,
  toggleClassNamesForOverlayAndBody,
} from '@/utils/common'
import { setSearchInputZIndex } from '@/context/header'

export const usePopup = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    window.scrollTo(0, 0)
    toggleClassNamesForOverlayAndBody()
    setOpen(!open)
  }

  const closePopup = () => {
    removeClassNamesForOverlayAndBody()
    setOpen(false)
    setSearchInputZIndex(1)
  }

  useEffect(() => {
    const overlay = document.querySelector('.overlay')

    overlay?.addEventListener('click', closePopup)

    return () => overlay?.removeEventListener('click', closePopup)
  }, [open])

  return { toggleOpen, open, closePopup }
}
