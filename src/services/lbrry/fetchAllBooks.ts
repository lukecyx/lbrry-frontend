import { QueryFunction } from "@tanstack/react-query";
import { BooksRootResponse } from "./APIResponses";

const fetchAllBooks: QueryFunction<BooksRootResponse> = async () => {
  const apiRes = await fetch("http://lbrry.local/books/");

  if (!apiRes.ok) {
    throw new Error("fetchAllBooks not ok");
  }

  return apiRes.json();
};

export default fetchAllBooks;
