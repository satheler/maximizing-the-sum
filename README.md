# Maximizando a Soma
Dado um array A de N números e um array P inicialmente vazio, você pode executar 4 tipos de operações:

- **Operação 1:** Pegar o último número do vetor `A`, move-lo ao vetor `P`.
- **Operação 2:** Pegar os dois últimos números do vetor `A` (se o tamanho do vetor for maior que 1), e mover o produto deles ao vetor `P`.
- **Operação 3:** Inverter o vetor `A`, pegar o último número do vetor `A`, move-lo para o vetor `P`.
- **Operação 4:** Inverter o vetor `A`, pegar os dois últimos números do vetor `A` (se o tamanho do vetor for maior que 1), e mover o produto deles ao vetor `P`.

Observe que após cada operação, o vetor `A` se torna menor e talvez revertido. Realize as operações até que o vetor `A` esteja vazio. É necessário maximar a soma de todos os valores no vetor `P`.

**Entrada:** A primeira linha contém um único número inteiro *N*. A próxima linha contém N números inteiros separados por espaço, indicando o vetor `A`.  
**Saída:** Emitir a máxima soma de todos os elementos do vetor `P` que podem ser obtidos executando as 4 operações listadas acima.  
**Considerar:** 1 ≤ *N* ≤ 10<sup>3</sup>; 1≤ A<sub>i</sub> ≤ 10<sup>6</sup>  


## Exemplo
**Entrada:**  
``` sh
5  
1 4 2 3 5
```

**Saída:**  
``` sh
24  
```

### Explicação
Pode-se obter a soma 24 através das **operações** nas ordens [2, 3, 2].

1. Aplicando a **Operação 2**:  
``` js
    A = [1, 4, 2]
    P = [15]
```


2. Aplicando a **Operação 3**:
``` js
    A = [2, 4]
    P = [15, 1]
```


3. Aplicando a **Operação 2**:.
``` js
A = []
P = [15, 1, 8]
```


4. Somar todos os valores no vetor P:
``` js
P = [15, 1, 8] → 15 + 1 + 8 = 24
```


## Como executar
**Atenção**: 
1. Para executar os passos a seguir é necessário ter instalado e configurado em sua máquina [Git](https://git-scm.com) e [npm](https://www.npmjs.com/).
2. Os passos serão executados em um terminal.

### Como clonar o projeto e instalar as dependências

``` sh
# Clone o repositório
$ git clone https://github.com/gustavosatheler/maximizing-the-sum.git  

# Acesse a pasta do repositório
$ cd maximizing-the-sum

# Instale as dependências
$ npm install
```

### Como executar

``` sh
$ npm run app
```