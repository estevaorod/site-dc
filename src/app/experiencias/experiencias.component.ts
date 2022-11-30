import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: [
  ]
})
export class ExperienciasComponent implements OnInit {

  itens = [
    {
      titulo: 'TI e Inovação',
      descricao: 'Somos inovadores em nosso pensamento, e simplistas em nossa abordagem para identificar e atingir os objetivos do cliente.'
    },
    {
      titulo: 'Transparência e Resultado',
      descricao: 'Sempre nos esforçamos para entender as necessidades do cliente e oferecer soluções em nuvem para resolver seus problemas com mais eficiência e transparência.'
    },
    {
      titulo: 'Testes e Qualidade',
      descricao: 'Todas as nossas entregas são de qualidade, utilizando as melhores metodologias e abordagens para testes de aplicações.'
    },
    {
      titulo: 'Equipe Dedicada',
      descricao: 'Somos uma equipe de desenvolvedores com experiência em diversas tecnologias e com um único propósito: agregar valor em todas as nossas soluções.'
    },
    {
      titulo: 'Clean Code',
      descricao: 'Estamos constantemente desenvolvendo habilidades e métodos de programação, fornecendo códigos de fácil manuseio para qualquer usuário e/ou desenvolvedor.'
    },
    {
      titulo: 'Performance e Segurança',
      descricao: 'Utilizamos os melhores métodos e ferramentas de mercado para obter o máximo de performance e segurança de APIs, APP e infraestrutura.'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
