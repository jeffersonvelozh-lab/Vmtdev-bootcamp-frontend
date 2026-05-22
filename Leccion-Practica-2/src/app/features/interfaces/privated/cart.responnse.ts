import { ICart, IPaginatedResponse } from "./cart";

export interface ICartsResponse extends IPaginatedResponse<ICart> {
  carts: ICart[];
}
