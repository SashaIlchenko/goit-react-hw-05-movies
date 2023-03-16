import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
const Layout = () => {
    return (<><header><nav> <NavLink to="/" >
        Home
    </NavLink><NavLink to="/movies" >
            Movies
        </NavLink></nav></header><main>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet /> </Suspense>
        </main></>)
}
export default Layout;