import {Component, Host, OnInit, Optional} from '@angular/core';
import {WatermelonService} from "../watermelon.service";


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css'],
  providers: [{ provide: WatermelonService, useValue: { watermelonEmoji: '🍈' } }]
})
export class HostComponent implements OnInit {

  constructor(@Host() @Optional() public watermelon?: WatermelonService) { }

  ngOnInit(): void {
  }

}
