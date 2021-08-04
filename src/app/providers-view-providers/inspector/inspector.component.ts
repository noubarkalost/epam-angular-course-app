import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "../watermelon.service";
import {LionService} from "../lion.service";

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.css']
})
export class InspectorComponent implements OnInit {

  constructor(public watermelon: WatermelonService, public lion: LionService) { }

  ngOnInit(): void {
  }

}
