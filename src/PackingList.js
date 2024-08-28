import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onUpdateItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'status') sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => <Item onUpdateItem={onUpdateItem} onDeleteItem={onDeleteItem} key={item.id} item={item} />)}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
