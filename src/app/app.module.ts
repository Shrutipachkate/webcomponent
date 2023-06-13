import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { createCustomElement } from '@angular/elements';
import { SubmitbtnComponent } from './submitbtn/submitbtn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponentComponent,
    SubmitbtnComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [], //AppComponent
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customButton = createCustomElement(CustomComponentComponent, {
      injector: this.injector,
    });
    customElements.define('custom-popup', customButton);
  }
 }