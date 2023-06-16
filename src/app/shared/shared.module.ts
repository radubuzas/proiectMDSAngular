import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlErrorMessagePipe } from './pipes/form-control-error-message.pipe';
import { ProfileLinkPipe } from './pipes/profile-link.pipe';

const PIPES = [FormControlErrorMessagePipe, ProfileLinkPipe];

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...PIPES
  ],
  declarations: [...PIPES]
})
export class SharedModule {}
