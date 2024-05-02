import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentDetail } from '../models/content-detail.model';
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

  updateData(data: ContentDetail[], id: string) {
    this.http.put<ContentDetail[]>(`http://localhost:3000/data/${id}`, data);
  }
}
