import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import useMediaQuery, { mediaQueryPoints } from "../../hooks/useMediaQuery";
import logo from "../../assets/images/logo-orange.png";
import iconOutlined from "../../assets/images/icon-menu-outlined.png";

const { Content } = Layout;

function MainLayout() {
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobileXs = useMediaQuery(`(max-width: ${mediaQueryPoints.xs}px)`);

  return (
    <Layout style={{backgroundColor: "#E9EAEB"}}>
        <AppHeader setOpenDrawer={setOpenDrawer} logo = {logo} iconOutlined = {iconOutlined}/>
        <Content className='site-layout-content'>
          <Outlet />
        </Content>
      </Layout>
  );
}

export default MainLayout;