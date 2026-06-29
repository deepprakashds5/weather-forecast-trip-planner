import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg">
      {message}
    </div>
  );
};