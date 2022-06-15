const ModaMediaMediana = (arrayDeNumeros) => {
    const getModa = (arrayDeNumeros) => {
      let objetoModas = {};
      arrayDeNumeros.forEach(numero => {
        if (!objetoModas[numero]) objetoModas[numero] = 0;
        objetoModas[numero]++;
      });
      // console.log('am', objetoModas)
      let maxFreq = 0;
      let modas = [];
      for (let num in objetoModas) {
        if (objetoModas[num] > maxFreq) {
          modas = [num];
          // console.log('num', num);
          maxFreq = objetoModas[num];
        }
        else if (objetoModas[num] === maxFreq) {
          modas.push(num);
          // console.log('num', num);
        }
      }
      if (modas.length === Object.keys(objetoModas).length) {
        modas = []
        if (modas = []) {
          return `Não há Moda para o Aray Indicado`
        }
      }
      return modas;
    }
    const getMedia = (arrayDeNumeros) => {
      let soma = 0;
      arrayDeNumeros.forEach(numero => {
        soma += numero
      })
      const media = soma / arrayDeNumeros.length;
      return media;
    }
    // impar = mediana === media (estritamente a mesma)
    // par = mediana === media dos 2 dados centrais
    const getMediana = (arrayDeNumeros) => {
      arrayDeNumeros.sort((a, b) => a - b);
      let mediana;
      if (arrayDeNumeros.length / 2 !== 0) {
        mediana = arrayDeNumeros[Math.floor(arrayDeNumeros.length / 2)]
      }
      else {
        const medianaA = array[(arrayDeNumeros.length / 2) - 1];
        const medianaB = array[arrayDeNumeros.length / 2];
        mediana = (medianaA + medianaB) / 2;
      }
      // console.log('mediana', mediana)
      // console.log('an', arrayDeNumeros)
      return mediana;
    }
    return {
      moda: getModa(arrayDeNumeros),
      media: getMedia(arrayDeNumeros),
      mediana: getMediana(arrayDeNumeros)
    }
  }
  
  console.log(ModaMediaMediana([9, 10, 23, 10, 23, 9])) 
  const arrayDeNumerosSemModa = [9, 10, 23, 10, 23, 9];
  const arrayDeNumerosComModa = [23, 9, 10, 23, 10, 23, 9];
  console.log('Com Moda', 'Array', arrayDeNumerosComModa, '- Inferencias', ModaMediaMediana(arrayDeNumerosComModa))
  console.log('Sem Moda', 'Array', arrayDeNumerosSemModa, '- Inferencias', ModaMediaMediana(arrayDeNumerosSemModa))