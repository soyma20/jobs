import {ILocation} from "./ILocation";

export interface IJob {
    id: string,
    name: string,
    email: string,
    phone: string,
    title: string,
    salary: string,
    address: string,
    benefits: string[],
    location: ILocation,
    pictures: string[],
    createdAt: string,
    updatedAt: string,
    description: string,
    employment_type: string[],
}
