import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPlus, faCloudArrowUp, faCloudArrowDown} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit{
  faPlus = faPlus;
  faCloudArrowUp = faCloudArrowUp;
  faCloudArrowDown = faCloudArrowDown;

  @Output() clickEvent = new EventEmitter();

  @Input() isNouveauVisible = true;
  @Input() isExporterVisible = true;
  @Input() isImporterVisible = true;
constructor() {
}

  ngOnInit(): void {
  }


  boutonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
