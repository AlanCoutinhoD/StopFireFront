import { ApiClient } from './infrastructure/api/ApiClient';
import { UserRepositoryImpl } from './infrastructure/repositories/UserRepositoryImpl';
import { LoginUseCase } from './core/usecases/LoginUseCase';
import { RegisterUseCase } from './core/usecases/RegisterUseCase';
import { GetCurrentUserUseCase } from './core/usecases/GetCurrentUserUseCase';

// Create instances
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
const apiClient = new ApiClient(API_BASE_URL);
const userRepository = new UserRepositoryImpl(apiClient);

// Create use cases
const loginUseCase = new LoginUseCase(userRepository);
const registerUseCase = new RegisterUseCase(userRepository);
const getCurrentUserUseCase = new GetCurrentUserUseCase(userRepository);

// Export container
export const container = {
  apiClient,
  userRepository,
  loginUseCase,
  registerUseCase,
  getCurrentUserUseCase,
};