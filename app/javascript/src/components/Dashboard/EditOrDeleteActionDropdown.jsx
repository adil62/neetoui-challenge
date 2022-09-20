import React from "react";

import { MenuHorizontal, MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const EditOrDeleteActionDropdown = ({
  entityId,
  onEditClick,
  onDeleteClick,
  isVerticalIcon = false,
}) => {
  const listItems = [
    { name: "Edit", clickHandler: () => onEditClick(entityId) },
    { name: "Delete", clickHandler: () => onDeleteClick(entityId) },
  ];
  const dropdownIcon = isVerticalIcon ? MenuVertical : MenuHorizontal;

  return (
    <Dropdown buttonStyle="text" icon={dropdownIcon} position="bottom-start">
      {listItems.map(({ name, clickHandler }) => (
        <li key={name} onClick={clickHandler}>
          {name}
        </li>
      ))}
    </Dropdown>
  );
};

export default EditOrDeleteActionDropdown;
