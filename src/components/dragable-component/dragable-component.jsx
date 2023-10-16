import { any, func, number, string } from "prop-types";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export function DragableComponent({ children, moveIngredients, index }) {

    const ref = useRef(null)
    const [{ isDragging }, drag] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })


    const [_, drop] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            // Determine mouse position
            const clientOffset = monitor.getClientOffset()
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Time to actually perform the action
            moveIngredients(dragIndex, hoverIndex)
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex

        }
    })
    drag(drop(ref))

    const opacity = isDragging ? 0 : 1
    return (
        <div ref={ref}>{children}</div>
    )
}

DragableComponent.propTypes = {
    children: any.isRequired,
    index: number.isRequired,
    moveIngredients: func.isRequired
}