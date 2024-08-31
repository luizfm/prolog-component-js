import { addons } from "@storybook/manager-api";
import customDsTheme from "./custom-ds-theme";

addons.setConfig({
  theme: {
    ...customDsTheme,
    brandTitle: "Prolog TechBox",
    brandUrl: "https://www.prologapp.com/",
    brandImage: "/company-isotipo.png",
  },
});
