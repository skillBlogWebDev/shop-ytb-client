import { $mode } from '@/context/mode'
import { IFilterCheckboxItem } from '@/types/catalog'
import { useStore } from 'effector-react'
import styles from '@/styles/catalog/index.module.scss'

const FilterCheckboxItem = ({
  title,
  checked,
  id,
  event,
}: IFilterCheckboxItem) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const handleFilterChange = () =>
    event({ checked: !checked, id } as IFilterCheckboxItem)

  return (
    <li
      className={`${styles.filters__manufacturer__list__item} ${darkModeClass}`}
    >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleFilterChange}
        />
        <span>{title}</span>
      </label>
    </li>
  )
}

export default FilterCheckboxItem
