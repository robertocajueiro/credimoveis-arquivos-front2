import { Arquivo } from './model/arquivo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivos-list',
  templateUrl: './arquivos-list.component.html',
  styleUrls: ['./arquivos-list.component.css']
})
export class ArquivosListComponent implements OnInit {

  arquivos: Arquivo[] = [
    { id_caixa: 1,
      periodo_ini: '22/05/2022',
      periodo_fim: '22/05/2022',
      endereco: 'A.01.001',
      doc_01: 'MOV. CAIXA',
      doc_02: 'MOV. CAIXA',
      doc_03: 'MOV. CAIXA',
      data_inclusao: '22/05/2022'
    },
    { id_caixa: 2,
      periodo_ini: '22/05/2022',
      periodo_fim: '22/05/2022',
      endereco: 'A.01.001',
      doc_01: 'MOV. CAIXA',
      doc_02: 'MOV. CAIXA',
      doc_03: 'MOV. CAIXA',
      data_inclusao: '22/05/2022'
    },
    { id_caixa: 3,
      periodo_ini: '22/05/2022',
      periodo_fim: '22/05/2022',
      endereco: 'A.01.001',
      doc_01: 'MOV. CAIXA',
      doc_02: 'MOV. CAIXA',
      doc_03: 'MOV. CAIXA',
      data_inclusao: '22/05/2022'
    },
  ];

  displayedColumns = [
      'periodo_ini', 'periodo_fim', 'endereco', 'doc_01', 'doc_02', 'doc_03']

  constructor() { }

  ngOnInit(): void {
  }

}
