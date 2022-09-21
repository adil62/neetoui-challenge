import React from "react";

import { Clock } from "neetoicons";
import { Tag, Typography, Avatar, Tooltip } from "neetoui";

import { calculateCreatedAgo, formatToDayTime } from "./utils";

import ActionDropdown from "../ActionDropdown";

const Card = ({
  note: { id, title, description, tagName, createdAt },
  handleEdit,
  handleDelete,
}) => (
  <div className="mt-3 flex w-full flex-col gap-3 rounded-sm border p-4 shadow-sm">
    <div className="flex justify-between">
      <Typography style="h4" weight="medium">
        {title}
      </Typography>
      <ActionDropdown
        isVerticalIcon
        entityId={id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
    <Typography style="h5" weight="normal">
      {description}
    </Typography>
    <div className="flex border-t pt-4">
      <Tag label={tagName} style="secondary" type="outline" />
      <div className="ml-auto flex items-center gap-x-2">
        <div className="flex gap-x-2">
          <Clock size="18" />
          <Tooltip
            content={formatToDayTime(createdAt)}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography style="body3" weight="normal">
              Created {calculateCreatedAgo(createdAt)}
            </Typography>
          </Tooltip>
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
