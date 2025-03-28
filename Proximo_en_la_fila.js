/* Proximo en la fila 

En informatica una cola queue) es una estructura de datos abstracta
en la cual los elemntos se mantienen en orden, los nuevos elementos se pueden 
añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una funcion proxima en la fila que tome un arreglo (arreglo) y un numero (elemento)
como argumento. agrega el numero al final del arreglo y luego elimine el primer 
elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento
que fue removido.
*/

function proximaEnLaFila(arreglo, elemento) {
    // Agrega el elemento al final del arreglo
    arreglo.push(elemento);
  
    // Elimina el primer elemento del arreglo y lo retorna
    return arreglo.shift();
  }
  
  // Ejemplos de uso
  let miArreglo = [1, 2, 3, 4, 5];
  let elementoRemovido = proximaEnLaFila(miArreglo, 6);
  
  console.log("Elemento removido:", elementoRemovido); // Salida: Elemento removido: 1
  console.log("Arreglo actualizado:", miArreglo); // Salida: Arreglo actualizado: [2, 3, 4, 5, 6]