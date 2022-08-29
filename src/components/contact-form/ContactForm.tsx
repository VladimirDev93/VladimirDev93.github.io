import styles from './contact_form.module.scss';

const ContactForm = () => (
  <form
    action="https://mailthis.to/me@vladio.me"
    method="POST"
    className={styles.form}
  >
    <div className={styles.name}>
      <label htmlFor="name">Your name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div className={styles.name}>
      <label htmlFor="name">Your e-mail</label>
      <input type="email" name="_replyto" id="email" />
    </div>
    <div className={styles.message}>
      <label htmlFor="message">Your message</label>
      <textarea name="message" id="message" cols={30} rows={15} />
    </div>
    <div className={styles.button}>
      <button type="submit">Send</button>
    </div>
  </form>
);

export default ContactForm;
