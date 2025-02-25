// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { map, Observable } from "rxjs";

// interface Vacancy {
//   companyName: string;
//   logoUrl: string | null;
//   vacancyId: string;
//   country: string;
//   city: string;
//   position: string;
//   industry: string;
//   amountType: string;
//   fixedAmount: number;
//   currency: string;
//   employmentType: string;
//   experience: string;
// }

// @Injectable({ providedIn: 'root' })
// export class VacanciesService {
//   private apiUrl = 'http://192.168.0.123:8080';

//   constructor(private http: HttpClient) {}

//   getVacancies(): Observable<Vacancy[]> {
//     return this.http.get<{ content: Vacancy[] }>(`${this.apiUrl}/api/v1/vacancies`)
//       .pipe(map(response => response.content)); 
//   }
// }
