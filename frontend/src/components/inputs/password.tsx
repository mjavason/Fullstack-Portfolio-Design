import { Input } from '@heroui/react';
import React from 'react';
import { EyeSlashFilledIcon, EyeFilledIcon } from '../icons/eye-slash-filled';

function PasswordInput(props: { isVisible: boolean; toggleVisibility: () => void }) {
  const { isVisible, toggleVisibility } = props;

  return (
    <Input
      className="max-w-xs"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Password"
      placeholder="Enter your password"
      type={isVisible ? 'text' : 'password'}
      variant="bordered"
    />
  );
}

export default PasswordInput;
