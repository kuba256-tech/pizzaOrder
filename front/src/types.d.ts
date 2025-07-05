export interface IUser {
  _id: string;
  name: string;
  email: string;
  token: string;
  avatar: string;
}

export interface IRegisterMutation {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: File | null;
}
export interface ILoginMutation {
  email: string;
  password: string;
}

export interface IValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
}

export interface IGlobalError {
  error: string;
}

export interface IPizza {
  _id: string;
  title: string;
  image: string;
  price: string;
  information: string;
}

export interface ICartOrder {
  amount: number;
  pizza: IPizza;
}
