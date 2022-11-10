import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IJob} from "../../interfaces";
import {jobsService} from "../../services";

interface IState {
    jobs: IJob[];
}

const initialState: IState = {
    jobs: [],
};

const getAll = createAsyncThunk<IJob[], void>(
    'jobSlice/getAll',
    async () => {
        const {data} = await jobsService.getAll();
        return data
    }
);

const jobSlice = createSlice({
    name: 'jobSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.jobs = action.payload
        })
    }
});

const {reducer: jobReducer} = jobSlice;

const jobActions = {
    getAll
}

export {
    jobReducer,
    jobActions,
}
