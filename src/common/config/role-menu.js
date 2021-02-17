// 根据菜单生成权限管理菜单，不用改
import layout from "./layout.js";
let role = { label: "菜单", children: [] };
layout.menu.forEach(item => {
  let obj = {
    label: item.name,
    children: []
  };
  item.submenu.forEach(submenu => {
    let keyArr = submenu.path.split("/");
    let key = keyArr[keyArr.length - 1];
    let label = submenu.label;
    obj.children.push({
      key,
      label
    });
  });
  role.children.push(obj);
});
let roleMenu = [role];
export default roleMenu;
