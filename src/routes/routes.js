import Home from "../pages/Home/Home";
import RSVP from "../pages/RSVP/RSVP";
import WeddingDay from "../pages/WeddingDay/WeddingDay";
import AfterParty from "../pages/AfterParty/AfterParty";
import Responses from "../pages/Responses/Responses";

const HOME = {
  path: "/",
  title: "Home",
  component: Home
};

const RSVP_ROUTE = {
  path: "/rsvp",
  title: "RSVP",
  component: RSVP
};

const WEDDING_DAY = {
  path: "/wedding",
  title: "Wedding Day",
  component: WeddingDay
};

const AFTER_PARTY = {
  path: "/after",
  title: "After Party",
  component: AfterParty
};

const RESPONSES = {
  path: "/responses",
  title: "Responses",
  component: Responses
};

const ALL_ROUTES = [HOME, RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY, RESPONSES];

const getTitleByPath = pathname => {
  const matchingRoute = ALL_ROUTES.find(route => route.path === pathname);
  if (matchingRoute) {
    return matchingRoute.title;
  }

  return "";
};

export {
  HOME,
  RSVP_ROUTE,
  WEDDING_DAY,
  AFTER_PARTY,
  RESPONSES,
  getTitleByPath
};
