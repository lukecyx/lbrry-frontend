import "./App.css";
import BookList from "./components/books/BookList";

function App() {
    return (
        <div className="max-w-screen-xl mx-auto text-center p-2">
            <h1 className="text-3xl font-bold">Hello world!</h1>
            <BookList />
        </div>
    );
}

export default App;
