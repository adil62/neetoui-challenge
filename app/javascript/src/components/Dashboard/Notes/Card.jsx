import React from "react";

import { Clock } from "neetoicons";
import { Tag, Typography, Avatar } from "neetoui";
import { calculateCreatedAgo } from "utils";

import EditOrDeleteActionDropdown from "../EditOrDeleteActionDropdown";

const Card = ({
  note: { id, title, description, tagName, createdAt },
  onEditActionClick,
  onDeleteActionClick,
}) => (
  <div className="mt-3 flex w-full flex-col gap-3 rounded-sm border p-4 shadow-sm">
    <div className="flex justify-between">
      <Typography style="h4" weight="medium">
        {title}
      </Typography>
      <EditOrDeleteActionDropdown
        isVerticalIcon
        entityId={id}
        onDeleteClick={onDeleteActionClick}
        onEditClick={onEditActionClick}
      />
    </div>
    <div>
      <Typography style="h5" weight="normal">
        {description}
      </Typography>
    </div>
    <div className="flex border-t pt-4">
      <Tag label={tagName} style="secondary" type="outline" />
      <div className="ml-auto flex items-center gap-x-2">
        <div className="flex gap-x-2">
          <Clock size="18" />
          <Typography style="body3" weight="normal">
            Created {calculateCreatedAgo(createdAt)}
          </Typography>
        </div>
        <Avatar
          size="small"
          user={{
            name: "user image",
          }}
        />
      </div>
    </div>
  </div>
);

export default Card;
