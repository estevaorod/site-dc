import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styles: [
  ]
})
export class ServicosComponent {

  itens = [
    {
      titulo: 'Arquitetura de Software',
      descricao: 'Desenvolvimento e revisão da arquitetura de sua aplicação com foco nas melhores práticas para computação em nuvem.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-01.svg'
    },
    {
      titulo: 'Performance de Aplicações',
      descricao: 'Testes de carga e análise de desempenho de sua aplicação para assegurar a capacidade de crescimento do seu negócio.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-02.svg'
    },
    {
      titulo: 'Análise de Vulnerabilidade',
      descricao: 'Análise e correções de vulnerabilidades que possam ser exploradas a fim de quebrar a confidencialidade, disponibilidade e a integridade de sua aplicação.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-03.svg'
    },
    {
      titulo: 'Cultura Ágil e DevOps',
      descricao: 'Acelere a entrega de software com qualidade e adquira a cultura de melhoria contínua com gestão ágil e DevOps.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-04.svg'
    },
    {
      titulo: 'APPs e Aplicações',
      descricao: 'Conceito, projeto e construção de aplicativos móveis personalizados de alta qualidade com interfaces de usuário atraentes, funcionais e intuitivas.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-05.svg'
    },
    {
      titulo: 'Migração de Sistemas Legados',
      descricao: 'Análise, planejamento, modelagem e execução de projetos de migração de sistema legados para cloud.',
      urlImagem: 'https://dotcode.com.br/wp-content/uploads/2022/04/novos-icones-site-dotcode-abr22-06.svg'
    },
  ];

}
