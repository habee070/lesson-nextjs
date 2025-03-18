import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium">{label}</label>
        <input
          ref={ref}
          {...props}
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
