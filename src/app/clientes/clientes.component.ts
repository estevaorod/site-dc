import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  imagens = [
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-vale-cliente-dotcode.png',
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-unimed-cliente-dotcode.png',
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-inflor-cliente-dotcode.png',
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-action-cliente-dotcode.png',
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-firjan-cliente-dotcode.png',
    'https://dotcode.com.br/wp-content/uploads/2022/04/logo-vidappt-cliente-dotcode.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
