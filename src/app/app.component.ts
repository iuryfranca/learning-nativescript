import { Component, OnInit } from "@angular/core";
import { registerElement } from "@nativescript/angular";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
