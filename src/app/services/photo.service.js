import httpService from "./http.service";

const photoService = {
    get: async () => {
        const { data } = await httpService.get();
        return data;
    }
};
export default photoService;