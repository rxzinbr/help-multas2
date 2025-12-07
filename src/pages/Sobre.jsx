import { useState } from "react";
import styles from "./Sobre.module.css";

function Sobre() {
  const [sobre] = useState([
    "A Help Multas é uma empresa brasileira especializada em recursos de multas de trânsito, ajudando motoristas a defenderem-se administrativamente contra infrações e processos de suspensão/cassação da CNH, atuando com defesa prévia, JARI e CETRAN, e busca garantir o direito de dirigir, sendo uma franquia que se expandiu rapidamente no mercado nacional."
  ]);

  return (
    <div className={styles.container}>
      <h1>Sobre a Help Multas</h1>
      <ul>
        {sobre.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sobre;
