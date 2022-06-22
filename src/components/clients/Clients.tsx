import Container from "../container/Container";
import styles from "./clients.module.scss";
import List from "./list/List";

const Clients = () => {
  return (
    <Container>
      <div className={styles.clients_wrapper}>
        <h2 className={styles.title}>Clients</h2>
        <div className={`flex flex-wrap ${styles.clients_logos}`}>
          <List />
        </div>
      </div>
    </Container>
  );
};

export default Clients;
