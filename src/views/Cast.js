import { Component } from 'react';

import axios from 'axios';

class Cast extends Component {
  state = {
    casts: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b48946e6ff9e999360a939491d6174d8&language=en-US`,
    );

    this.setState({ casts: response.data.cast });
  }
  render() {
    // const { match } = this.props;
    const { casts } = this.state;
    return (
      <div>
        <ul>
          {casts.map(cast => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w138_and_h175_face/${cast.profile_path}`}
                alt=""
              />
              {cast.name}

              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
        {/*{this.state.authors.length > 0 && (
            <Route
              path={`${match.path}/:authorId`}
              render={props => {
                // console.log(props);
  
                const bookId = Number(props.match.params.authorId);
                // console.log(bookId);
                const author = this.state.authors.find(({ id }) => id === bookId);
  
                console.log(author.books);
                return <AuthorBooks {...props} books={author.books} />;
              }}
            />
          )} */}
      </div>
    );
  }
}

export default Cast;

// ==============НЕ ТРОГАТЬ================================================
// class Cast extends Component {
//   state = {
//     authors: [],
//   };
//   async componentDidMount() {
//     const response = await axios.get(
//       'http://localhost:4040/authors/?_embed=books',
//     );
//     this.setState({ authors: response.data });
//   }
//   render() {
//     const { match } = this.props;
//     return (
//       <>
//         <h1>Это страница авторов</h1>;
//         <ul>
//           {this.state.authors.map(author => (
//             <li key={author.id}>
//               <NavLink to={`${match.url}/${author.id}`}>{author.name}</NavLink>
//             </li>
//           ))}
//         </ul>
//         {this.state.authors.length > 0 && (
//           <Route
//             path={`${match.path}/:authorId`}
//             render={props => {
//               // console.log(props);

//               const bookId = Number(props.match.params.authorId);
//               // console.log(bookId);
//               const author = this.state.authors.find(({ id }) => id === bookId);

//               console.log(author.books);
//               return <AuthorBooks {...props} books={author.books} />;
//             }}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default AuthorsView;
