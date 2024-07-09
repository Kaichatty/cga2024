export interface RegisterResponse {
    success: boolean;
    message: string;
    data: {
      id: string;
      email: string;
      role: string;
    };
  }