import React from 'react';
import StateFulHello from '../StatefulHello/StatefulHello';
import StatelessHello from '../StatelessHello';

const App: React.FC = () => {
  return (
    <div className="App">
      <StateFulHello name="Andres" enthusiasmLevel={0} />
      <StatelessHello name="Sergio" enthusiasmLevel={1} />
    </div>
  );
}

export default App;
