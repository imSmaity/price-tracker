import React, { ChangeEvent } from "react";

interface ISelectProps {
  options: Array<{ value: string; label: string }>;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Select = ({ options, onChange, value }: ISelectProps) => {
  return (
    <select onChange={onChange} className="p-3 border rounded-md" value={value}>
      {options.map((option) => (
        <option key={option.label + option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
