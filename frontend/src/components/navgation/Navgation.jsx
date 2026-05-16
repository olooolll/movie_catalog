import { BrowserRouter, Route, Routes } from "react-router-dom"; // Removido o 'Router'
import NotFound from "@/pages/notFound/NotFound.jsx";
import Create from '@/pages/create/Create.jsx';
import Delete from '@/pages/delete/Delete.jsx';
import Alter from '@/pages/alter/Alter.jsx';
import Home from "@/pages/home/Home.jsx";
import Movie from "@/pages/movie/Movie.jsx"; // Importação adicionada!

export default function Navigation() { // Corrigido o nome da função
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <NotFound /> } />
                <Route path="/" element={ <Home /> } />
                <Route path="/criar" element={<Create /> } />
                <Route path="/alterar" element={<Alter /> } />
                <Route path="/deletar" element={<Delete /> } />
                <Route path="/filme/:id" element={<Movie /> } />
            </Routes>
        </BrowserRouter>
    );
}