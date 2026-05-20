export interface hair{
  color: string;
  type: string;
}

export interface address{
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

export interface bank{
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface company{
  name: string;
  department: string;
  title: string;
  address: address
}

export interface crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: hair;
  ip: string;
  address: address;
  macAddress: string;
  university: string;
  bank: bank;
  company: company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: crypto;
  role: string;
}
