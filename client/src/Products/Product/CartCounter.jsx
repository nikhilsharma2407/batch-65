import React from 'react'
import { Badge } from 'react-bootstrap'
import { BagDash, BagPlus, Trash, TrashFill } from 'react-bootstrap-icons'

const CartCounter = ({ quantity }) => {
    return (
        <section className='d-flex align-items-end'>
            <BagDash size={25} className='text-danger' />
            <Badge  pill className='mx-2'>{quantity}</Badge>
            <BagPlus size={25} className='text-success' />
            <Trash size={25} className='text-danger ms-auto' />
        </section>
    )
}

export default CartCounter