import React, { useState } from "react";

import { Table as NeetoUITable, Avatar, Typography } from "neetoui";

import CreateContactPane from "./Pane/Create";
import { formatToMonthDate, noop } from "./utils";

import ActionDropdown from "../ActionDropdown";

const renderAvatarWithNameAndRole = (_, { name, role, imageUrl }) => (
  <div className="flex gap-3">
    <Avatar
      size="large"
      user={{
        imageUrl,
      }}
    />
    <div className="flex flex-col gap-1">
      <Typography style="h5">{name}</Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

const renderActionDropdown = (id, handleDelete) => (
  <ActionDropdown
    entityId={id}
    handleDelete={handleDelete}
    handleEdit={noop}
    isVerticalIcon={false}
  />
);

const Table = ({ contacts = [], fetchContacts, handleDelete }) => {
  const [showContactPane, setShowContactPane] = useState(false);

  return (
    <>
      <div className="w-full">
        <NeetoUITable
          rowSelection
          defaultPageSize={10}
          rowData={contacts}
          columnData={[
            {
              title: "NAME & ROLE",
              key: "nameAndRole",
              render: renderAvatarWithNameAndRole,
            },
            {
              title: "EMAIL",
              dataIndex: "email",
              key: "email",
            },
            {
              title: "CREATED AT",
              dataIndex: "createdAt",
              key: "createdAt",
              render: (_, { createdAt }) => formatToMonthDate(createdAt),
            },
            {
              dataIndex: "iconButton",
              key: "iconButton",
              render: (_, { id }) => renderActionDropdown(id, handleDelete),
            },
          ]}
        />
      </div>
      <CreateContactPane
        fetchContacts={fetchContacts}
        setShowPane={setShowContactPane}
        showPane={showContactPane}
      />
    </>
  );
};

export default Table;
