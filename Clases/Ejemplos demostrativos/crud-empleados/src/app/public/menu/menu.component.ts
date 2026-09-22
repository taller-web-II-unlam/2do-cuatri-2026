import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  imports: [FooterComponent, HomeComponent, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
