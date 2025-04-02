import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// is sued to access the data from the redux store 
// usedipatch issued to send action to the redux store
import { setQuery, setLoading, setData, addHistory, setError } from '../redux/store';
// it takes query as a input and return mock response
const simulateQuery = (query) => {
  const lowerQuery = query.toLowerCase();
//   data is an array of objects where
  if (lowerQuery.includes('age distribution')) {
    return { chartType: 'bar', data: [{ name: '18-25', value: 12 }, { name: '26-35', value: 20 },{name: '35-50', value: 45}, {name: '50-70', value: 6}] };
  }
  if (lowerQuery.includes('product sales')) {
    return { chartType: 'pie', data: [{ name: 'Laptop', value: 150 }, { name: 'Phone', value: 200 },{name: 'clocks', value: 405},{name: 'bags', value: 450}] };
  }
  if (lowerQuery.includes('customer demographics')) {
    return { chartType: 'bar', data: [{ name: 'kids', value: 245 }, { name: 'boys', value: 200 },{name: 'mens', value: 345},{name: 'women', value:443}] };
  }
  if (lowerQuery.includes('revenue breakdown')) {
    return { chartType: 'pie', data: [  { name: "Electronics", value: 45000 },
        { name: "Clothing", value: 30000 },
        { name: "Groceries", value: 20000 },
        { name: "Home Decor", value: 15000 },] };
  }
  if (lowerQuery.includes('monthly earnings')) {
    return { chartType: 'bubble', data: [  { month: "January", earnings: 10000 },
        { month: "February", earnings: 12000 },
        { month: "March", earnings: 15000 },
        { month: "April", earnings: 13000 },
        { month: "May", earnings: 16000 },
        { month: "June", earnings: 14000 },
        { month: "July", earnings: 17000 },
        { month: "August", earnings: 15000 },
        { month: "September", earnings: 18000 },
        { month: "October", earnings: 20000 },
        { month: "November", earnings: 21000 },
        { month: "December", earnings: 22000 },] };
  }
  if (lowerQuery.includes('top products')) {
    return { chartType: 'bubble', data: [    { name: "Smartphone", sales: 25000 },
        { name: "Laptop", sales: 30000 },
        { name: "Headphones", sales: 15000 },
        { name: "Smartwatch", sales: 10000 },
        { name: "Tablet", sales: 8000 },] };
  }
//   if no matching query then it retunr empty
  return { chartType: '', data: [] };
};
// this function is an event handler that triggers whenn user submit a query in your rect based dashboad
function QueryInput() {
  const dispatch = useDispatch();
  
//  dispatch the action an allows you to send tha data to redux store

const { query, filteredSuggestions } = useSelector((state) => state.query);

  const handleSuggestionClick = (suggestion) => {
    dispatch(setQuery(suggestion));
  };




//   const query = useSelector((state) => state.query.query);


  // state is the enrotre redux state object
// is an event handler that gets triggrd when the user submits a query  
  const handleQuery = () => {
    dispatch(setLoading(true));
    // set loading state true to indiv=cate that the query proccessing ha started 
    // usweful for displaying the loading bar
    try { 
      const result = simulateQuery(query);
    //   it stores the data in a reslt varia
      dispatch(setData(result));
      dispatch(addHistory(query));
      dispatch(setLoading(false));
    } catch {
      dispatch(setError('Query processing failed.'));
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Type your query..."
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
    
        className="border p-2 w-full"
      />
      {/* this expression ensures that if filterdsuggestions is undefined or null it will not try to acess the length */}
       {filteredSuggestions?.length > 0 && (
        <ul className="border rounded bg-white max-h-40 overflow-auto">
          {filteredSuggestions.map((sug, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(sug)}
            >
              {sug}
            </li>
          ))}
        </ul>
      )}
     <button onClick={handleQuery} className="bg-blue-500 text-white p-2 w-full">Submit</button>
     
    </div>
  );
}

export default QueryInput;
