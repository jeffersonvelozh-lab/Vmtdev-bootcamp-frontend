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
