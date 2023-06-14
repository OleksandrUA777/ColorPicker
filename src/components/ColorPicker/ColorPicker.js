import { useState } from 'react';
import './ColorPicker.css';

export const ColorPicker = ({ options }) => {
  console.log(options);
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (activeOptionIdx === index) {
      optionClasses.push('ColorPicker_option--active');
    }
    return optionClasses.join(' ');
  };

  const activeOptionLabel = options[activeOptionIdx].label;

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <div>
        {<p>Color: {activeOptionLabel}</p>}
        {options.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
};
