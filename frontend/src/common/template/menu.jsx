import React from "react";

import MenuItem from "./menuItem";
import MenuTree from "./menuTree";
const menu = () => (
  <ul className="sidebar-menu">
    <MenuItem path="#" label="Dashboad" icon="dashboard" />
    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="#billingCycles" label="Ciclos de Pagamentos" icon="usd" />
    </MenuTree>
  </ul>
);

export default menu;
