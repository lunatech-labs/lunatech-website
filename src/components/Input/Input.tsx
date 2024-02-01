import React, { useEffect, useRef, useState } from 'react';
import "./Input.scss";

interface InputProps {
  number?: string;
  label: string;
  placeHolder?: string;
  name: string;
  type: string;
  options?: string[];
  key?: string;
}

const Input = (props: InputProps) => {
  const { number, label, placeHolder, name, type } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.placeHolder);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="question-content">
      <div className="question-number">{number}</div>
      <div className="question">
        <label htmlFor={name}>{label}</label>
        {type === "options" && props.options ? (    
          <div className="dropdown" ref={dropdownRef}>
            <div className={`dropdown-header ${selectedOption === "Choose from the list here" ? "default-prompt" : "selected-prompt"}`} onClick={toggling}>
              {selectedOption}
              <span className={`arrow ${isOpen && "open"}`}></span>
            </div>
            {isOpen && (
              <ul className="dropdown-list">
                {props.options.map((option, index) => (
                  <li 
                    className="dropdown-list-item" 
                    onClick={() => onOptionClicked(option)} 
                    key={index}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : type === "textarea" ? (
        <>
            <textarea id={name} name={name} placeholder={placeHolder} />
        </>
        ) : (
        <>
            <input type={type} id={name} name={name} placeholder={placeHolder} />
        </>
        )}
      </div>
    </div>
  );
};

export default Input;
