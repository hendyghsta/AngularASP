using BundleTransformer.Core.Builders;
using BundleTransformer.Core.Bundles;
using BundleTransformer.Core.Orderers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace SPAM.App_Start {
    public class BundleConfig {
        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(new StyleBundle("~/bundles/main_style").Include(
                    "~/node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
                    "~/node_modules/ng2-slim-loading-bar/style.css"
                ));


            bundles.Add(new ScriptBundle("~/bundles/main_script").Include(
                    "~/node_modules/hammerjs/hammer.min.js",
                    "~/node_modules/core-js/client/shim.min.js",
                    "~/node_modules/zone.js/dist/zone.js",
                    "~/node_modules/reflect-metadata/Reflect.js",
                    "~/node_modules/systemjs/dist/system.src.js",
                    "~/systemjs.config.js"
                ));

            var nullBulider = new NullBuilder();
            var nullOrderer = new NullOrderer();

            bundles.Add(new CustomStyleBundle("~/bundles/main_sass").Include(
                    "~/node_modules/@primer/css/index.scss",
                    "~/content/styles.scss"
                ));

            // BundleTable.EnableOptimizations = true;
        }
    }
}