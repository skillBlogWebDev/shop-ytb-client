export interface IBoilerPart {
  id: number
  boiler_manufacturer: string
  price: number
  parts_manufacturer: string
  vendor_code: string
  name: string
  description: string
  images: string
  in_stock: number
  bestseller: boolean
  new: boolean
  popularity: number
  compatibility: string
}

export interface IBoilerParts {
  count: number
  rows: IBoilerPart[]
}
