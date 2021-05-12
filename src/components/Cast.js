import { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
        {casts.length > 0 ? (
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
        ) : (
          'There is no cast for this movie yet.'
        )}
      </div>
    );
  }
}

export default withRouter(Cast);
