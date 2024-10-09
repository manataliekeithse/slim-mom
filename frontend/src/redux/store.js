import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Loader Reducer (For showing/hiding loading spinner)
const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return true;
    case 'HIDE_LOADER':
      return false;
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  loader: loaderReducer,
  // Add more reducers for user, products, etc.
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
