import React from "react";
import { Breadcrumb, Layout } from "antd";
import { HomepageLayout } from "./homepage_styled";

const { Header, Content } = Layout;

const Homepage = () => {
  return (
    <HomepageLayout>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: "blue", width: "70%" }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "red",
            }}
          >
            Bill is a cat.
          </div>
        </Content>
      </Layout>
    </HomepageLayout>
  );
};

export default Homepage;
