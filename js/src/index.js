import {IThemeManager} from "@jupyterlab/apputils";

<<<<<<< before updating
/**
 * A flat, 80's neon inspired theme for JupyterLab.
 */
const plugin = {
  id: "jupyterlab_miami_nights:plugin",
  requires: [IThemeManager],
  activate: (app, manager) => {
    const style = "jupyterlab_miami_nights/index.css";
=======
async function activate(_app) {
  // oxlint-disable-next-line no-console
  console.log("JupyterLab extension jupyterlab-miami-nights is activated!");
}
>>>>>>> after updating

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
