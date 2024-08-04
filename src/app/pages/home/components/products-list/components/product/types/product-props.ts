import { ProductsList } from "../../../types/product-list";

export interface ProductProps extends ProductsList {
  onHandleAction: (action: "Done" | "Delete", id: number) => void;
}
