import React, { useState } from 'react';
import { addItem } from '../api/itemsApi';

interface ItemFormProps {
  onAdd: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAdd }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Item name is required.');
      return;
    }

    try {
      await addItem(name);
      onAdd()
      setName('');
      setError(null);
    } catch (error) {
      setError("Failed to add item.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
