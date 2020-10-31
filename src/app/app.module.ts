import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoldDirective } from './bold.directive';
import { ExampleDirective } from './example.directive';
import { JtoxPipe } from './jtox.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    ExampleDirective,
    JtoxPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
