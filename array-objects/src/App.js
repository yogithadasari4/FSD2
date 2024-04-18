import React from 'react';
import TableView from './TableView';
import './index.css';
const App=() => 
{
 const data=[
  { ID: 1, Name: 'Yogitha', Age: 19 },
     { ID: 2, Name: 'Bindu', Age: 192135 },
     { ID: 3, Name: 'Harika', Age: 20 },
     { ID: 4, Name: 'Yamuna', Age: 20 },
     { ID: 5, Name: 'Urdhva', Age: 21 },
 ];
return (

<div>
<h1 style={{textAlign:'center',borderBottom:'2px solid blue',paddingTop:'20px',marginBottom:'100px'}}>
Array of Objects-Table View
</h1>
<TableView data={data}/>
</div>
);
};
export default App;