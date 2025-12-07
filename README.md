# help-multas2

# Help Multas — Site Institucional em React

Bem-vindo ao repositório do **Help Multas**, um site institucional desenvolvido em **React**, com **componentização**, **CSS Modules**, **layout responsivo**, e **footer fixado**.  
Este projeto foi criado como **trabalho acadêmico**, apresentando boas práticas de organização, navegação, responsividade e estrutura de um projeto profissional.

---

#  Objetivo do Projeto

Criar um site institucional moderno, responsivo e organizado, utilizando:
- HTML5 dentro dos componentes React  
- CSS Modules  
- React Router DOM para navegação entre páginas  
- Componentização  
- Design responsivo  
- Footer fixado ao final da página  
- Organização clara de pastas  

O site simula a apresentação da empresa **Help Multas**, especializada em ajudar motoristas a recorrer multas de trânsito.

---

# 🗂️ Estrutura do Projeto

A estrutura final segue boas práticas usadas em aplicações React:

```
src/
│
├── components/
│   ├── Navbar.js
│   ├── Header.js
│   ├── Footer.js
│   └── ...
│
├── pages/
│   ├── Home/
│   │   ├── Home.js
│   │   └── Home.module.css
│   │
│   ├── Services/
│   │   ├── Services.js
│   │   └── Services.module.css
│   │
│   ├── About/
│   │   ├── About.js
│   │   └── About.module.css
│   │
│   └── Contact/
│       ├── Contact.js
│       └── Contact.module.css
│
├── App.js
├── App.css
├── index.js
└── ...
```

---

# Componentização

O projeto utiliza componentes reutilizáveis para facilitar organização e manutenção.

### Principais componentes criados:
- **Navbar** (menu responsivo superior)
- **Header** (capa inicial)
- **Footer** (fixado no final da página)
- **Páginas separadas como componentes individuais**

Trecho de exemplo de um componente:
```jsx
function Home() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo à Help Multas</h1>
      <p>Especialistas em recorrer multas e defender motoristas.</p>
    </div>
  );
}
```

---

# Estilização com CSS Modules

Cada página tem seu próprio arquivo `.module.css`, garantindo isolamento de estilos.

Exemplo:
```css
.container {
  padding: 40px;
  text-align: center;
}

@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
}
```

---

# Responsividade

Todo o site funciona bem tanto no **desktop** quanto no **mobile** usando media queries:

```css
@media (max-width: 768px) {
  .container {
    padding: 20px;
  }
}
```

Além disso:
- A navbar vira menu vertical em telas pequenas  
- Textos se ajustam  
- Containers ficam mais estreitos  
- Botões aumentam no mobile  

---

# Footer Fixado no Final da Página

O footer fica sempre na parte inferior usando:

```css
.footer {
  background: #101820;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

---

#  Navegação entre páginas (SPA)

Toda a navegação é feita com **React Router DOM**, sem recarregar a página.

Trecho de exemplo:
```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
```

---

# Tecnologias Utilizadas

| Tecnologia | Uso |
|-----------|-----|
| **React** | Biblioteca principal do projeto |
| **React Router DOM** | Navegação entre páginas |
| **CSS Modules** | Estilização isolada por componente |
| **HTML5** | Estrutura das páginas dentro do JSX |
| **JavaScript ES6** | Lógica dos componentes |
| **Flexbox** | Organização do layout |
| **Responsividade** | Mobile-first |

---

# Como Rodar o Projeto

### 1️⃣ Instale as dependências
```
npm install
```

### 2️⃣ Execute o servidor de desenvolvimento
```
npm start
```

O projeto iniciará em:
```
http://localhost:3000
```

---

# Conclusão

Este projeto demonstra:
✔ uso correto de React  
✔ componentização  
✔ responsividade  
✔ CSS Modules  
✔ organização profissional  
✔ SPA com React Router  
✔ footer fixado  
✔ HTML semântico dentro do JSX  

Ideal para apresentação acadêmica.

---

# 👨‍💻 Autor

Projeto desenvolvido por **Raphael Tuma** como entrega acadêmica.  
GitHub: *adicione seu usuário aqui*

