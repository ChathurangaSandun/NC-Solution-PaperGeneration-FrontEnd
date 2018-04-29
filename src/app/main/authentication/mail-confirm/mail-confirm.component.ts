import { Component, OnInit } from "@angular/core";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";

@Component({
  selector: "app-mail-confirm",
  templateUrl: "./mail-confirm.component.html",
  styleUrls: ["./mail-confirm.component.scss"]
})
export class MailConfirmComponent {
  constructor(private fuseConfig: FuseConfigService) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: "none",
        toolbar: "none",
        footer: "none"
      }
    });
  }
}
