import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { AiComponent } from './ai/ai.component';
import { ProgrammingComponent } from './programming/programming.component';
import { SecretComponent } from './secret/secret.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    {
        path:'artificial-intelligence',
        component:AiComponent,
        pathMatch:'full'
    },
    {
        path:'compression',
        component:CompressionComponent,
        pathMatch:'full'
    },
    {
        path:'internet',
        component:InternetComponent,
        pathMatch:'full'
    },
    {
        path:'programming',
        component:ProgrammingComponent,
        pathMatch:'full'
    },
    {
        path:'algorithms',
        component:AlgorithmsComponent,
        pathMatch:'full'
    },
    {
        path:'secret/:key',
        component:SecretComponent,
        pathMatch:'full'
    },
    {
        path:'404',
        component:NotFoundComponent,
        pathMatch:'full'
    },
    {
        path:'*',
        redirectTo:'/404'
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
