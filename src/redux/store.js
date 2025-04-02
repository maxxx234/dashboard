import { configureStore, createSlice } from '@reduxjs/toolkit';
// used to create a redux store alse integrates redux-thunk by default allowing to write asynchronous logic
// creaetslice combines three things 1.state 2. reducers(functions that update the state). 3. actions(funciton that triggers the state changes)
// import {suggestions} from '../components/mockData';

const querySlice = createSlice({
  name: 'query',
//   inital state is the starting point of your state gives default values
  initialState: {
    query: '',
    history: [],
    suggestions: [
        "Age Distribution",
        "Product Sales",
        "Customer Demographics",
        "Revenue Breakdown",
        "Monthly Earnings",
        "Top Products"
      ],
      filteredSuggestions: [],
    data: {},
    loading: false,
    error: ''
  },
//   reducers object that contains teh fucnon and update the state 
// each functoin is called action reducers
  reducers: {
    setQuery: (state, action) => { state.query = action.payload; 
        state.filteredSuggestions = state.suggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(action.payload.toLowerCase())
    );
    },
    // state represnets the current state of the slice
    // action represents the action object is dispatched containsa type like setQuery adnd Payload (data passed when dipatching teh action)
    addHistory: (state, action) => { state.history.unshift(action.payload); },
    setData: (state, action) => { state.data = action.payload; },
    setLoading: (state, action) => { state.loading = action.payload; },
    setError: (state, action) => { state.error = action.payload; }
  }
});

export const { setQuery, addHistory, setData, setLoading, setError } = querySlice.actions;

export const store = configureStore({ reducer: { query: querySlice.reducer } });

export const suggestions = [
    "Age Distribution",
    "Product Sales",
    "Customer Demographics",
    "Revenue Breakdown",
    "Monthly Earnings",
    "Top Products",
    "Sales by Region"
  ];
  
