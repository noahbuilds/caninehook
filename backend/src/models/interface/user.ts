

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    location: string;
    gender: string;
    rating: number;
    token: string
  }
  

  export interface ILogin{
    email: string;
    password: string
  }