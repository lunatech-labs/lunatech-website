import { useEffect, useRef, useState } from 'react';
import "./Input.scss";
import { useTranslation } from 'react-i18next';

interface InputProps {
  number?: string;
  label: string;
  placeHolder?: string;
  name: string;
  type: string;
  options?: string[];
  key?: string;
  required?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  formValue?: string;
}

const Input = (props: InputProps) => {
  const { t } = useTranslation();

  const { number, label, placeHolder, name, type, handleChange, formValue, required } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.formValue || props.placeHolder || "");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => {
    setSelectedOption(value);
    setIsOpen(false);
    if(handleChange) {
        const event = {
            target: { name, value },
        } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
        handleChange(event);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (props.type === 'options') {
      setSelectedOption(props.formValue || props.placeHolder || "");
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, props.formValue, props.placeHolder, props.type]);

  return (
    <div className="question-content">
      <div className="question-number">{number}</div>
      <div className="question">
        <label htmlFor={name}>{label}{required && '*'}</label>
        {type === "options" && props.options ? (    
          <div className="dropdown" ref={dropdownRef}>
            <div className={`dropdown-header ${selectedOption === t('contact.placeHolder.services') ? "default-prompt" : "selected-prompt"}`} onClick={toggling}>
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
            <textarea onChange={handleChange} value={formValue} id={name} name={name} placeholder={placeHolder} />
          </>
        ) : (
          <>
            <input onChange={handleChange} value={formValue} type={type} id={name} name={name} placeholder={placeHolder} />
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
