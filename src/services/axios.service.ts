import axios, {AxiosResponse} from "axios";

import {baseURl} from "../constants";

let axiosService = axios.create({baseURL:baseURl});

export type Res<T> = Promise<AxiosResponse<T>>;

export {
    axiosService
}
