class FilaDePrioridade {
    constructor() {
      this.fila = []; 
    }
  
    adicionar(item) {
      let foiAdicionado = false;
      for (let indice = 0; indice < this.fila.length; indice++) {
        if (item.prioridade < this.fila[indice].prioridade) {
          this.fila.splice(indice, 0, item);
          foiAdicionado = true;
          break;
        }
      }
  
      if (!foiAdicionado) {
        this.fila.push(item);
      }
    }
  
    remover(nome) {
      const indice = this.fila.findIndex(item => item.nome === nome);
  
      if (indice === -1) {
        return undefined; 
      }
  
      return this.fila.splice(indice, 1)[0].nome; 
    }
  
    quantidade() {
      return this.fila.length; 
    }
  
    primeiro() {
      return this.fila[0]?.nome; 
    }
  
    estaVazia() {
      return this.fila.length === 0; 
    }
  
    listar() {
      return this.fila.sort((primeiro, segundo) => primeiro.prioridade - segundo.prioridade); 
    }
  }
  
  const fila = new FilaDePrioridade();
  fila.adicionar({ "nome": "Sapo", "prioridade": 7 });
  fila.adicionar({ "nome": "Vaca", "prioridade": 2 });
  fila.adicionar({ "nome": "Rã", "prioridade": 1 });
  console.log(fila.estaVazia()); // Imprime false (fila não está vazia)
  console.log(fila.quantidade()); // Imprime 3 (quantidade de itens)
  console.log(fila.listar()); // Imprime a lista ordenada por prioridade (Rã, Vaca, Sapo)
  console.log(fila.remover("Rã")) // remove o item rã da fila
  console.log(fila.listar()); // Imprime a lista ordenada por prioridade (Vaca, Sapo)
  console.log(fila.primeiro()); // Imprime o primeiro item da fila 

  
