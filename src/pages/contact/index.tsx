import ContactForm from 'components/contact-form/ContactForm';
import Layout from 'components/layout/Layout';
import { NextPage } from 'next';
import styles from './contact.module.scss';

const Contact: NextPage = () => (
  <Layout itemsCenter>
    <div className={styles.contact_page}>
      <p>
        You can contact me directly through your e-mail provider at{' '}
        <a href="mailto:me@vladio.me">me@vladio.me</a>, or you can use the
        contact form below. I will try to respond to you as soon as I can.
      </p>
      <ContactForm />
    </div>
  </Layout>
);

export default Contact;
