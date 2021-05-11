import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
  return (
    <>
      <h1>Review</h1>
    </>
    //     <ul>
    //       {books.map(book => (
    //         <li key={book.id}>
    //           <Link to={`/books/${book.id}`}>{book.title}</Link>
    //         </li>
    //       ))}
    //     </ul>
  );
};

export default Review;

// ==============НЕ ТРОГАТЬ================================================
// ============вариант 2==========================
// const AuthorBooks = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => (
//         <li key={book.id}>
//           <Link to={`/books/${book.id}`}>{book.title}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default AuthorBooks;

// ========вариант 1=====================
// class AuthorBooks extends Component {
//   state = {
//     books: [],
//   };
//   componentDidMount() {
//     const id = Number(this.props.match.params.authorId);
//     // console.log(id);
//     // console.log(this.props.authors);
//     const { books } = this.props.authors.find(author => author.id === id);
//     console.log(books);
//     this.setState({ books });
//   }

//   //   componentDidUpdate(prevProps, prevState) {
//   //     console.log(Number(this.props.match.params.authorId));
//   //     console.log(this.props.authors);
//   //   }
//   render() {
//     return (
//       <>
//         <h1>Компонент книг автора</h1>;
//         <ul>
//           {this.state.books.map(book => (
//             <li key={book.id}>{book.title}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// export default AuthorBooks;
