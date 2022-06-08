import Container from "../container/Container";
import styles from "./header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <nav>
        <ul className={styles.ul}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
