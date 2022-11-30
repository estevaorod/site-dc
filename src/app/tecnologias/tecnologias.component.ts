import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styles: [
  ]
})
export class TecnologiasComponent implements OnInit {

  imagens = [
    'https://dotcode.com.br/wp-content/uploads/2022/03/azure-devops.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/azure.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/docker.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/dotnet.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/elasticsearch.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/kubernetes.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/nginx.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/node.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/redis.png',
    'https://dotcode.com.br/wp-content/uploads/2022/03/sql.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
