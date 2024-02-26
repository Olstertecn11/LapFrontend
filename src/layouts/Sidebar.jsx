import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </>
  )
}


export default SideBar;
