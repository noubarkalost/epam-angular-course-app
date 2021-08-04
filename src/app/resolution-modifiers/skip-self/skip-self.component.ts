import {Component, OnInit, SkipSelf} from '@angular/core';
import {OrangeService} from "../orange.service";

@Component({
  selector: 'app-skip-self',
  templateUrl: './skip-self.component.html',
  styleUrls: ['./skip-self.component.css'],
  providers: [{ provide: OrangeService, useValue: { orangeEmoji: '🍋' } }]
})
export class SkipSelfComponent implements OnInit {

  constructor(@SkipSelf() public orange: OrangeService) { }

  ngOnInit(): void {
  }

}
