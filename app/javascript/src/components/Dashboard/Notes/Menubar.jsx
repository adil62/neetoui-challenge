import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";

const MenuBar = ({ showMenu = false }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title="Notes">
        <NeetoUIMenuBar.Block active count={200} label="All" />
        <NeetoUIMenuBar.Block count={2} label="Users" />
        <NeetoUIMenuBar.Block count={7} label="Leads" />
        <NeetoUIMenuBar.Block count={4} label="Visitors" />
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <NeetoUIMenuBar.Block count={80} label="Europe" />
        <NeetoUIMenuBar.Block count={60} label="Middle-East" />
        <NeetoUIMenuBar.Block count={60} label="Asia" />
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Block count={80} label="Europe" />
        <NeetoUIMenuBar.Block count={60} label="Middle-East" />
        <NeetoUIMenuBar.Block count={60} label="Asia" />
      </NeetoUIMenuBar>
    </div>
  );
};

export default MenuBar;
