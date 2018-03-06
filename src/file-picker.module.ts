import { NgModule } from '@angular/core';

import { FilePickerComponent } from './file-picker/file-picker.component';

@NgModule({
  declarations: [
    FilePickerComponent,
  ],
  exports: [
    FilePickerComponent,
  ]
})
export class FilePickerModule {}