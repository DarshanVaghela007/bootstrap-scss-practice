import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Bootstrap-Practice";
  alert: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.alert = true;
    }, 2000);

    setTimeout(() => {
      this.alert = false;
    }, 3000);
  }
}
