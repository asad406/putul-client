// import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ toys, index }) => {
    console.log(toys);
    const { _id, name, toyName, category, price, quantity } = toys || {};
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{toyName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{`$ ${price}`}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/details/${_id}`}>
                    <button className="btn-custom">Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default Toys;
