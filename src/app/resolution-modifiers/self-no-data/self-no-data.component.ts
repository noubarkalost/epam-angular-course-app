import {Component, OnInit, Optional, Self} from '@angular/core';
import {OrangeService} from "../orange.service";

@Component({
  selector: 'app-self-no-data',
  templateUrl: './self-no-data.component.html',
  styleUrls: ['./self-no-data.component.css']
})
export class SelfNoDataComponent implements OnInit {

  constructor(@Self() @Optional() public orange?: OrangeService) { }

  ngOnInit(): void {
  }

}
