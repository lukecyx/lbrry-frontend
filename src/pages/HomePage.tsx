import { useQuery } from "@tanstack/react-query";
import fetchAllBooks from "../services/lbrry/fetchAllBooks";


const HomePage = () => {
    const results = useQuery([], fetchAllBooks);
    return <>
        Home
    </>;
};

export default HomePage;
