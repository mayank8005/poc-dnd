import React from 'react';
import Sheet from './components/Sheet'; // Assuming you'll create this component
import TextBoxComponent from './componentLib/TextBoxComponent';
import TableComponent from './componentLib/TableComponent';
import './App.css';

function App() {
  // List of active components
  const [activeComponents, setActiveComponents] = React.useState([]);
  const [availableComponents, _] = React.useState([
    {name: 'TextBox', component: TextBoxComponent, id: "textbox"},
    {name: 'Table', component: TableComponent, id: "table"},
  ]);

  const addComponent = (id) => {
    const newComponent = availableComponents.find(comp => comp.id === id);
    setActiveComponents([...activeComponents, newComponent]);
  };

  return (
    <div className="app">
      {/* Left side: List of components */}
      <div className="component-list">
        <h2>Components List</h2>
        <ul>
          {availableComponents.map(({name, id}) => (
            <li key={id} onClick={() => addComponent(id)}>{name}</li>
          ))}
        </ul>
      </div>

      {/* Right side: A4 sheet */}
      <div className="sheet-container">
        <Sheet activeComponents={activeComponents}/>
      </div>
    </div>
  );
}

export default App;
