import { useState } from "react";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";
import { Form } from "./Form";
import { Logo } from "./Logo";

export default function App() {
  const [items, setItems] = useState([]);

  function handleSetItem(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleUpdateItem(id) {
    setItems((items) => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearItems() {
    const confirm = window.confirm('Are u sure wanna clear');

    if (confirm) setItems([])
  }

  return (
    <div className="app">
      <Logo />
      <Form onSetItem={handleSetItem} />
      <PackingList onClearItems={handleClearItems} onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} items={items} />
      <Stats numberOfItems={items.length} numberOfItemsPacked={items.filter(item => item.packed).length} />
    </div>
  )
}


