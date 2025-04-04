import { UserRepository } from '../../core/domain/repositories/UserRepository';
import { User } from '../../core/domain/entities/User';
import { ApiClient } from '../api/ApiClient';

export class UserRepositoryImpl extends UserRepository {
  constructor(apiClient) {
    super();
    this.apiClient = apiClient;
  }

  async login(email, password) {
    try {
      const response = await this.apiClient.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      return new User(response.data.user.id, response.data.user.fullName, response.data.user.email);
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  }

  async register(fullName, email, password) {
    try {
      const response = await this.apiClient.post('/auth/register', { fullName, email, password });
      localStorage.setItem('token', response.data.token);
      return new User(response.data.user.id, response.data.user.fullName, response.data.user.email);
    } catch (error) {
      throw new Error('Registration failed: ' + error.message);
    }
  }

  async getCurrentUser() {
    try {
      const token = localStorage.getItem('token');
      if (!token) return null;
      
      const response = await this.apiClient.get('/auth/me');
      return new User(response.data.id, response.data.fullName, response.data.email);
    } catch (error) {
      localStorage.removeItem('token');
      return null;
    }
  }

  async logout() {
    localStorage.removeItem('token');
  }
}