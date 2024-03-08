import React, { useState } from 'react';
import Day from './Day'; // Assume this includes ItemComponent
import Todo from './Todo';
import DraggableComponent from './DraggableComponent';

function MainComponent() {
  const [droppedItem, setDroppedItem] = useState(null);

  // Function to call when dropping the DraggableComponent on an ItemComponent
  const onDrop = (itemId) => {
    setDroppedItem(itemId);
  };

  return (
    <div>
      <Day onDrop={onDrop} droppedItem={droppedItem} />
      <DraggableComponent />
    </div>
  );
}

export default MainComponent;
