import httpService from "./HttpService";

const ROUTES = {
  GET_GENRES: "genres/",
};

class GenreService {
  getGenres = async () => {
    const response = await httpService.request({
      url: ROUTES.GET_GENRES,
      method: "GET",
    });
    return response.data;
  };
}
const genreService = new GenreService(httpService);

export default genreService;
