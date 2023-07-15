import React from "react";
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
const MenuComponent = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T">
          自己紹介
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          制作物一覧
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          お問い合わせ
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuComponent;
