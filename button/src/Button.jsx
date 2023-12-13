import React from 'react';

function Button({children}) {
  const greeting = 'Hello Function Component!';

  return <button>{children}</button>;
}

export default Button;