import { apiRequest } from "./apiClient"

export const fetchAllClothes = async () => {

    const data = await apiRequest('/products');
    
    return data;

}