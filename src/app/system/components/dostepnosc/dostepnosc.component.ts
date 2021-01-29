import { Component, OnInit } from '@angular/core';
import { dostepnoscPodglad } from 'app/models/dostepnosc-sali-podglad';

@Component({
  selector: 'srs-dostepnosc',
  templateUrl: './dostepnosc.component.html',
  styleUrls: ['./dostepnosc.component.less']
})
export class DostepnoscComponent implements OnInit {
  displayedColumns: string[] = ['godzina', 'status', 'wybor']

  public dostepnoscSali: Array<dostepnoscPodglad> = [
      {
          godzina_start: new Date().toISOString(),
          godzina_end: new Date().toISOString(),
          status: 'Wolna',
      },
      {
          godzina_start: new Date().toISOString(),
          godzina_end: new Date().toISOString(),
          status: 'Zajęta',
      },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
