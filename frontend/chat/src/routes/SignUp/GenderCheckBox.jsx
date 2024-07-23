import React from 'react';
import './signup.css';

const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div>
      <div className="gender">
        <div className="box-form">
          <label className={`label ${selectedGender === 'male' ? 'selected' : ''}`}>
            <span>Male</span>
            <input
              type="checkbox"
              name="gender"
              id="male"
              className="check"
              checked={selectedGender === 'male'}
              onChange={() => onCheckBoxChange('male')}
            />
          </label>
        </div>
        <div className="box-form">
          <label className={`label ${selectedGender === 'female' ? 'selected' : ''}`}>
            <span>Female</span>
            <input
              type="checkbox"
              name="gender"
              id="female"
              className="check"
              checked={selectedGender === 'female'}
              onChange={() => onCheckBoxChange('female')}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheckBox;
