import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder: string;
}

interface SelectTriggerProps {
  onClick: () => void;
  children: React.ReactNode;
  isOpen: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  ref?: React.Ref<HTMLButtonElement>;
}

interface SelectValueProps {
  placeholder: string;
  selectedValue: string | null;
}

interface SelectContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

interface SelectGroupProps {
  children: React.ReactNode;
}

interface SelectLabelProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  onClick: (value: string) => void;
  isSelected: boolean;
  isFocused: boolean;
  children: React.ReactNode;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  tabIndex: number;
  ref: React.RefObject<HTMLButtonElement>;
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ onClick, children, isOpen, onKeyDown }, ref) => (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      className={`w-[220px] py-3 px-4 border ${
        isOpen ? 'border-blue-500' : 'border-gray-300'
      } rounded-md text-left bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex justify-between items-center transition-colors duration-150 ease-in-out`}
      tabIndex={0}
      ref={ref}
    >
      {children}
      <span
        className={`ml-2 inline-block transform ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      >
        ▼
      </span>
    </button>
  )
);

const SelectValue = ({ selectedValue, placeholder }: SelectValueProps) => (
  <div className="text-gray-900">
    {selectedValue ? selectedValue : placeholder}
  </div>
);

const SelectContent = ({ isOpen, children }: SelectContentProps) => (
  <div
    role="listbox"
    aria-hidden={!isOpen}
    className={`absolute w-[220px] border border-gray-300 rounded-md bg-white shadow-lg z-10 left-0 mt-2 ${
      isOpen ? 'block' : 'hidden'
    } transition-opacity duration-150 ease-in-out`}
  >
    {children}
  </div>
);

const SelectGroup = ({ children }: SelectGroupProps) => (
  <div className="p-4">{children}</div>
);

const SelectLabel = ({ children }: SelectLabelProps) => (
  <div className="py-2 font-semibold text-gray-700">{children}</div>
);

const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  (
    { value, onClick, isSelected, isFocused, children, onKeyDown, tabIndex },
    ref
  ) => (
    <button
      onClick={() => onClick(value)}
      onKeyDown={onKeyDown}
      aria-selected={isSelected}
      className={`w-full p-3 text-left px-6 rounded-md
        ${isSelected ? 'text-blue-500' : 'text-gray-900'}
        ${isFocused || isSelected ? 'bg-blue-100 text-blue-500' : 'hover:bg-blue-100 hover:text-blue-500'}
        focus:outline-none focus:bg-blue-100 focus:text-blue-500`}
      tabIndex={tabIndex}
      ref={ref}
    >
      {children}
    </button>
  )
);

const Select = ({ options, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update focusedIndex when selectedValue changes
  useEffect(() => {
    if (selectedValue) {
      const index = options.findIndex(
        (option) => option.value === selectedValue
      );
      setFocusedIndex(index);
    } else {
      setFocusedIndex(null);
    }
  }, [selectedValue, options]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    triggerRef.current?.focus(); // Return focus to the trigger
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          if (isOpen && focusedIndex !== null) {
            handleSelect(options[focusedIndex].value);
          } else {
            setIsOpen(!isOpen);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          triggerRef.current?.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) =>
              prev === null ? 0 : Math.min(options.length - 1, prev + 1)
            );
          }
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) =>
              prev === null ? options.length - 1 : Math.max(0, prev - 1)
            );
          }
          break;
        default:
          break;
      }
    },
    [isOpen, focusedIndex, options, handleSelect]
  );

  const handleItemKeyDown = useCallback(
    (index: number) => (e: React.KeyboardEvent<HTMLButtonElement>) => {
      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          handleSelect(options[index].value);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) =>
            Math.min(options.length - 1, (prev ?? -1) + 1)
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex((prev) => Math.max(0, (prev ?? 0) - 1));
          break;
        default:
          break;
      }
    },
    [handleSelect, options]
  );

  useEffect(() => {
    if (isOpen && focusedIndex !== null && itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex]?.focus();
    }
  }, [isOpen, focusedIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !itemRefs.current.some((el) => el?.contains(event.target as Node))
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <SelectTrigger
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        onKeyDown={handleKeyDown}
        ref={triggerRef}
      >
        <SelectValue selectedValue={selectedValue} placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent isOpen={isOpen}>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          {options.map((option, index) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onClick={handleSelect}
              isSelected={selectedValue === option.value}
              isFocused={focusedIndex === index}
              onKeyDown={handleItemKeyDown(index)}
              tabIndex={focusedIndex === index ? 0 : -1}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              {option.label || option.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </div>
  );
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
  { value: 'option6', label: 'Option 6' },
];

const SelectDemo = () => {
  return (
    <div className="p-4">
      <Select options={options} placeholder="Select an option" />
    </div>
  );
};

export default SelectDemo;
