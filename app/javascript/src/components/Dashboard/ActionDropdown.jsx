import React from "react";

import { MenuHorizontal, MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const ActionDropdown = ({
  entityId,
  handleEdit,
  handleDelete,
  isVerticalIcon = false,
}) => {
  const listItems = [
    { name: "Edit", handleClick: () => handleEdit(entityId) },
    { name: "Delete", handleClick: () => handleDelete(entityId) },
  ];

  const dropdownIcon = isVerticalIcon ? MenuVertical : MenuHorizontal;

  return (
    <Dropdown buttonStyle="text" icon={dropdownIcon} position="bottom-start">
      {listItems.map(({ name, handleClick }) => (
        <li key={name} onClick={handleClick}>
          {name}
        </li>
      ))}
    </Dropdown>
  );
};

export default ActionDropdown;
