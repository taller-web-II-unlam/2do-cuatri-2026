import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-ruta-2',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './ruta-2.component.html',
  styleUrl: './ruta-2.component.css'
})
export class Ruta2Component {

  onRouterLinkActive(event:boolean){
    console.log("Sub-ruta-2 activada: " + event);
    
  }

}
