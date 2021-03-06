import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostDataToApiService {
  constructor(private http: HttpClient) {}
  postData(data: any) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(url, {
      method: 'POST',
      body: JSON.stringify({
        title: 'User Data',
        body: data,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
