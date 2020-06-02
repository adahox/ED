/**
*   algorítimo de bubbleSort desenvolvido afim de entender a disciplina de estrutura de dados
*   @author Adão Dias
*   @date 02/06/2020
*/
Array.prototype.bubbleSort = function() {
    let tamanho = this.length;
    let aux = 0;
  
    while(tamanho > 1) {
      for(let x = 0; x < tamanho; x++) {
          let actual = this[x];
        let next = this[x+1];
        
        if(actual > next) {
            aux = this[x];
          this[x] = this[x+1];
          this[x+1] = aux;
        }
      }
      tamanho--;
    }
    return this;
  }
  
  
  let data = [4, 9, 4, 20, 500, 394, 220, 4934, 2084, 3, 55];
  
  console.log(data.bubbleSort());
  