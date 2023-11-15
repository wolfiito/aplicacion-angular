import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent {
  welcome = 'Hola';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear Componentes',
    'Crear Servicio',
  ]);
  name = signal('Alejandro');
  age = 20;
  disabled = true
  img = 'https://w3schools.com/howto/img_avatar.png'

  person = {
    name: 'Alejandro',
    age: 18,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('HOLA')

  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
