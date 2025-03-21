import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},    
    {path: "gallery", component: GalleryComponent},
    {path: "contacts", component: ContactsComponent},
    {path: "**", component: ErrorpageComponent},
];
