import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostDataToApiService } from '../post-data-to-api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private data: PostDataToApiService) {}

  ngOnInit(): any {}

  userDetailsForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}'
      ),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
  });

  get userName() {
    return this.userDetailsForm.get('userName');
  }
  get password() {
    return this.userDetailsForm.get('password');
  }
  get address() {
    return this.userDetailsForm.get('address');
  }
  get email() {
    return this.userDetailsForm.get('email');
  }
  get contactNumber() {
    return this.userDetailsForm.get('contactNumber');
  }
  submittedData: any;
  handleSubmit() {
    console.log(this.userDetailsForm.value);
    this.data.postData(this.userDetailsForm.value).subscribe((response) => {
      this.submittedData = response;
      console.log('submittedData', this.submittedData);
    });
    alert('Data Submitted successfully !');
  }
}
