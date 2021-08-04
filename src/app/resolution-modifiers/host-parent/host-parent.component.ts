import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "../watermelon.service";


@Component({
  selector: 'app-host-parent',
  templateUrl: './host-parent.component.html',
  styleUrls: ['./host-parent.component.css'],
  providers: [{ provide: WatermelonService, useValue: { watermelonEmoji: '🍉' } }]
})
export class HostParentComponent implements OnInit {

  constructor(public watermelon: WatermelonService) { }

  ngOnInit(): void {
  }

}
