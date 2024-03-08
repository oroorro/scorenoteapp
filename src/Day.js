import "./Day.css"
import { useState, useRef, useEffect } from "react";

export default function Day({ onDrop, droppedItem }){

   
    const [hours, setHours] = useState([
        { id: 1, name: '8:00 AM' },
        { id: 2, name: '9:00 AM' },
        { id: 3, name: '10:00 AM' },
        { id: 4, name: '11:00 AM' },
        { id: 5, name: '12:00 PM' },
        { id: 6, name: '1:00 PM' },
        { id: 7, name: '2:00 PM' },
        { id: 8, name: '3:00 PM' },
        { id: 9, name: '4:00 PM' },
        { id: 10, name: '5:00 PM' },
        { id: 11, name: '6:00 PM' },
        { id: 12, name: '7:00 PM' },
    ]);



    const [flag, setFlag] = useState(false);
    const [todoL, settodoL] = useState([]);
    const [hoveredItem, setHoveredItem] = useState(null);



    const handleMouseEnter = (item) => {
        setHoveredItem(item);
      };
    
      const handleMouseLeave = () => {
        setHoveredItem(null);
      };
    
      // Declare ItemComponent inside ParentComponent for access to handleMouseEnter and handleMouseLeave
      function ItemComponent({ item, onDrop, isDropped }) {

        const isHovered = hoveredItem && item.id === hoveredItem.id  && !isDropped;

        const handleDrop = (e) => {
          e.preventDefault(); // Prevent default to allow dropping
          onDrop(item.id);
        };
      
        const handleDragOver = (e) => {
          e.preventDefault(); // Necessary to allow dropping
        };
      
        return (
          <div onDragOver={handleDragOver} onDrop={handleDrop} 
          style={{ padding: 20, border: isDropped ? '2px solid blue' : '1px solid gray', background: isHovered ? 'lightblue' : 'transparent' }}
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
            {isDropped && <div>Dropped here!</div>}
          </div>
        );
      }


    return(
        <div className="dayWrapper">
            <div className="dayName">
                Tuesday
            </div>
            <div className="table">
            
             {hours.map(item => (
                <ItemComponent
                key={item.id}
                item={item}
                onDrop={onDrop}
                isDropped={droppedItem === item.id}
                />
            ))}
            
            </div>
        </div>
    )
}