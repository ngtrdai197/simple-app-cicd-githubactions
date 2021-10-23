import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {TodoModule} from "./todo/todo.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, TodoModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
