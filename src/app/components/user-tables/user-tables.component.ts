import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-user-tables',
  imports: [CommonModule ],
  templateUrl: './user-tables.component.html',
  styleUrls: ['./user-tables.component.scss']
})

export class UserTablesComponent implements OnInit {
 dtOptions: Config = {};
  protected usuarios = [
  { nome: 'Jemilson', email: 'jemilson@email.com', telefone: '921006782', bi: '002345678A', genero: 'Masculino', trabalha: true, dataNascimento: '1992-04-12', morada: 'Bairro Azul, Rua 5', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Ana', email: 'ana@email.com', telefone: '921006783', bi: '003456789B', genero: 'Feminino', trabalha: false, dataNascimento: '1995-09-20', morada: 'Bairro Prenda, Rua 12', nacionalidade: 'Angolana', estadoCivil: 'Casado' },
  { nome: 'Carlos Silva', email: 'carlos.silva@email.com', telefone: '921112233', bi: '004567890C', genero: 'Masculino', trabalha: true, dataNascimento: '1987-06-15', morada: 'Bairro Rocha, Rua 8', nacionalidade: 'Portuguesa', estadoCivil: 'Divorciado' },
  { nome: 'Maria Lopes', email: 'maria.lopes@email.com', telefone: '921998877', bi: '005678901D', genero: 'Feminino', trabalha: true, dataNascimento: '1990-11-03', morada: 'Bairro Alvalade, Rua 7', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Pedro Gomes', email: 'pedro.gomes@email.com', telefone: '921554433', bi: '006789012E', genero: 'Masculino', trabalha: false, dataNascimento: '1985-03-22', morada: 'Bairro Cassenda, Rua 2', nacionalidade: 'Brasileira', estadoCivil: 'Casado' },
  { nome: 'Luísa Costa', email: 'luisa.costa@email.com', telefone: '921667788', bi: '007890123F', genero: 'Feminino', trabalha: true, dataNascimento: '1993-08-19', morada: 'Bairro Morro Bento, Rua 10', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Joaquim Pereira', email: 'joaquim.pereira@email.com', telefone: '921334455', bi: '008901234G', genero: 'Masculino', trabalha: true, dataNascimento: '1982-05-30', morada: 'Bairro Palanca, Rua 15', nacionalidade: 'Moçambicana', estadoCivil: 'Casado' },
  { nome: 'Sara Martins', email: 'sara.martins@email.com', telefone: '921778899', bi: '009012345H', genero: 'Feminino', trabalha: false, dataNascimento: '1997-01-14', morada: 'Bairro Benfica, Rua 4', nacionalidade: 'Portuguesa', estadoCivil: 'Solteiro' },
  { nome: 'Miguel Fernandes', email: 'miguel.fernandes@email.com', telefone: '921221133', bi: '001123456I', genero: 'Masculino', trabalha: true, dataNascimento: '1989-12-11', morada: 'Bairro Samba, Rua 18', nacionalidade: 'Angolana', estadoCivil: 'Divorciado' },
  { nome: 'Cátia Rocha', email: 'catia.rocha@email.com', telefone: '921445566', bi: '002234567J', genero: 'Feminino', trabalha: true, dataNascimento: '1991-07-07', morada: 'Bairro Vila Alice, Rua 6', nacionalidade: 'Angolana', estadoCivil: 'Viúvo' },

  { nome: 'Nelson Mendes', email: 'nelson.mendes@email.com', telefone: '921334477', bi: '003345678K', genero: 'Masculino', trabalha: false, dataNascimento: '1986-10-25', morada: 'Bairro Kinaxixi, Rua 13', nacionalidade: 'Brasileira', estadoCivil: 'Casado' },
  { nome: 'Tatiana Duarte', email: 'tatiana.duarte@email.com', telefone: '921556677', bi: '004456789L', genero: 'Feminino', trabalha: true, dataNascimento: '1998-02-28', morada: 'Bairro Cazenga, Rua 11', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Fernando Almeida', email: 'fernando.almeida@email.com', telefone: '921887766', bi: '005567890M', genero: 'Masculino', trabalha: true, dataNascimento: '1983-01-10', morada: 'Bairro Golf, Rua 9', nacionalidade: 'Moçambicana', estadoCivil: 'Casado' },
  { nome: 'Helena Dias', email: 'helena.dias@email.com', telefone: '921990011', bi: '006678901N', genero: 'Feminino', trabalha: false, dataNascimento: '1996-06-06', morada: 'Bairro Camama, Rua 1', nacionalidade: 'Portuguesa', estadoCivil: 'Divorciado' },
  { nome: 'Tiago Neves', email: 'tiago.neves@email.com', telefone: '921101122', bi: '007789012O', genero: 'Masculino', trabalha: true, dataNascimento: '1994-03-18', morada: 'Bairro Kilamba, Rua 16', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Andreia Lima', email: 'andreia.lima@email.com', telefone: '921223344', bi: '008890123P', genero: 'Feminino', trabalha: true, dataNascimento: '1990-09-09', morada: 'Bairro Zango, Rua 17', nacionalidade: 'Brasileira', estadoCivil: 'Casado' },
  { nome: 'Rui Matos', email: 'rui.matos@email.com', telefone: '921332211', bi: '009901234Q', genero: 'Masculino', trabalha: false, dataNascimento: '1988-08-01', morada: 'Bairro Rangel, Rua 19', nacionalidade: 'Angolana', estadoCivil: 'Viúvo' },
  { nome: 'Cláudia Reis', email: 'claudia.reis@email.com', telefone: '921442233', bi: '001012345R', genero: 'Feminino', trabalha: true, dataNascimento: '1999-12-22', morada: 'Bairro Talatona, Rua 14', nacionalidade: 'Portuguesa', estadoCivil: 'Solteiro' },
  { nome: 'Fábio Andrade', email: 'fabio.andrade@email.com', telefone: '921554466', bi: '002123456S', genero: 'Masculino', trabalha: true, dataNascimento: '1984-11-17', morada: 'Bairro Gamek, Rua 3', nacionalidade: 'Angolana', estadoCivil: 'Casado' },

  { nome: 'Isabel Ferreira', email: 'isabel.ferreira@email.com', telefone: '921667799', bi: '003234567T', genero: 'Feminino', trabalha: false, dataNascimento: '1993-04-26', morada: 'Bairro Vila Estoril, Rua 20', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'João Batista', email: 'joao.batista@email.com', telefone: '921778800', bi: '004345678U', genero: 'Masculino', trabalha: true, dataNascimento: '1981-07-23', morada: 'Bairro Mártires, Rua 21', nacionalidade: 'Brasileira', estadoCivil: 'Casado' },
  { nome: 'Rita Carvalho', email: 'rita.carvalho@email.com', telefone: '921889911', bi: '005456789V', genero: 'Feminino', trabalha: true, dataNascimento: '1992-10-30', morada: 'Bairro Viana, Rua 22', nacionalidade: 'Moçambicana', estadoCivil: 'Divorciado' },
  { nome: 'Manuel Pinto', email: 'manuel.pinto@email.com', telefone: '921990022', bi: '006567890W', genero: 'Masculino', trabalha: false, dataNascimento: '1986-02-12', morada: 'Bairro Cacuaco, Rua 23', nacionalidade: 'Angolana', estadoCivil: 'Casado' },
  { nome: 'Patrícia Monteiro', email: 'patricia.monteiro@email.com', telefone: '921101233', bi: '007678901X', genero: 'Feminino', trabalha: true, dataNascimento: '1995-05-15', morada: 'Bairro Sambizanga, Rua 24', nacionalidade: 'Portuguesa', estadoCivil: 'Solteiro' },
  { nome: 'Alfredo Soares', email: 'alfredo.soares@email.com', telefone: '921212344', bi: '008789012Y', genero: 'Masculino', trabalha: true, dataNascimento: '1982-03-06', morada: 'Bairro São Paulo, Rua 25', nacionalidade: 'Angolana', estadoCivil: 'Casado' },
  { nome: 'Lurdes Cardoso', email: 'lurdes.cardoso@email.com', telefone: '921323455', bi: '009890123Z', genero: 'Feminino', trabalha: false, dataNascimento: '1996-06-27', morada: 'Bairro Chinguar, Rua 26', nacionalidade: 'Brasileira', estadoCivil: 'Divorciado' },
  { nome: 'Vítor Santos', email: 'vitor.santos@email.com', telefone: '921434566', bi: '001901234A', genero: 'Masculino', trabalha: true, dataNascimento: '1987-12-08', morada: 'Bairro Huambo, Rua 27', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' },
  { nome: 'Ester Campos', email: 'ester.campos@email.com', telefone: '921545677', bi: '002012345B', genero: 'Feminino', trabalha: true, dataNascimento: '1990-11-19', morada: 'Bairro Caxito, Rua 28', nacionalidade: 'Moçambicana', estadoCivil: 'Casado' },

  { nome: 'Gabriel Teixeira', email: 'gabriel.teixeira@email.com', telefone: '921656788', bi: '003123456C', genero: 'Masculino', trabalha: false, dataNascimento: '1983-09-04', morada: 'Bairro Calemba, Rua 29', nacionalidade: 'Angolana', estadoCivil: 'Viúvo' },
  { nome: 'Marta Antunes', email: 'marta.antunes@email.com', telefone: '921767899', bi: '004234567D', genero: 'Feminino', trabalha: true, dataNascimento: '1997-08-03', morada: 'Bairro Maianga, Rua 30', nacionalidade: 'Portuguesa', estadoCivil: 'Solteiro' },
  { nome: 'Daniel Correia', email: 'daniel.correia@email.com', telefone: '921878900', bi: '005345678E', genero: 'Masculino', trabalha: true, dataNascimento: '1985-05-29', morada: 'Bairro Cazenga Norte, Rua 31', nacionalidade: 'Angolana', estadoCivil: 'Casado' },
  { nome: 'Vanessa Barros', email: 'vanessa.barros@email.com', telefone: '921989011', bi: '006456789F', genero: 'Feminino', trabalha: false, dataNascimento: '1994-12-05', morada: 'Bairro Estalagem, Rua 32', nacionalidade: 'Brasileira', estadoCivil: 'Divorciado' },
  { nome: 'Adriano Vicente', email: 'adriano.vicente@email.com', telefone: '921090122', bi: '007567890G', genero: 'Masculino', trabalha: true, dataNascimento: '1989-06-18', morada: 'Bairro Kifica, Rua 33', nacionalidade: 'Angolana', estadoCivil: 'Solteiro' }
];


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
}

