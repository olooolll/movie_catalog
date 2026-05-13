import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import NotFound from "@/pages/notFound/NotFound.jsx";
import Create from '@/pages/create/Create.jsx';
import Delete from '@/pages/delete/Delete.jsx';
import Alter from '@/pages/alter/Alter.jsx';
import Home from "@/pages/home/Home.jsx";

export default function Navgation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <NotFound></NotFound> } />
                <Route path="/" element={ <Home></Home> } />
                <Route path="/criar" element={<Create></Create> } />
                <Route path="/alterar" element={<Alter></Alter> } />
                <Route path="/deletar" element={<Delete></Delete> } />
            </Routes>
        </BrowserRouter>
    )
}
