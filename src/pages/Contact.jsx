import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Fale Conosco</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
