import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";

// <div className="max-w-screen-xl mx-auto text-center p-2">
//     <h1 className="text-3xl font-bold">Hello world!</h1>
//     <BookList />
// </div>
//


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});


function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>

            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
