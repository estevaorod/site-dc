import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styles: [
  ]
})
export class ServicosComponent implements OnInit {

  itens = [
    {
      titulo: 'Arquitetura de Software',
      descricao: 'Desenvolvimento e revisão da arquitetura de sua aplicação com foco nas melhores práticas para computação em nuvem.'
    },
    {
      titulo: 'Performance de Aplicações',
      descricao: 'Testes de carga e análise de desempenho de sua aplicação para assegurar a capacidade de crescimento do seu negócio.'
    },
    {
      titulo: 'Análise de Vulnerabilidade',
      descricao: 'Análise e correções de vulnerabilidades que possam ser exploradas a fim de quebrar a confidencialidade, disponibilidade e a integridade de sua aplicação.'
    },
    {
      titulo: 'Cultura Ágil e DevOps',
      descricao: 'Acelere a entrega de software com qualidade e adquira a cultura de melhoria contínua com gestão ágil e DevOps.'
    },
    {
      titulo: 'APPs e Aplicações',
      descricao: 'Conceito, projeto e construção de aplicativos móveis personalizados de alta qualidade com interfaces de usuário atraentes, funcionais e intuitivas.'
    },
    {
      titulo: 'Migração de Sistemas Legados',
      descricao: 'Análise, planejamento, modelagem e execução de projetos de migração de sistema legados para cloud.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
