import {token} from "../constants";
import {IJob} from "../interfaces";
import {axiosService, Res} from "./axios.service";

const jobsService = {
    getAll: (): Res<IJob[]> => axiosService.get(token.access_token)
}
export {
    jobsService
}
