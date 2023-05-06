import ContactForm from 'components/contact-form/ContactForm';
import { NextPage } from 'next';
import style from './contact.module.css';

const Contact: NextPage = () => (
  <div className={style.wrapper}>
    <div className={style.content}>
      <p>
        You can contact me directly through your e-mail provider at{' '}
        <a href="mailto:me@vladio.me" className={style.a}>
          me@vladio.me
        </a>
        , or you can use the contact form below. I will try to respond to you as
        soon as I can.
      </p>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
