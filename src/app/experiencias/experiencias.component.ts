import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: [
  ]
})
export class ExperienciasComponent {

  itens = [
    {
      titulo: 'TI e Inovação',
      descricao: 'Somos inovadores em nosso pensamento, e simplistas em nossa abordagem para identificar e atingir os objetivos do cliente.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-07.svg'
    },
    {
      titulo: 'Transparência e Resultado',
      descricao: 'Sempre nos esforçamos para entender as necessidades do cliente e oferecer soluções em nuvem para resolver seus problemas com mais eficiência e transparência.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-08.svg'
    },
    {
      titulo: 'Testes e Qualidade',
      descricao: 'Todas as nossas entregas são de qualidade, utilizando as melhores metodologias e abordagens para testes de aplicações.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-09.svg'
    },
    {
      titulo: 'Equipe Dedicada',
      descricao: 'Somos uma equipe de desenvolvedores com experiência em diversas tecnologias e com um único propósito: agregar valor em todas as nossas soluções.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-11.svg'
    },
    {
      titulo: 'Clean Code',
      descricao: 'Estamos constantemente desenvolvendo habilidades e métodos de programação, fornecendo códigos de fácil manuseio para qualquer usuário e/ou desenvolvedor.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-10.svg'
    },
    {
      titulo: 'Performance e Segurança',
      descricao: 'Utilizamos os melhores métodos e ferramentas de mercado para obter o máximo de performance e segurança de APIs, APP e infraestrutura.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/icones-site-dotcode-abr22-12.svg'
    },
  ];

}
