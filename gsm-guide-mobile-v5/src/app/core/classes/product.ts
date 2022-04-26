import { Category } from "./category";
import { User } from "./user";

export class Product {
  id: number ;
  name: string ;
  description: string ;
  price: number ;
  visible: boolean ;
  image: string ;
  quantity: number ;
  category: Category ;
  client: User ;
}

