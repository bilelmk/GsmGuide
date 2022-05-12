import { User } from "./user";

export class Request {
  id: number ;
  date: string ;
  mark: string ;
  model: string ;
  article: string ;
  part: string ;
  price: string ;
  repairer: User ;
  client: User ;
}
