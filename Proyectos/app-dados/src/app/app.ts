import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-dados');

  dadoIzquierdo:string ="dados/dice1.png"
  dadoDerecho:string ="dados/dice4.png"

  numero1:number = 1;
  numero2:number = 2;

  resultado:string = "A ver tu suerte"

  tirarDados(){
    this.numero1 = Math.floor(Math.random() * 5) + 1
    this.numero2 = Math.floor(Math.random() * 5) + 1

    console.log("estoy agarrando señal carnal");
    console.log(this.numero1);
    console.log(this.numero2);

    this.dadoIzquierdo = "dados/dice" + this.numero1 + ".png"
    this.dadoDerecho = "dados/dice" + this.numero2 + ".png"
    
    if(this.numero1 == this.numero2){
      this.resultado = "GANASTE TREMENDO CRACK"
    }else{
      this.resultado = "ANDA PA ALLA BOBO"
    }
  }
}
