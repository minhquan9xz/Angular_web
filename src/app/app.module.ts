import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductComponent } from './components/product/product.component';
import { HotDealComponent } from './components/hot-deal/hot-deal.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { CategorySellingComponent } from './components/category-selling/category-selling.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './components/store/store.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import  {NgxPaginationModule} from 'ngx-pagination'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { MessagingService } from './Service/firebase/messaging.service';
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxLoaderModule } from '@tusharghoshbd/ngx-loader';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BannerComponent,
    ProductComponent,
    HotDealComponent,
    TopSellingComponent,
    CategorySellingComponent,
    NewsletterComponent,
    FooterComponent,
    HomeComponent,
    CheckoutComponent,
    CartComponent,
     DetailComponent,
     ProductDetailComponent,
     StoreComponent,
     ProductListComponent,
     LoginComponent,
     RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ToastModule,
    FormsModule,
    NgxLoaderModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
CommonModule,
BrowserAnimationsModule,
AngularFireMessagingModule,
AngularFireDatabaseModule,
AngularFireAuthModule,
AngularFireModule,
AngularFireModule.initializeApp(environment.firebase),
NgxLoadingModule.forRoot({})


  ],
  providers: [MessagingService,AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
