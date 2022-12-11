// promotionsSlice.js
import{PROMOTIONS} from '../../app/shared/PROMOTIONS'

export const selectFeaturedPromotion=()=>{
    return PROMOTIONS.find(i=>i.featured)
}