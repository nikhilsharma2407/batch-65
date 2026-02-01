import React from 'react'
import { Badge } from 'react-bootstrap'
import { BagDash, BagPlus, Trash, TrashFill } from 'react-bootstrap-icons'

const CartCounter = ({ quantity, isLoading, onIncrement, onDecrement, onRemove }) => {
    return (
        <section className='d-flex align-items-end' style={{ filter: isLoading ? `grayscale(1)` : 'none' }}>
            <BagDash size={25} className='text-danger' onClick={onDecrement} />
            <Badge pill className='mx-2'>{quantity}</Badge>
            <BagPlus size={25} className='text-success' onClick={onIncrement} />
            <Trash size={25} className='text-danger ms-auto' onClick={onRemove} />
        </section>
    )
}

export default CartCounter