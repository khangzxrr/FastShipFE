import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
export const ContentLayout = ({ children }) => {
    return (
        <Content
            style={{
                padding: "2px 0",
                background: "rgb(255, 255, 255)",
            }}
        >
            <div>{children}</div>
        </Content>
    )
}