import ProductAction from "action/productAction";
import { IProductStateContext } from "interfaces/store";
import { productInitialState } from "store/AppStore";

export function productReducer(state: IProductStateContext, action: any) {
    switch (action.type) {
        case ProductAction.fetchProducts:
            return {...state, loading: false, products: action.payload.items, paginationInfo: action.payload.meta, page: parseInt(action.payload.meta.currentPage)};
        case ProductAction.setPromoState:
            return {...state, promo: !state.promo, page: 1};
        case ProductAction.setActiveState:
            return {...state, active: !state.promo, page: 1};
        case ProductAction.setSearch:
                return {...state, search: action.payload, page: 1,};
        case ProductAction.setPage:
                return {...state, page: action.payload};
        case ProductAction.reset:
                return {...productInitialState};
      default:
        throw new Error();
    }
  }

