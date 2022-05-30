import httpService from "./HttpService";

const ROUTES = {
  GET_MOVIES: "movies/",
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
      method: "POST",
      data: formData,
    });
    return response.data;
  };

  getMovies = async () => {
    const response = await httpService.request({
      url: ROUTES.GET_MOVIES,
      method: "GET",
    });
    return response.data;
  };

  getMovie = async ({ id }) => {
    const response = await httpService.request({
      url: ROUTES.GET_MOVIES + id + "/",
      method: "GET",
    });
    return response.data;
  };
}

const movieService = new MovieService(httpService);

export default movieService;
