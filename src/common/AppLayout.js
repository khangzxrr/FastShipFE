import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import {HeaderLayout} from "../common/HeaderLayout"
import {FooterLayout} from "../common/FooterLayout"
import {ContentLayout} from "../common/ContentLayout"

export const AppLayout = () => {
    return(
        <Layout>
            <HeaderLayout/>
            <ContentLayout>
                <Outlet/>
            </ContentLayout>
            <FooterLayout/>
        </Layout>
    );
};