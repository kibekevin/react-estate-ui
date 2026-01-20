import apiRequest from "./apiRequest.js"

export const singlePageLoader = async({request, params}) => {
    const res = await apiRequest.get('/listings/'+params.id)
    return res.data.data.listing
}


export const listPageLoader = async({request, params}) => {
    console.log(request)
    const query = request.url.split('?')[1]
    const res = await apiRequest.get('/listings?'+query)
    
    const { searchParams } = new URL(request.url);  // inside loader
    const city = searchParams.get("city") || "";

    // Sort listings by createdAt in descending order (most recent first)
    const sortedListings = res.data.data.listings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
        listings: sortedListings,
        city
    }
}
   