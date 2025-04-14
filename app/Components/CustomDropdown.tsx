"use client";
import React, { useEffect, useState } from "react";

type DropdownProps = {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
};

const CustomDropdown: React.FC<DropdownProps> = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (options) setSelected(options[0]);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <label className="block mb-2 text-sm font-medium text-base-content">{label}</label>
      <div
        className="bg-secondary border border-gray-300 rounded-lg shadow-sm px-4 py-2 cursor-pointer flex justify-between items-center hover:border-blue-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || "Select an option"}</span>
        <svg className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-primary border border-gray-300 rounded-md shadow-md max-h-60 overflow-auto">
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)} className="px-4 py-2 hover:bg-secondary cursor-pointer">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
