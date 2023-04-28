import { createDomain } from 'effector-next'

const header = createDomain()

export const setSearchInputZIndex = header.createEvent<number>()

export const $searchInputZIndex = header
  .createStore<number>(1)
  .on(setSearchInputZIndex, (_, zIndex) => zIndex)
