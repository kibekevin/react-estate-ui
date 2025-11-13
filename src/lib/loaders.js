import apiRequest from "./apiRequest.js"

export const singlePageLoader = async({request, params}) => {
    const res = await apiRequest.get('/listings/'+params.id)
    return res.data.data.listing
}
   