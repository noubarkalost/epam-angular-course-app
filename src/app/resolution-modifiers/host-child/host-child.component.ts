import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "../watermelon.service";


@Component({
  selector: 'app-host-child',
  templateUrl: './host-child.component.html',
  styleUrls: ['./host-child.component.css']
})
export class HostChildComponent implements OnInit {

  constructor(public watermelon: WatermelonService) { }

  ngOnInit(): void {
  }

}
