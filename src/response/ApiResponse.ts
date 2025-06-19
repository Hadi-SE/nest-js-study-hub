export class ApiResponse<T> {
  success: boolean ;
  message: string;
  data?: T;
  timestamp: string;

  constructor(success: boolean, message: string, data?: T) {
    this.success = success;
    this.message = message;
    this.timestamp = new Date().toISOString();
    this.data = data;
  }
}