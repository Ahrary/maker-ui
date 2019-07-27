import React from "react"
import { BlogPost } from "react-understudy"
import Layout from "../layouts/SideNav"

const SideNavPage = () => (
  <Layout>
    <BlogPost paragraph={6} image={false} />
  </Layout>
)

export default SideNavPage
