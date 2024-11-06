import React, { useEffect, useState } from 'react';
import { getItems } from '../api/itemsApi';
import { Item } from '../types';

interface ItemListProps {
  reload: boolean;
}

const ItemList: React.FC<ItemListProps> = ({reload}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        setError("Failed to fetch items.");
      }
    };
    fetchItems();
  }, [reload]);

  return (
    <div>
      <h2>Item List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
