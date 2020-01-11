import Router from "vue-router";
import home from "@/pages/home/Index";
import about from '@/pages/about/Index'
import stuff from "@/pages/stuffs/Stuff";
import stuffs from "@/pages/stuffs/Stuffs";

import ValidForm1 from "@/pages/valid/ValidForm1";


/* 
path : the path of the component
name: the name of the component
component : the view of the component*/

export default new Router({
    mode: 'history',
    routes: [{
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
            path: "/stuffs",
            name: "Stuffs",
            component: stuffs
        },
        {
            path: "/stuff/:id",
            name: "Stuff",
            component: stuff
        },
        {
            path: "/valid/f1",
            name: "ValidForm1",
            component: ValidForm1
        }
    ]
});