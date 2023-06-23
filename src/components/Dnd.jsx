import React, { useState } from 'react';

const DragAndDrop = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    const sourceIndex = event.dataTransfer.getData('text/plain');
    const updatedItems = [...items];
    const [removedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, removedItem);
    setItems(updatedItems);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Drag and Drop Example</h1>
      <ul className="border border-gray-300 rounded p-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 py-2"
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, index)}
          >
            <span className="flex-none text-gray-600">{index + 1}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
//   //HANDLE DRAG AND DROP

//   const handleDragStart = (event, index) => {
//     event.dataTransfer.setData("text/plain", index);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
   
//   };

//   const handleDrop = (event, targetIndex) => {
//     const sourceIndex = event.dataTransfer.getData("text/plain");
//     const updatedItems = [...tasks];
//     const [removedItem] = updatedItems.splice(sourceIndex, 1);
//     updatedItems.splice(targetIndex, 0, removedItem);
//     setTasks(updatedItems);
//   };
export default DragAndDrop;
