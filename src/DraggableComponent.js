export default function DraggableComponent() {
    const handleDragStart = (e) => {
      // You can set data or simply indicate dragging has started
      console.log("Dragging started");
    };
  
    return (
      <div draggable onDragStart={handleDragStart} style={{ width: 100, height: 100, backgroundColor: 'red' }}>
        Drag me
      </div>
    );
  }
  