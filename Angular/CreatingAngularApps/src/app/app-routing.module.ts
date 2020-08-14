import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { AiComponent } from './ai/ai.component';
import { ProgrammingComponent } from './programming/programming.component';

const routes: Routes = [
    {
        path:'cryptography',
        component:CryptographyComponent,
        pathMatch:'full'
    },
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
