import React from 'react';
import QueryInput from './components/QueryInput';
// import ChartDisplay from './components/ChartDisplay';
import ChartDisplay from './components/ChatDisplay';

import QueryHistory from './components/QueryHistory';

function App() {
  return (
    <div className="p-4">
      <QueryInput />
      {/* <ChartDisplay />
       */}
       <ChartDisplay/>
      <QueryHistory />
    </div>
  );
}

export default App;
