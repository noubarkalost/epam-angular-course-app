import {Component, OnInit, Self} from '@angular/core';
import {WatermelonService} from "../watermelon.service";

@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css'],
  providers: [{ provide: WatermelonService, useValue: { watermelonEmoji: '🍈' } }]
})
export class SelfComponent implements OnInit {

  constructor(@Self() public watermelon: WatermelonService) { }

  ngOnInit(): void {
  }

}
