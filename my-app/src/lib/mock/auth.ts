export class Auth {
  user: { name: string } | null;
  mockUsers: { 
    username: string; 
    password: string; 
    name: string 
  } [];

  constructor() {
    this.user = null;
    this.mockUsers = [
      { username: 'user1', password: 'pass1', name: 'User One' },
      { username: 'user2', password: 'pass2', name: 'User Two' }
    ];
  }

  login(username: string, password: string): boolean {
    const user = this.mockUsers.find(user => user.username === username && user.password === password);
    if (user) {
      this.user = { name: user.name };
      return true;
    }
    return false;
  }

  logout(): void {
    this.user = null;
  }

  getUser(): { name: string } | null {
    return this.user;
  }
}

export const auth = new Auth();
