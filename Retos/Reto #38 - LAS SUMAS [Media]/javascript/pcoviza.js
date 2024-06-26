/* Crea una funcion que encuentre todas las combinaciones de los 
*  numeros de una lista que sumen el valor objetivo. 
* - La funcion recibira una lista de numeros enteros positivos
*   y un valor objetivo.
* - Para obtener las combinaciones solo se puede usar una vez 
*   cada elemento de la lista (pero pueden existir elementos
*   repetidos en ella)
* - Ejemplo: Lista = [1,5,3,2],   Objetivo = 6
*   Soluciones: [1,5] y [1,3,2] (ambas combinaciones suman 6)
*   (Si no existen combinaciones, retornar una lista vacia)
*/

function combinations(list, target) {
    const result = []
    
    function combine(subArray, startIndex, sum) {
      if (sum === target) {
        result.push([...subArray])
        return
      }  
      if (sum > target || startIndex === list.length) return 
    
      for (let i = startIndex; i < list.length; i++) {
        subArray.push(list[i])
        combine(subArray, i + 1, sum + list[i])
        subArray.pop()
  
        while (i < list.length - 1 && list[i] === list[i + 1]) {
          i++
        }
      }
    }  
    list.sort((a, b) => a - b)
    combine([], 0, 0)
    return result
  }

console.log(combinations([2, 4, 3, 7], 10)) // -> [[1, 5] , [1, 3, 2]]