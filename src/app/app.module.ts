import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthComponent} from './auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './core/services/auth/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {DialogComponent} from './shared/components/dialogSesion/dialog/dialog.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {DialogFileComponent} from './shared/components/dialogFile/dialog-file/dialog-file.component';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import {DialogFolderComponent} from './shared/components/dialogFolder/dialog-folder/dialog-folder.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DeleteSesionComponent} from './shared/components/dialogSesion/delete-sesion/delete-sesion.component';
import {MatSelectModule} from '@angular/material/select';
import {DeleteFolderComponent} from './shared/components/dialogFolder/delete-folder/delete-folder.component';
import { DeleteFileComponent } from './shared/components/dialogFile/delete-file/delete-file.component';
import {AuthInterceptor} from './core/interceptors/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,DialogComponent,DialogFileComponent,DialogFolderComponent,DeleteSesionComponent,DeleteFolderComponent, DeleteFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, NgxMatFileInputModule, MatDialogModule, MatSelectModule, FormsModule
  ],
  providers: [AuthService, CookieService, {

    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true

  }],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
