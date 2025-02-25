// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({ providedIn: 'root' })
// export class AuthService {
//     private apiUrl = 'http://192.168.0.117';

//     constructor(private http: HttpClient) {}

//     //! Register
//     register(userData: any): Observable<{ token: string }> {
//         return this.http.post<{ token: string }>(`${this.apiUrl}/api/v1/auth/register`, userData);
//     }

//     saveUser(user: any) {
//         if (typeof window !== 'undefined') {
//             localStorage.setItem('user', JSON.stringify(user));
//         }
//     }

//     getUser() {
//         if (typeof window !== 'undefined') {
//             const userData = localStorage.getItem('user');
//             return userData ? JSON.parse(userData) : null;
//         }
//         return null;
//     }

//     saveToken(token: string): void {
//         if (typeof window !== 'undefined') {
//             localStorage.setItem('authToken', token);
//         }
//     }
    
//     getToken(): string | null {
//         if (typeof window !== 'undefined') {
//             return localStorage.getItem('authToken');
//         }
//         return null;
//     }
// }
