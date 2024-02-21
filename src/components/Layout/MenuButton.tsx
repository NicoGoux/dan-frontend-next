import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface MenuButtonProps {
  buttonLabel: string;
  menuItems?: Array<{ key: number; label: string; route: string }>;
}

const MenuButton = (props: MenuButtonProps) => {
  const { buttonLabel, menuItems } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <button className="nav-button" onClick={handleClick}>
        {buttonLabel}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems?.map((route) => (
          <MenuItem key={route.key} onClick={handleClose}>
            <Link href={`/category/${route.route}`}>{route.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuButton;
