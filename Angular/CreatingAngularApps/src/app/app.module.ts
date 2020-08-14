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
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { ProgrammingComponent } from './programming/programming.component';

@NgModule({
    declarations: [
        AppComponent,
        AiComponent,
        FormComponent,
        AwesomeifyPipe,
        AlphabateticalOrderPipe,
        MagnifyDirective,
        NavigationComponent,
        SubjectComponent,
        HomeComponent,
        CryptographyComponent,
        AlgorithmsComponent,
        CompressionComponent,
        InternetComponent,
        ProgrammingComponent
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
