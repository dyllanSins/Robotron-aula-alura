# robotron-2000
##  Aula de Maipulaçãode DOM

Havia um pequeno problema com o código final ensinado no curso, onde mesmo restirando o valor de uma peça, os valores eram somados aos atributos.

Afim de resolver isso, cheguei a seguinte conclusão:

```
atualizaEstatistica(evento.target.dataset.peca, evento.target.dataset.controle)
```
> Adicionei o "evento.target.dataset.controle" ao atualizaEstatistica. E:

```
if(operacao === "-"){
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    } else{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    }
```
> Adicionei outro parâmentro a função atualizaEstatística e utilizei o if da função anterior

