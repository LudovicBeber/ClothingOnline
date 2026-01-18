import { apiRequest } from "./apiClient"

export const fetchAllClothes = async () => {

    return await apiRequest('/products');

}