import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../interfaces/IUser";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  registrationUrl = 'http://localhost:3000/registratedUsers'
  constructor(
   private router:Router,
   private formBuilder:FormBuilder,
   private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name:[''],
      surname:[''],
      email: [''],
      phone: [''],
      password: ['']
    })
  }
  Regisrtation(){
    this.httpClient.post<IUser>(this.registrationUrl, this.registrationForm.value).subscribe(response =>{
      alert('Registration Successfully your account created');
      this.registrationForm.reset();
      this.router.navigate(['profile/:id'])
    })
  }
}
