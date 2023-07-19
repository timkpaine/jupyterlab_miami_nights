import {IThemeManager} from "@jupyterlab/apputils";

/**
 * A flat, 80's neon inspired theme for JupyterLab.
 */
const plugin = {
  id: "@timkpaine/jupyterlab_miami_nights:plugin",
  requires: [IThemeManager],
  activate: (app, manager) => {
    const style = "@timkpaine/jupyterlab_miami_nights/index.css";

    manager.register({
      name: "JupyterLab Miami Nights",
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },
  autoStart: true,
};

export default plugin;
