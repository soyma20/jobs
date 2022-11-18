import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {DetailedJobPage, JobListPage} from "./pages";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}/>
            <Route index element={<Navigate to={'/jobs'}/>}/>
            <Route path={'jobs'} element={<JobListPage/>}/>
            <Route path={'jobs/:id'} element={<DetailedJobPage/>}/>
        </Routes>
    );
};

export {App};
