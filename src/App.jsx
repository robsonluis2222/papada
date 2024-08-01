import React, { useEffect } from 'react';
import './App.css'
import ScrollReveal from 'scrollreveal';
import videoSrc from './assets/video.mp4'; // Atualize o caminho conforme necessário

// Estilos inline para simplificar
const styles = {
  header: {
    backgroundColor: '#00A3E0', // Azul Claro
    color: '#FFFFFF', // Branco
    padding: '20px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#003F6C', // Azul Escuro
    color: '#FFFFFF', // Branco
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  section: {
    padding: '20px',
    textAlign: 'center'
  },
  sectionBgLight: {
    backgroundColor: '#E6F5FF', // Azul Claro
    color: '#003F6C', // Azul Escuro
  },
  sectionBgDark: {
    backgroundColor: '#003F6C', // Azul Escuro
    color: '#FFFFFF', // Branco
  },
  faq: {
    backgroundColor: '#FFFFFF', // Branco
    color: '#003F6C', // Azul Escuro
    padding: '20px',
    textAlign: 'left'
  },
  footer: {
    backgroundColor: '#E6F5FF', // Azul Claro
    color: '#003F6C', // Azul Escuro
    padding: '20px',
    textAlign: 'center'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  video: {
    maxWidth: '200px',
    height: 'auto',
    borderRadius: '10px'
  }
};

const SalesPage = () => {
  useEffect(() => {
    // Configura o ScrollReveal
    ScrollReveal().reveal('.reveal', {
      duration: 1000,
      distance: '60px',
      easing: 'ease-in-out',
      origin: 'bottom',
      interval: 200
    });
  }, []);

  return (
    <div>
      {/* Cabeçalho */}
      <header style={styles.header} className="reveal">
        <h1>ELIMINE A PAPADA EM 30 DIAS</h1>
        <p>O Guia Completo para Reduzir a Gordura no Pescoço de Forma Eficaz</p>
      </header>

      {/* Seção Principal */}
      <section style={styles.section} className="reveal">
        <h2>Descubra o Segredo para um Pescoço mais Definido!</h2>
        <p>
          Cansado da papada que teima em aparecer? Quer melhorar a definição do seu pescoço de maneira eficaz e rápida? Apresentamos nosso eBook, "Elimine a Papada em 30 Dias", um guia completo que oferece um plano detalhado para reduzir a gordura no pescoço e melhorar sua aparência.
        </p>
      </section>

      {/* Seção de Vídeo */}
      <section style={styles.section} className="reveal">
        <h2>Assista ao Vídeo Explicativo</h2>
        <video src={videoSrc} controls style={styles.video} autoPlay></video>
      </section>

      {/* Seção de Benefícios */}
      <section style={{ ...styles.section, ...styles.sectionBgLight }} className="reveal">
        <h2>Por Que Escolher Nosso eBook?</h2>
        <ul>
          <li>Redução Eficaz: Métodos comprovados para diminuir a papada e melhorar a definição do pescoço.</li>
          <li>Planos Focados: Exercícios e dicas específicas para tratar a gordura localizada no pescoço.</li>
          <li>Acesso Imediato: Baixe agora e comece a ver resultados em apenas 30 dias!</li>
        </ul>
        <button style={styles.button}>ADQUIRA SEU EBOOK AGORA !</button>
      </section>

      {/* Seção de Testemunhos */}
      <section style={styles.section} className="reveal">
        <h2>O Que Nossos Leitores Dizem</h2>
        <p><strong>Ana M.</strong>: "Este eBook foi um divisor de águas para mim! A papada diminuiu significativamente e os exercícios são fáceis de incorporar no dia a dia."</p>
        <p><strong>Lucas R.</strong>: "Com as dicas e exercícios deste guia, consegui reduzir a papada em apenas 3 semanas. Valeu muito a pena!"</p>
      </section>

      {/* Seção de Garantia */}
      <section style={{ ...styles.section, ...styles.sectionBgDark }} className="reveal">
        <h2>Garantia de Satisfação</h2>
        <p>
          Estamos tão confiantes de que você adorará nosso eBook que oferecemos uma garantia de 30 dias. Se você não estiver satisfeito com os resultados, devolvemos seu dinheiro sem perguntas.
        </p>
        <button style={styles.button}>Experimente Sem Risco!</button>
      </section>

      {/* Seção de FAQ */}
      <section style={styles.faq} className="reveal">
        <h2>Perguntas Frequentes</h2>
        <p><strong>Como recebo meu eBook?</strong><br />Após a compra, você receberá um e-mail com um link para download imediato.</p>
        <p><strong>Preciso de equipamentos especiais para os exercícios?</strong><br />Não, todos os exercícios podem ser feitos em casa com equipamentos básicos.</p>
        <p><strong>Posso seguir o plano se tiver restrições alimentares?</strong><br />Sim, nosso eBook inclui opções adaptáveis para várias necessidades dietéticas.</p>
      </section>

      {/* Rodapé */}
      <footer style={styles.footer} className="reveal">
        <p>Contato: contato@solucaoemagrece.com</p>
        <p>Siga-nos nas redes sociais:</p>
        <p>
          <a href="https://facebook.com" style={{ color: '#003F6C' }}>Facebook</a> |
          <a href="https://instagram.com" style={{ color: '#003F6C' }}>Instagram</a> |
          <a href="https://twitter.com" style={{ color: '#003F6C' }}>Twitter</a>
        </p>
        <button style={styles.button}>Baixe Agora e Reduza Sua Papada!</button>
      </footer>
    </div>
  );
};

export default SalesPage;
