import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ShirtCardComponent } from './ui/shirt-card/shirt-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MenuNavComponent } from './ui/menu-nav/menu-nav.component';
import { FireAuthService } from './services/fire-auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardMenuComponent } from './pages/dashboard/dashboard-menu/dashboard-menu.component';
import { InventarioComponent } from './pages/dashboard/inventario/inventario.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './pages/dashboard/inventario/modal/modal.component';
import { EditmodalComponent } from './pages/dashboard/inventario/editmodal/editmodal.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomizeComponent } from './pages/customize/customize.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import { CartCardComponent } from './ui/cart-card/cart-card.component';
import { ModalComponent3 } from './pages/cart/modal/modal.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { VentasComponent } from './pages/dashboard/ventas/ventas.component';
import { ModalComponent2 } from './pages/dashboard/ventas/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    ShirtCardComponent,
    MenuNavComponent,
    DashboardComponent,
    DashboardMenuComponent,
    InventarioComponent,
    ModalComponent,
    EditmodalComponent,
    ProductosComponent,
    CustomizeComponent,
    ProductDetailComponent,
    CartCardComponent,
    ModalComponent3,
    VentasComponent,
    ModalComponent2
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    //provideFirestore(() => getFirestore()),
    //provideFunctions(() => getFunctions()),
    //provideStorage(() => getStorage()),
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    FlexLayoutModule,
    MatSelectModule,
    MatBadgeModule,
    MatExpansionModule,
    MatChipsModule,
    MatStepperModule,
    ReactiveFormsModule
  ],
  providers: [FireAuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}