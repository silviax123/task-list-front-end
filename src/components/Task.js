import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// props or params? or both?
const Task = ({ id, title, isComplete }) => {
  // getter, setter
  const [complete, setComplete] = useState(isComplete);

  // ternary 
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

// propTypes it lists out what props 
// & their data types are allowed to be passed to a component.
Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
