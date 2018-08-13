import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router,  NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  @ViewChild('username') el: ElementRef;
  statuslogin: any;
  focusin: any = true;
  rForm: FormGroup;
  post: any;
  usernameAlert: any = 'Please fill username';
  passwordAlert: any = 'Please fill password';
  loginAlert: string;
  loginError: any = false;
  returnUrl: string;
  constructor(
       private route: ActivatedRoute,
      private fb: FormBuilder,
//      private authenticationservice: DataService,
      public router: Router
    ) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
   }
   ngOnInit() {
//    this.authenticationservice.logout();
//    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
}

  addPost(post) {

  /*  this.authenticationservice.login(post).subscribe(
      res => {
        if(res.status == true)
          {
             this.router.navigate([this.returnUrl]);
          }else{
            this.loginError = true
            this.loginAlert = res.message;
          }
      },
       err => {
        return err;

      }
    );
*/
  }

}
