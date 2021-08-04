import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "./watermelon.service";
import {OrangeService} from "./orange.service";


@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers.component.html',
  styleUrls: ['./resolution-modifiers.component.css']
})
export class ResolutionModifiersComponent implements OnInit {

  constructor(public watermelon: WatermelonService, public orange: OrangeService) { }

  ngOnInit(): void {
  }

}
