import { IFeedbackInput } from '@/types/feedbackForm'
import styles from '@/styles/feedbackForm/index.module.scss'

const EmailInput = ({ register, errors, darkModeClass }: IFeedbackInput) => (
  <label className={`${styles.feedback_form__form__label} ${darkModeClass}`}>
    <span>Email *</span>
    <input
      className={styles.feedback_form__form__input}
      type="email"
      placeholder="ivan@gmail.com"
      {...register('email', {
        required: 'Введите Email!',
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: 'Неправильный Email!',
        },
      })}
    />
    {errors.email && (
      <span className={styles.error_alert}>{errors.email?.message}</span>
    )}
  </label>
)

export default EmailInput
