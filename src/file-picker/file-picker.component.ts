import { Component, Input, AfterViewInit, ViewChild, ElementRef, forwardRef, OnInit } from '@angular/core';
import filestack from 'filestack-js';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const FILEPICKER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FilePickerComponent),
  multi: true
};

@Component({
  selector: 'obg-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.css'],
  providers: [FILEPICKER_CONTROL_VALUE_ACCESSOR]
})
export class FilePickerComponent implements ControlValueAccessor, OnInit {
  @Input() options;
  @Input() apikey;
  private client;
  onChange: (value: any) => void = () => {};
  onTouched = () => {};

  constructor() { }

  upload() {
    this.client.pick(this.options)
    .then(data => {
      this.onChange(data.filesUploaded);
    });
  }

  writeValue(control) {
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  ngOnInit() {
    this.client = filestack.init(this.apikey);
  }

}
