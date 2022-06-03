import httpService from "./HttpService";

const ROUTES = {
  GET_GENRES: "genres/",
};
const METODS = {
  GET: "GET",
  POST: "POST",
};

class GenreService {
  getGenres = async () => {
    const response = await httpService.request({
      url: ROUTES.GET_GENRES,
      method: METODS.GET,
    });
    return response.data;
  };
}
const genreService = new GenreService(httpService);

export default genreService;
