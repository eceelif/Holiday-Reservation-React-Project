// Room.jsx

import React from "react";

const rooms = [
  { type: "Standard", price: 100 },
  { type: "Deluxe", price: 150 },
  { type: "Suite", price: 200 },
];

function Room({ selectedRoom, onSelectRoom }) {
  return (
    <div>
      <h3>Oda seçimi:</h3>
      <select value={selectedRoom} onChange={onSelectRoom}>
        {rooms.map((room, index) => (
          <option key={index} value={room.type}>
            {room.type} - ${room.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Room;
