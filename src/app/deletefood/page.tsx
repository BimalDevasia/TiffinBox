'use client';

import React, { useState } from 'react';

const DeleteItem = () => {
    const [itemName, setItemName] = useState('');

    const handleDelete = async () => {
        try {
            const response = await fetch('/api/deletefood', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: itemName }),
            });

            if (response.ok) {
                console.log('Food item deleted successfully');
                setItemName(''); // Reset the input field
            } else {
                console.error('Failed to delete food item');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div>
            <h2>Delete Food Item</h2>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter food item name"
            />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteItem;