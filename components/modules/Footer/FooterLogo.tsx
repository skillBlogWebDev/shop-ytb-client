/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const FooterLogo = () => (
  <div className={styles.footer__top__item}>
    <Link href="/dashboard" passHref legacyBehavior>
      <a className={styles.footer__top__item__logo}>
        <img src="/img/logo-footer.svg" alt="logo" />
        <span className={styles.footer__top__item__logo__text}>
          Детали для газовых котлов
        </span>
      </a>
    </Link>
  </div>
)

export default FooterLogo
