import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): boolean {
    // Verifica si el usuario y la contraseña son correctos
    if (username === 'usuario' && password === 'contrasena') {
      // Guarda el nombre de usuario en el almacenamiento local
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    // Elimina el nombre de usuario del almacenamiento local
    localStorage.removeItem('username');
  }

  public get loggedIn(): boolean {
    // Verifica si el usuario ha iniciado sesión
    return (localStorage.getItem('username') !== null);
  }
}