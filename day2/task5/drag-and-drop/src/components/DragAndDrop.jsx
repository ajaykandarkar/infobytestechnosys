import { useState, useRef } from "react";
import "./DragAndDrop.css"
export const DragAndDrop = () => {

    const [fruitList, setFruitList] = useState([
        { id: 1, content: 'Apple' },
        { id: 2, content: 'Orange' },
        { id: 3, content: 'Banana' },
        { id: 4, content: 'Mango' },
        { id: 5, content: 'Chiku' },])

    const [draggingIndex, setDraggingIndex] = useState(-1);
    const dragNode = useRef();

    const handleDragStart = (e, index) => {
        const { target } = e;
        setDraggingIndex(index);
        dragNode.current = target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', target);
    };

    const handleDragOver = (e, index) => {
        if (dragNode.current !== e.target) {
            let newfruitList = [...fruitList];
            newfruitList.splice(index, 0, newfruitList.splice(draggingIndex, 1)[0]);
            setDraggingIndex(index);
            setFruitList(newfruitList);
        }
    };

    return (
        <>
            <div className="container border mt-5 p-5 shadow-lg">
                {fruitList.map((fruit, index) => (
                    <div
                        key={fruit.id} 
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        className="card mb-4 shadow-sm"
                    >
                        <div className="card-body">
                            {fruit.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
} 
