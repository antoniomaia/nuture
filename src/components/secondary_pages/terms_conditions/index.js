import React from 'react';
import secondary_page_styles from '../../secondary_pages/styles.module.scss';
import styles from './styles.module.scss';

const Terms = () => {
  return (
    <section className={secondary_page_styles.simple_page_container}>
      <div className={secondary_page_styles.header}>
        <h1>Terms and Conditions</h1>
      </div>
      <div className={secondary_page_styles.body}>
        <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
      </div>
    </section>
  );
};

export default Terms;
