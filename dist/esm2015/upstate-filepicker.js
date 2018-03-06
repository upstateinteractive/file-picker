import { Component, Input, forwardRef } from '@angular/core';
import filestack from 'filestack-js';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const FILEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FilePickerComponent),
    multi: true
};
class FilePickerComponent {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    /**
     * @return {?}
     */
    upload() {
        this.client.pick(this.options)
            .then(data => {
            this.onChange(data.filesUploaded);
        });
    }
    /**
     * @param {?} control
     * @return {?}
     */
    writeValue(control) {
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.client = filestack.init(this.apikey);
    }
}
FilePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'obg-file-picker',
                template: `<button class="upload" mat-raised-button (click)="upload()">Upload Files</button>`,
                styles: [`.upload{
  width:150px;
  margin:20px 0;
}`],
                providers: [FILEPICKER_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
FilePickerComponent.ctorParameters = () => [];
FilePickerComponent.propDecorators = {
    "options": [{ type: Input },],
    "apikey": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { FILEPICKER_CONTROL_VALUE_ACCESSOR, FilePickerComponent };
//# sourceMappingURL=upstate-filepicker.js.map
