import httpService from "./HttpService";

const ROUTES = {
  GET_MOVIES: "/movies/?page=",
  GET_MOVIE: "/movies/",
};

const METODS = {
  GET: "GET",
  POST: "POST",
};

class MovieService {
  addMovie = async (data) => {
    const formData = new FormData();

    formData.append("coverImage", data.coverImage);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("genre", data.genre);

    const response = await httpService.request({
      url: ROUTES.GET_MOVIES,
      method: METODS.POST,
      data: formData,
    });
    return response.data;
  };

  getMovies = async ({ page, title, genre }) => {
    const response = await httpService.request({
      url: ROUTES.GET_MOVIES + page + "&title=" + title + "&genre=" + genre,
      method: METODS.GET,
    });
    return response.data;
  };

  getMovie = async ({ id }) => {
    const response = await httpService.request({
      url: ROUTES.GET_MOVIE + id + "/",
      method: METODS.GET,
    });
    return response.data;
  };
}

const movieService = new MovieService(httpService);

export default movieService;
