import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <h1>Nossos Serviços</h1>
      <ul>
        <li>Recurso de Multas</li>
        <li>Acompanhamento do Processo</li>
        <li>Consultoria sobre CNH</li>
      </ul>
    </div>
  );
}

export default Services;
