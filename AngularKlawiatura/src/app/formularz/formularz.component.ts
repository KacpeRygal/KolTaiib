import { Component, EventEmitter, Output, inject, model } from '@angular/core';
import { KlawiaturaRequestDTO } from '../models/request';
import { KlawiaturaService } from '../klawiatura.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.css'
})
export class FormularzComponent {

@Output() submit = new EventEmitter<void>();
@Output() cancel=new EventEmitter<void>();

public object: KlawiaturaRequestDTO={
  model:null,
  rodzaj:null,
};

private readonly api=inject(KlawiaturaService);

public onSubmit(event: any):void{
  console.log('event: ',event);
  console.log('object: ',this.object);

  this.api.post(this.object).subscribe({
    next: () =>{
      console.log('dodano mysz');
      this.submit.emit();
    },
    error: (err)=>console.error(err)
  })
}
}
