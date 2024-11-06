// src/App.tsx
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App: React.FC = () => {
  const [reload, setReload] = useState<boolean>(false);

  const handleItem = () => setReload(true);

  return (
    <div className="App">
      <h1>Item Management</h1>
      <ItemForm onAdd={handleItem} />
      <ItemList reload={reload}/>
    </div>
  );
};

export default App;
