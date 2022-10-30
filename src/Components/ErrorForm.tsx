import React from 'react';

interface ErrorFormInterface {
  message: string
}

function ErrorForm({ message } : ErrorFormInterface) {
  return (
    <div className="alert alert-error shadow-lg">
      <div>
        🥺
        <span>{message}</span>
      </div>
    </div>
  );
}

export default ErrorForm;
