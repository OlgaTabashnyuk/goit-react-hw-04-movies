import { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b48946e6ff9e999360a939491d6174d8&language=en-US&page=1`,
    );

    this.setState({ reviews: response.data.results });
    console.log(response.data.results);
  }
  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                Author: {review.author}
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          'Sorry..There is no reviews given for this movie yet.'
        )}
      </div>
    );
  }
}

export default Reviews;
