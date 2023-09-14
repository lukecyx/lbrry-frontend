export interface IBook {
  goodreads_book_id: string;
  isbn: string;
  isbn13: string;
  authors: string;
  original_publication_year: string;
  original_title: string;
  title: string;
  language_code: string;
  average_rate: number;
  ratings_count: number;
  ratings_1: number;
  ratings_2: number;
  ratings_3: number;
  ratings_4: number;
  ratings_5: number;
  image_url: string;
  small_image_url: string;
}

export interface BooksRootResponse {
  books: IBook[];
  next_url: string;
}
