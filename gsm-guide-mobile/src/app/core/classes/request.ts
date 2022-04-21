import { User } from "./user";

export class Request {
  id: number ;
  date: string ;
  model: string ;
  brand: string ;
  epairer: User ;
  client: User ;
}
