import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ContentDetail,
  ContentDetailUpdate,
} from '../models/content-detail.model';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentDetailService {
  constructor(private http: HttpClient) {}
  data: Observable<ContentDetail[]> = this.http.get<ContentDetail[]>(
    'http://localhost:3000/data'
  );
  getAllData() {
    return this.data;
  }

  updateData(data: ContentDetailUpdate, id: string) {
    return this.http.put<ContentDetailUpdate>(
      `http://localhost:3000/data/${id}`,
      data
    );
  }

  getData(id: string) {
    this.http
      .get(`http://localhost:3000/data/${id}`)
      .subscribe((data) => console.log(data));
  }

  deleteData(id: string) {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
}
