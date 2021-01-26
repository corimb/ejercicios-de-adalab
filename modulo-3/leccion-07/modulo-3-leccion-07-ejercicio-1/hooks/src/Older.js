import React, { useState } from 'react';

function Older() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(1);
  const [present, setPresent] = useState(1);

  return (
    <div>
      <p>Hoy tengo {count} años de edad</p>
      <button onClick={() => setCount(count + 1)}>Hazme más viejo</button>
      <div>
        <p>Tengo {present} regalo</p>
        <button onClick={() => setPresent(present + 1)}>Dame regalos</button>
      </div>
    </div>
  );
}

export default Older;
