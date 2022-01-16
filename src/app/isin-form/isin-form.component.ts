import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IsinService} from "../isin.service";

@Component({
  selector: 'app-isin-form',
  templateUrl: './isin-form.component.html',
  styleUrls: ['./isin-form.component.scss']
})
export class IsinFormComponent implements OnInit {
  formGroup: FormGroup = this.formBuilder.group(
    {
      isinNumber: ["", [Validators.required]],
    },
    {
      updateOn: "change",
    }
  )

  constructor(private formBuilder: FormBuilder, private isinService: IsinService) {
  }

  ngOnInit(): void {
  }

  subscribe(isinValue: string) {
    this.isinService.sendMessage({"subscribe": isinValue});
    this.formGroup.reset();
  }

  unsubscribe(isinValue: string) {
    this.isinService.sendMessage({"unsubscribe": isinValue});
    this.formGroup.reset();
  }
}
