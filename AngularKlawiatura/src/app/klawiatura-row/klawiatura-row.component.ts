import { Component, EventEmitter, Input, Output, afterNextRender, inject } from '@angular/core';
import { KlawiaturaResponseDTO, RodzajTypeEnum } from '../models/klawiatura';
import { KlawiaturaService } from '../klawiatura.service';

@Component({
  selector: '[app-klawiatura-row]',
  templateUrl: './klawiatura-row.component.html',
  styleUrl: './klawiatura-row.component.css'
})
export class KlawiaturaRowComponent {

 getKlawiaturaRodzajText(model: RodzajTypeEnum): string {
    switch (model) {
      case RodzajTypeEnum.membranowa:
        return 'membranowa';
      case RodzajTypeEnum.nożycowa:
        return 'nożycowa';
      case RodzajTypeEnum.mechaniczna:
        return 'mechaniczna';
      case RodzajTypeEnum.optyczna:
        return 'optyczna';
      case RodzajTypeEnum.hybrydowa:
        return 'hybrydowa';
      default:
        return 'Brak';
    }
  }
  @Input('app-klawiatura-row') klawiatura!: KlawiaturaResponseDTO;
  @Output() choosed = new EventEmitter<KlawiaturaResponseDTO>();


  private readonly api=inject(KlawiaturaService);
  submit: any;



  public onChooseClick(): void {
    console.log('event: ',event);
    console.log('object: ',this.object);
    this.api.delete(this.klawiatura.id).subscribe(()=>this.api.get());
  }
  object(arg0: string, object: any) {
    throw new Error('Method not implemented.');
  }
}
