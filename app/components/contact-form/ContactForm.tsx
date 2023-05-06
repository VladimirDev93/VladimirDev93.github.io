'use client';

import style from './contact_form.module.css';

const ContactForm = () => (
  <form
    action="https://mailthis.to/me@vladio.me"
    method="POST"
    className={style.form}
  >
    <div className={style.name}>
      <label htmlFor="name" className={style.label}>Your name</label>
      <input type="text" name="name" id="name" className={style.input} />
    </div>
    <div className={style.name}>
      <label htmlFor="name" className={style.label}>Your e-mail</label>
      <input type="email" name="_replyto" id="email" className={style.input} />
    </div>
    <div className={style.message}>
      <label htmlFor="message" className={style.label}>Your message</label>
      <textarea name="message" id="message" cols={30} rows={15} className={style.textarea} />
    </div>
    <button type="submit" className={style.button}>
      Send
    </button>
  </form>
);

export default ContactForm;
