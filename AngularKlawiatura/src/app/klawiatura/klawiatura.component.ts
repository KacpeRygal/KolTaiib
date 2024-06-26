import { Component } from '@angular/core';
import { KlawiaturaResponseDTO } from '../models/klawiatura';
import { KlawiaturaService } from '../klawiatura.service';

@Component({
  selector: 'app-klawiatura',
  templateUrl: './klawiatura.component.html',
  styleUrl: './klawiatura.component.css'
})
export class KlawiaturaComponent {

  public data:KlawiaturaResponseDTO[]=[];
  public choosedKlawiatura?: KlawiaturaResponseDTO = undefined;

  constructor(private klawiaturaService: KlawiaturaService){
    this.getData();
  }
  getData() {
    this.klawiaturaService.get().subscribe({
      next: (res)=>{
        this.data=res;
      },
      error: (err) => console.error(err),
      complete: () => console.log('complete')
    })
  }
  public onSubmit(): void {
    this.choosedKlawiatura = undefined;
    this.getData();
  }

  public onChoosedRow(event: KlawiaturaResponseDTO): void {
    this.choosedKlawiatura = event;
    
  }
}
