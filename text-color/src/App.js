import React from 'react';
import ColorChanger from  './ColorChanger';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '10px'}}>
     <h1 style={{ borderBottom: '2px solid blue', color:'Red' }}>Text Effect</h1>
     <ColorChanger/>
    </div>
  );
}

export default App;