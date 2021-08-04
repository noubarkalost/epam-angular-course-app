import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "../watermelon.service";
import {LionService} from "../lion.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{ provide: WatermelonService, useValue: { watermelonEmoji: '🍉' } }],
  viewProviders: [{ provide: LionService, useValue: { lionEmoji: '🐼' } }]
})
export class ChildComponent implements OnInit {

  constructor(public watermelon: WatermelonService, public lion: LionService) { }

  ngOnInit(): void {
  }

}
