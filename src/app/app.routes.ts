import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',component: HomeComponent
    },
    {
        path: 'contact',component: ContactComponent
    },
    {
        path: 'industry',component: IndustriesComponent
    },
    {
        path: 'aboutus',component: AboutComponent
    },

{
    path: '**',component: NotfoundComponent
}
];

