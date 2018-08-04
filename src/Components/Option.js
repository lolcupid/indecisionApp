import React from 'react';

const Option = (props) => {
  return (
    <div>
      <div className="option">
        <p>{props.count}. {props.optionText}</p>
        <button
          className="button button--link"
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}
        >
          remove
      </button>
      </div>
    </div>
  );
};

export default Option;