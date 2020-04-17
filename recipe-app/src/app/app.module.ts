import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment.prod";

import * as fromApp from "./store/app.reducer";
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({
      name: "Recipe Book",
      logOnly: environment.production,
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
