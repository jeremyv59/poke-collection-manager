import React from "react";
import {
  CustomHeader,
  HomepageLayout,
  MainContainer,
  RightContainer,
} from "./home_styled";

const Homepage = () => {
  return (
    <HomepageLayout>
      <CustomHeader>
        <h1>Home</h1>
        <text>Hello Jérémy, welcome back !</text>
      </CustomHeader>
      <MainContainer>
        Main Container Main Container Main Container Main Container Main
        Container Main Container Main ContainerMain Container
      </MainContainer>

      <RightContainer>Right Container</RightContainer>
      {/* <Layout className="site-layout">
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
      </Layout> */}
    </HomepageLayout>
  );
};

export default Homepage;
