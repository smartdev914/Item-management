// src/api/itemsApi.ts
import axios from 'axios';
import { Item } from '../types';

export const getItems = async (): Promise<Item[]> => {
  const response = await axios.get('http://localhost:3000/items');
  return response.data;
};

export const addItem = async (name: string): Promise<Item> => {
  const response = await axios.post('http://localhost:3000/addItems', { name });
  return response.data;
};
