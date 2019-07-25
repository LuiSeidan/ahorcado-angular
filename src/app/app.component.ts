import { Component, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  palabra = 'AGUACATE'
  palabraOculta = ''
  intentos = 0
  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

      
  constructor(){
    this.palabraOculta = '_ '.repeat(this.palabra.length)
  }

  comprobar(letra){
    this.existeLetra(letra)
    const palabraOcultaArr = this.palabraOculta.split(' ')
    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letra){
        palabraOcultaArr[i] = letra
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ')
    this.varificaGane()
  }

  varificaGane(){
    let palabraArr = this.palabraOculta.split(' ')
    let palabraEvaluar = palabraArr.join('')

    if(palabraEvaluar === this.palabra){
      this.gano = true
      console.log('Ganaste');
    }

    if(this.intentos >= 9){
      this.perdio = true
      console.log('Perdiste')
    }
  }

  existeLetra(letra){
    if(this.palabra.indexOf(letra) >= 0){
      //console.log('La letra que existe es : ' + letra)
    }else {
      //console.log('La letra que no existe : ' + letra)
    this.intentos++;
    }
  }

  title = 'ahorcado';
}
