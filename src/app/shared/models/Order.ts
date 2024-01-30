import { LatLng } from "leaflet";
import { CartItem } from "./CartItem";

export class Order{
    id!:number;
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    addres!:string;
    addressLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!:string
}