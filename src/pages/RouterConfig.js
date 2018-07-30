import Vue from "vue";
import Router from "vue-router";
import Nodes from "@/pages/nodes/Nodes";
import Node from "@/pages/nodes/Node";
import NodeTags from "@/pages/nodes/Tags";
import Charts from "@/pages/nodes/Charts";
import Servers from "@/pages/servers/Servers";
import Server from "@/pages/servers/Server";
import NewServer from "@/pages/servers/New";
import EditServer from "@/pages/servers/Edit";
import Tags from "@/pages/tags/Tags";
import Tag from "@/pages/tags/Tag";
import NewTag from "@/pages/tags/New";
import EditTag from "@/pages/tags/Edit";
import Users from "@/pages/users/Users";
import User from "@/pages/users/User";
import UserTags from "@/pages/users/Tags";
import NewUser from "@/pages/users/New";
import EditUser from "@/pages/users/Edit";
import Versions from "@/pages/versions/Versions";
import Version from "@/pages/versions/Version";
import NewVersion from "@/pages/versions/New";
import EditVersion from "@/pages/versions/Edit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/nodes"
    },
    {
      path: "/nodes",
      component: Nodes
    },
    {
      path: "/nodes/:id",
      component: Node
    },
    {
      path: "/nodes/:id/tags",
      component: NodeTags
    },
    {
      path: "/nodes/:id/charts",
      component: Charts
    },
    {
      path: "/servers",
      component: Servers
    },
    {
      path: "/servers/:id/edit",
      component: EditServer
    },
    {
      path: "/servers/new",
      component: NewServer
    },
    {
      path: "/servers/:id",
      component: Server
    },
    {
      path: "/tags",
      component: Tags
    },
    {
      path: "/tags/:id/edit",
      component: EditTag
    },
    {
      path: "/tags/new",
      component: NewTag
    },
    {
      path: "/tags/:id",
      component: Tag
    },
    {
      path: "/users",
      component: Users
    },
    {
      path: "/users/:id/tags",
      component: UserTags
    },
    {
      path: "/users/:id/edit",
      component: EditUser
    },
    {
      path: "/users/new",
      component: NewUser
    },
    {
      path: "/users/:id",
      component: User
    },
    {
      path: "/versions",
      component: Versions
    },
    {
      path: "/versions/:id/edit",
      component: EditVersion
    },
    {
      path: "/versions/new",
      component: NewVersion
    },
    {
      path: "/versions/:id",
      component: Version
    }
  ]
});
