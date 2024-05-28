export class Auth {
  userLoggedIn: boolean;
  mockUsers: { 
    username: string; 
    password: string; 
  } [];

  constructor() {
    this.userLoggedIn = false;
    this.mockUsers = [
      { username: 'kasutaja1', password: 'pass1' },
      { username: 'user2', password: 'pass2'}
    ];
  }

  login(username: string, password: string): boolean {
    const user = this.mockUsers.find(user => user.username === username && user.password === password);
    if (user) {
      this.userLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.userLoggedIn = false;
  }
}

export const auth = new Auth();
