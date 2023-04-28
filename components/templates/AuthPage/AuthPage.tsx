import { MutableRefObject, useRef } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import SignUpForm from '@/components/modules/AuthPage/SignUpForm'
import SignInForm from '@/components/modules/AuthPage/SignInForm'
import styles from '@/styles/auth/index.module.scss'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'

const AuthPage = () => {
  const isMedia800 = useMediaQuery(800)
  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)

    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)

    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)
  }

  return (
    <div className={`${styles.main} ${darkModeClass}`}>
      <div className={styles.mode_toggle}>
        <ModeToggler />
      </div>
      <div
        className={`${styles.container} ${styles.a_container} ${darkModeClass}`}
        id="a-container"
        ref={aContainer}
      >
        <div className={styles.container__inner}>
          <SignUpForm switchForm={switchForm} />
        </div>
      </div>
      <div
        className={`${styles.container} ${styles.b_container} ${darkModeClass}`}
        id="b-container"
        ref={bContainer}
      >
        <div className={styles.container__inner}>
          <SignInForm />
        </div>
      </div>
      <div
        className={`${styles.switch} ${darkModeClass}`}
        id="switch-cnt"
        ref={switchCtn}
      >
        <div
          className={`${styles.switch__circle} ${darkModeClass}`}
          ref={switchCircle1}
        />
        <div
          className={`${styles.switch__circle} ${styles.switch__circle__t} ${darkModeClass}`}
          ref={switchCircle2}
        />
        <div className={styles.switch__container} id="switch-c1" ref={switchC1}>
          {!isMedia800 && (
            <>
              <h2
                className={`${styles.switch__title} ${styles.title} ${darkModeClass}`}
              >
                Добро пожаловать!
              </h2>
              <p
                className={`${styles.switch__description} ${styles.description} ${darkModeClass}`}
              >
                Чтобы оставаться на связи с нами, пожалуйста, войдите под своей
                личной информацией
              </p>
            </>
          )}
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch__btn} ${darkModeClass}`}
          >
            SIGN IN
          </button>
        </div>
        <div
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id="switch-c2"
          ref={switchC2}
        >
          {!isMedia800 && (
            <>
              <h2
                className={`${styles.switch__title} ${styles.title} ${darkModeClass}`}
              >
                Привет, друг!
              </h2>
              <p
                className={`${styles.switch__description} ${styles.description} ${darkModeClass}`}
              >
                Введите свои личные данные и начните путешествие с нами
              </p>
            </>
          )}
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch__btn} ${darkModeClass}`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
