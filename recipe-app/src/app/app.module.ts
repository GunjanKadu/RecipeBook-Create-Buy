import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { AppDropDownDirective } from "./shared/app-drop-down.directive";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";
import { AppRoutingModule } from "./app-routing.module";
import { AuthComponent } from "../app/auth/auth.component";
import { RecipeService } from "./recipes/recipe.service";
import { LoadingSpinnerComponent } from "./shared/Loading Spinner/loadingSpinner.components";
import { AuthInterceptorService } from "./auth/auth.interceptor.service";
import { AlertComponent } from "./shared/ALert/alert.component";
import { RecipesModule } from "./recipes/recipe.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppDropDownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
