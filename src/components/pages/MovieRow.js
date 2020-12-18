import React from 'react'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const placeholder = 'via.placeholder.com/120x180';

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }
	
	handleClick(){
		console.log(this.props.movie);
		localStorage.setItem('movieid',this.props.movie.id);
		localStorage.setItem('movieName',this.props.movie.name? this.props.movie.name : this.props.movie.title);
		localStorage.setItem('backdrop',this.props.movie.backdrop_path);
		localStorage.setItem('poster',this.props.movie.poster_path);
		localStorage.setItem('overview',this.props.movie.overview);
		localStorage.setItem('genre', this.props.movie.genre_ids);
		localStorage.setItem('rating', this.props.movie.vote_average);
		localStorage.setItem('date', this.props.movie.first_air_date?this.props.movie.first_air_date : this.props.movie.release_date);
	};
	
  render() {
    return <table key={this.props.movie.id}>
    <div className="isi">
    <tbody>
      <tr>
        <td>
          <img alt="poster" width="120" src={this.props.movie.poster_src == 'https://image.tmdb.org/t/p/w185null' ? placeholder : this.props.movie.poster_src}/>
        </td>
        <td>
          <div className="isi2">
          <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <div className="tomboll">
					<Button target="_blank"
						variant="contained"
						color="primary"
						onMouseDown={this.viewMovie.bind(this)}		
						disableElevation>
								View on TMDb
                    </Button>	
					<Link to="/Content">		
					<Button
						variant="contained"
						color="primary"
						onClick={this.handleClick.bind(this)}
							>
									View on boba
					</Button>
					</Link>
          </div>
          </div>		                    
        </td>
      </tr>
    </tbody>
    </div>
  </table>
  }
}

export default MovieRow