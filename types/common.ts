import { MultiValue, SingleValue } from 'react-select'

export interface IWrappedComponentProps {
  open: boolean
  setOpen: (arg0: boolean) => void
}

export interface IOption {
  value: string | number
  label: string | number
}

export type SelectOptionType = MultiValue<IOption> | SingleValue<IOption> | null

export interface IAccordion {
  children: React.ReactNode
  title: string | false
  titleClass: string
  arrowOpenClass?: string
  isMobileForFilters?: boolean
  hideArrowClass?: string
  boxShadowStyle?: string
  callback?: (arg0: boolean) => void
}

export interface ILayoutProps {
  children: React.ReactNode
}

export interface IGeolocation {
  latitude: number
  longitude: number
}

export interface ICrumbProps {
  text: string
  textGenerator: () => string
  href: string
  last: boolean
}
