import { Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import AppHeader from "../../components/AppHeader";
import useMediaQuery, { mediaQueryPoints } from "../../hooks/useMediaQuery";

const { Content } = Layout;

function MainLayout() {
  const isMobile = useMediaQuery(`(max-width: ${mediaQueryPoints.md}px)`);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobileXs = useMediaQuery(`(max-width: ${mediaQueryPoints.xs}px)`);

  return (
    <Layout>
        <AppHeader setOpenDrawer={setOpenDrawer} />
        <Content className='site-layout-content'>
          <Outlet />
        </Content>
      </Layout>
  );
}

export default MainLayout;