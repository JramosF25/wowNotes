import { IoIosCheckmark } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import './TodoItem.css';
function TodoItem({text, completed, onComplete, onDelete}) {
    return(
      <li className="TodoItem">

        <span 
          className={`Icon Icon-check Icon-check--complete ${completed && "Icon-check--active"}`}
          onClick={onComplete}
        >
          <IoIosCheckmark />
        </span>

        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        
        <span 
          className={`Icon Icon-delete`}
          onClick={onDelete}
        >
          <IoIosClose />
        </span>
      </li>
    );
  }

export {TodoItem};