import {Component, OnInit, Optional} from '@angular/core';
import {OptionalService} from "../optional.service";

@Component({
  selector: 'app-optional',
  templateUrl: './optional.component.html',
  styleUrls: ['./optional.component.css']
})
export class OptionalComponent implements OnInit {

  constructor(@Optional() public optional?: OptionalService) { }

  ngOnInit(): void {
  }

}
