import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const FILEPICKER_CONTROL_VALUE_ACCESSOR: any;
export declare class FilePickerComponent implements ControlValueAccessor, OnInit {
    options: any;
    apikey: any;
    private client;
    onChange: (value: any) => void;
    onTouched: () => void;
    constructor();
    upload(): void;
    writeValue(control: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    ngOnInit(): void;
}
