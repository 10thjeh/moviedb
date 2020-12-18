const API_KEY = 'ef3b7e9dfef3057a8dba1691a414348c';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchCBSNetwork: `/discover/tv?api_key=${API_KEY}&with_networks=16`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
