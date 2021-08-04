import { Component, OnInit } from '@angular/core';
import {WatermelonService} from "./watermelon.service";
import {LionService} from "./lion.service";

@Component({
  selector: 'app-providers-view-providers',
  templateUrl: './providers-view-providers.component.html',
  styleUrls: ['./providers-view-providers.component.css']
})
export class ProvidersViewProvidersComponent implements OnInit {

  constructor(public watermelon: WatermelonService, public lion: LionService) { }

  ngOnInit(): void {
  }

}
