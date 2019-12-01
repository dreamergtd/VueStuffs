import Router from "vue-router";
import home from "@/pages/home/Index";
import about from "@/pages/about/Index";
import stuff from "@/pages/stuffs/Stuff";

/* 
path : the path of the component
name: the name of the component
component : the view of the component*/

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: home
    },
    {
      path: "/about",
      name: "About",
      component: about
    },
    {
      path: "/stuff/:id",
      name: "Stuff",
      component: stuff
    }
  ]
});
