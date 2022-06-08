import Container from "../container/Container";
import styles from "./about.module.scss";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col w-50">
        <h2 className={styles.whoAmI}>Who am I?</h2>
        <p className={styles.text}>
          A {new Date().getFullYear() - 1993} years old dude based in Kikinda,
          Serbia. I'm a big fan of open-source software, hardware and the
          Universe. <br />
          <br /> JavaScript / TypeScript developer. <br />
          <br /> React.js on the front-end and Node.js on the back-end, that's
          my setup. I'm pretty good with the new bad boys such as Node.js,
          GraphQL, PostgreSQL, MySQL, NoSQL (MongoDB, Firebase), React.js,
          Webhooks, WebSockets, Serverless Functions, Docker, Continuous
          Integration.
        </p>
      </div>
    </Container>
  );
};

export default About;
