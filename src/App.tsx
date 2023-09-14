import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

// <div className="max-w-screen-xl mx-auto text-center p-2">
//     <h1 className="text-3xl font-bold">Hello world!</h1>
//     <BookList />
// </div>
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
