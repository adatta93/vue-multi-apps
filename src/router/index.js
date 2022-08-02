import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/ninja-jobs/Home.vue";
import About from "../views/ninja-jobs/About.vue";
import NotFound from "../views/ninja-jobs/NotFound.vue";
import Jobs from "../views/ninja-jobs/jobs/Jobs.vue";
import JobDetails from "../views/ninja-jobs/jobs/JobDetails.vue";

import BlogsHome from "../views/dojo-blog/BlogsHome.vue";
import BlogDetails from "../views/dojo-blog/BlogDetails.vue";

import ReactionTimer from "../pages/ReactionTimer.vue";
import WebForm from "../pages/WebForm.vue";
import NinjaJobs from "../pages/NinjaJobs.vue";

const routes = [
  {
    path: "/reaction-timer",
    name: "ReactionTimer",
    component: ReactionTimer,
  },
  {
    path: "/web-form",
    name: "WebForm",
    component: WebForm,
  },
  {
    path: "/ninja-jobs",
    name: "NinjaJobs",
    component: NinjaJobs,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "jobs",
        name: "Jobs",
        component: Jobs,
      },
      {
        path: "jobs/:id",
        name: "JobDetails",
        component: JobDetails,
        props: true,
      },
    ],
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/ninja-jobs",
  },
  //catch all
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/dojo-blogs",
    name: "BlogsHome",
    component: BlogsHome,
  },
  {
    path: "/posts/:id",
    name: "BlogDetails",
    component: BlogDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
