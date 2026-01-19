import { apiRequest } from "./apiClient"

export const fetchAllClothes = async () => {

    return await apiRequest('/products');

}

export const addCloth = async (cloth) => {

    return await apiRequest('/products', {
        method: "POST",
        body: cloth
    })

}

export const updateCloth = async (cloth) => {

    return await apiRequest('/products/' + id, {
        method: "PATCH",
        body: cloth
    })

}

export const deleteCloth = async (id) => {

    return await apiRequest('/products/' + id, {
        method: "DELETE"
    })

}