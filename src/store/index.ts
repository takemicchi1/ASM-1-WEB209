import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { ProductReducer } from 'src/reducer/Product'
import thunk from 'redux-thunk'

const store = createStore(ProductReducer, applyMiddleware(thunk))
export default store