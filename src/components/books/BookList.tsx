import BookItem from "./BookItem";
const BookList = () => {
    return (
        <div className="mx-auto">
            <div className="flex flex-wrap justify-center space-x-4">
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </div>
        </div>
    );
};

export default BookList;
