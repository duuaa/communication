import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { ThreeComponent } from './components/three/three.component';
import { TwoComponent } from './components/two/two.component';
import { CommunicationService } from './services/communication.service';

@NgModule({
  declarations: [AppComponent, OneComponent, TwoComponent, ThreeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
