
// import Authorization from "@/module/authorization/index"
// import Ordercontent from "@/module/authorization/ordercontent"
// import Shipcontent from "@/module/authorization/shipcontent"

import "@/common/css/reset.scss"

const routes = [
  {
    path: "*",
    redirect: "/authorization"
  },
  {
    path: "/authorization",
    name: "authorization",
    component: ()=> import("@/module/authorization/index"),
    children:[
      {
        path: "/authorization/ordercontent",
        name: "ordercontent",
        component: ()=> import("@/module/authorization/ordercontent"),
      },{
        path: "/authorization/shipcontent",
        name: "shipcontent",
        component: ()=> import("@/module/authorization/shipcontent"),
      },{
        path: "/authorization/pringting",
        name: "pringting",
        component: ()=> import("@/module/authorization/pringting"),
      }
    ]
  }
]
export default routes
