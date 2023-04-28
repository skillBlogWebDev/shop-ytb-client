import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const OnlineStoreContent = () => (
  <ul className={styles.footer__top__item__list}>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/catalog" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>Каталог</a>
      </Link>
    </li>
    <li className={styles.footer__top__item__list__item}>
      <Link href="/shipping-payment" passHref legacyBehavior>
        <a className={styles.footer__top__item__list__item__link}>
          Доставка и оплата
        </a>
      </Link>
    </li>
  </ul>
)

export default OnlineStoreContent
