import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Layout(){
    return (
        <main>
            <Header/>
            {/* https://reactrouter.com/en/main/components/outlet */}
            <Outlet/>
        </main>
    );
}