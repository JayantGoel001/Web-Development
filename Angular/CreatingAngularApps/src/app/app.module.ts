import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AiComponent } from './ai/ai.component';
import { FormComponent } from './form/form.component';
import { AwesomeifyPipe } from './awesomeify.pipe';
import { AlphabateticalOrderPipe } from './alphabatetical-order.pipe';
import { MagnifyDirective } from './magnify.directive';

@NgModule({
    declarations: [
        AppComponent,
        AiComponent,
        FormComponent,
        AwesomeifyPipe,
        AlphabateticalOrderPipe,
        MagnifyDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
