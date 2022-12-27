import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CalculadoraComponent } from './body/calculadora/calculadora.component';
import { ResultadosComponent } from './body/resultados/resultados.component';
import { TitleComponent } from './body/title/title.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    CalculadoraComponent,
    ResultadosComponent,
    TitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    BodyComponent,
    CalculadoraComponent,
    ResultadosComponent,
    TitleComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
