// campsitesSlice.js
import {CAMPSITES} from '../../app/shared/CAMPSITES'

export const selectAllCampsites=()=>{
    return CAMPSITES;
}

export const selectRandomCampsite=()=>{
    return CAMPSITES[Math.floor(CAMPSITES.length*Math.random())]
}

export const selectCampsiteById=(id)=>{
    // parseInt() convert string to Int
    return CAMPSITES.find(campsite=>campsite.id===parseInt(id))
}

export const selectFeaturedCampsite=()=>{
    return CAMPSITES.find(i=> i.featured)
}