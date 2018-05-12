import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from "@angular/common";
import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import {Router} from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: fuseAnimations
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormErrors: any;
  nicPattern = "^[a-z]{6}$";//"^[0-9]{1,9}[a-zA-Z]{1}$";
  loginFailedError = false;;
  constructor(
    private fuseConfig: FuseConfigService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,    
    private location: Location,
    private router: Router
  ) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: "none",
        toolbar: "none",
        footer: "none"
      }
    });

    this.loginFormErrors = {
      loginusername: {},
      password: {}
    };
  }

  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      loginusername: ["", [Validators.required]],
      password: ["", Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
  }

  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.loginFormErrors[field] = {};

      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }

  myEvent() {
    const data = this.loginForm.getRawValue();

    this.loginService.loginUser(data).then((as) => {

      if(as != null){
        this.router.navigate(['admin/algorithms']);
      }
      else{
        this.loginFailedError = true;
      }
    });


  }
}
