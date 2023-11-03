// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _esRegexpFlagsJs = require("core-js/modules/es.regexp.flags.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _modelJs = require("./model.js");
// import bodymovin from 'lottie-web';
var _checkoutModelJs = require("./model/checkoutModel.js");
var _checkoutModelJsDefault = parcelHelpers.interopDefault(_checkoutModelJs);
var _productsModelJs = require("./model/productsModel.js");
var _productsModelJsDefault = parcelHelpers.interopDefault(_productsModelJs);
var _cartModelJs = require("./model/cartModel.js");
var _cartModelJsDefault = parcelHelpers.interopDefault(_cartModelJs);
var _headerViewJs = require("./view/headerView.js");
var _headerViewJsDefault = parcelHelpers.interopDefault(_headerViewJs);
// import videoControlView from './view/videoControlView.js';
var _copyrightView = require("./view/copyrightView");
var _copyrightViewDefault = parcelHelpers.interopDefault(_copyrightView);
var _categoriesView = require("./view/categoriesView");
var _categoriesViewDefault = parcelHelpers.interopDefault(_categoriesView);
var _productsView = require("./view/productsView");
var _productsViewDefault = parcelHelpers.interopDefault(_productsView);
var _productView = require("./view/productView");
var _productViewDefault = parcelHelpers.interopDefault(_productView);
var _cartView = require("./view/cartView");
var _cartViewDefault = parcelHelpers.interopDefault(_cartView);
var _checkoutViewJs = require("./view/checkoutView.js");
var _checkoutViewJsDefault = parcelHelpers.interopDefault(_checkoutViewJs);
var _runtime = require("regenerator-runtime/runtime");
var _regeneratorRuntime = require("regenerator-runtime");
const controlCategories = async function() {
    try {
        // Category loading animation
        (0, _categoriesViewDefault.default).renderCategoryLoading();
        // Get categories data
        const data = await _modelJs.categories();
        // Send data to categories to render it
        (0, _categoriesViewDefault.default).renderMarkup(data);
        // Render current category button
        localStorage.getItem("category-name") && (0, _categoriesViewDefault.default).highlightCategoryName(localStorage.getItem("category-name"));
    } catch (err) {
        console.log(err.message);
    }
};
const controlProducts = async function(categoryName = "all") {
    try {
        // Product loading animation
        (0, _productsViewDefault.default).renderProductLoading(".section__trends", 5);
        (0, _productsViewDefault.default).renderProductLoading(".section__new", 5);
        (0, _productsViewDefault.default).renderProductLoading(".section__products", 10);
        // Get products data
        const data = await (0, _productsModelJsDefault.default).products();
        // Check if there's category name stored in local storage
        if (localStorage.getItem("category-name")) {
            const categoryData = data.filter((product)=>product.categories[0].slug === localStorage.getItem("category-name"));
            // Render products based on category name
            (0, _productsViewDefault.default).renderMarkup(categoryData);
        }
        // Check if there's no category name in local storage or if user clicks on btn
        if (!categoryName || categoryName === "all" && !localStorage.getItem("category-name")) // Render All the products
        (0, _productsViewDefault.default).renderMarkup(data);
        // Check if user clicks on btn
        if (categoryName && categoryName !== "all") {
            const categoryData = data.filter((product)=>product.categories[0].slug === categoryName);
            // Render products based on category name
            (0, _productsViewDefault.default).renderMarkup(categoryData);
        }
        return data;
    } catch (err) {
        console.log(err);
    }
};
const controlProductsPage = function(categoryName) {
    // Check if user clicks on product
    if (!categoryName) return;
    console.log(categoryName);
    // Store the product name in the local storage that user select
    localStorage.setItem("category-name", categoryName);
    // Go to product details page
    window.location.assign("products.html");
};
const controlPage = function(productName) {
    // Check if user clicks on product
    if (productName) {
        // Store the product name in the local storage that user select
        localStorage.setItem("product-name", productName);
        // Go to product details page
        window.location.assign("product.html");
    }
};
if (window.location.href.includes("product.html")) (async function() {
    try {
        // Render product loading
        (0, _productViewDefault.default).renderProductLoading();
        (0, _productsViewDefault.default).renderProductLoading(".section__related-products", 5);
        // Get all products data
        const data = await (0, _productsModelJsDefault.default).products();
        // Get the current produtc data
        const productData = window.location.hash.slice(1) === "" ? await (0, _productsModelJsDefault.default).product(data.find((product)=>product.name === localStorage.getItem("product-name")).id) : await (0, _productsModelJsDefault.default).product(data.find((product)=>product.name === window.location.hash.slice(1).replaceAll("-", " ")).id);
        // Send data to productView to render it to user interface
        (0, _productViewDefault.default).renderMarkup(productData);
        // Render related products
        (0, _productsViewDefault.default).renderRelatedProducts(productData);
        // Change the URL
        window.history.pushState(null, "", `#${productData.name.replaceAll(" ", "-")}`);
    } catch (err) {
        console.log(err.message);
    }
})();
const controlCartAdd = async function(productColor, productSize) {
    try {
        // Get all products and product data
        const productData = (0, _productsModelJsDefault.default).productdata;
        // Add product to cart and render it to UI
        const options = {
            [productData.variant_groups[0].id]: productData.variant_groups[0].options.find((option)=>option.name === productColor).id,
            [productData.variant_groups[1].id]: productData.variant_groups[1].options.find((option)=>option.name === productSize).id
        };
        // Get cart data and render it to the user interface
        (0, _cartViewDefault.default).updateCart(await (0, _cartModelJsDefault.default).addToCart(productData.id, options));
    } catch (err) {
        console.log(err.message);
    }
};
const controlCartRetrieve = async function() {
    try {
        // Get cart products data
        const data = await (0, _cartModelJsDefault.default).retrieveCart();
        // Render cart to UI
        (0, _cartViewDefault.default).updateCart(data);
    // return data;
    } catch (err) {
        console.log(err.message);
    }
};
const controlRemoveProductCart = async function(productName) {
    try {
        // Get cart data
        const data = (0, _cartModelJsDefault.default).cartData;
        // Remove item from cart
        const newCartData = await (0, _cartModelJsDefault.default).removeProductCart(data.line_items.find((product)=>product.name === productName).id);
        // Render new cart data to user interface
        (0, _cartViewDefault.default).updateCart(newCartData);
    } catch (err) {
        console.log(err);
    }
};
const controlUpdateCart = async function(productName, quantity) {
    try {
        // Get cart data
        const data = (0, _cartModelJsDefault.default).cartData;
        await (0, _cartModelJsDefault.default).updateCart(data.line_items.find((product)=>product.name === productName).id, quantity);
    // cartView.updateCart(cartData);
    } catch (err) {
        console.log(err.message);
    }
};
const controlGoToCheckout = function() {
    window.location.assign("checkout.html");
};
if (window.location.href.includes("checkout.html")) (async function() {
    try {
        // Render product loading
        (0, _checkoutViewJsDefault.default).renderProductLoading();
        await (0, _cartModelJsDefault.default).retrieveCart();
        // Send checkout data to checkout view
        (0, _checkoutViewJsDefault.default).renderProductOrder(await (0, _checkoutModelJsDefault.default).generateCheckout((0, _cartModelJsDefault.default).cartId, {
            type: "cart"
        }));
        // checkoutView.renderProductOrder(checkoutModel.data);
        // Send countries data to checkout view
        (0, _checkoutViewJsDefault.default).renderShippingCountries(await (0, _checkoutModelJsDefault.default).shippingCountries());
        // Send countries subdivision data to checkout view
        (0, _checkoutViewJsDefault.default).renderSubdivisions(await (0, _checkoutModelJsDefault.default).countriesSubdivisions());
    } catch (err) {
        console.log(err.message);
    }
})();
const controlCaptureOrder = async function(customerObj, shippingObj, shippingPrice, billingObj) {
    try {
        const data = await (0, _checkoutModelJsDefault.default).captureOrder(customerObj, shippingObj, shippingPrice, billingObj);
        // Send data to render the order id
        (0, _checkoutViewJsDefault.default).renderOrderId(data);
    } catch (err) {
        console.log(err.message);
    }
};
const controlBackToHome = function() {
    window.location.assign("index.html");
};
const init = function() {
    controlCategories();
    controlProducts();
    controlCartRetrieve();
    (0, _headerViewJsDefault.default).stickyHeader();
    // videoControlView.renderVideo();
    (0, _copyrightViewDefault.default).renderCopyrightYear();
    (0, _categoriesViewDefault.default).handleCategoryName(controlProductsPage);
    (0, _categoriesViewDefault.default).renderHandlerBtns(controlProducts);
    (0, _productsViewDefault.default).getProductName(controlPage);
    (0, _productViewDefault.default).addToBagHandler(controlCartAdd);
    (0, _productViewDefault.default).handleCategoryName(controlProductsPage);
    (0, _cartViewDefault.default).renderCart();
    (0, _cartViewDefault.default).removeProduct(controlRemoveProductCart);
    (0, _cartViewDefault.default).updateQuantity(controlUpdateCart);
    (0, _cartViewDefault.default).goToCheckout(controlGoToCheckout);
    (0, _checkoutViewJsDefault.default).captureOrder(controlCaptureOrder);
    (0, _checkoutViewJsDefault.default).handleBackToHome(controlBackToHome);
};
init();

},{"core-js/modules/es.regexp.flags.js":"gSXXb","core-js/modules/web.immediate.js":"49tUX","./model.js":"Y4A21","./model/checkoutModel.js":"4fXSq","./model/productsModel.js":"a3FGc","./model/cartModel.js":"9ON1r","./view/headerView.js":"5eH5o","./view/copyrightView":"yIFg6","./view/categoriesView":"eU2kp","./view/productsView":"kefoh","./view/productView":"3wN6N","./view/cartView":"glzQp","./view/checkoutView.js":"eW7tq","regenerator-runtime/runtime":"dXNgZ","regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSXXb":[function(require,module,exports) {
var global = require("4ac081c87ae725a0");
var DESCRIPTORS = require("6d28fe52c8b6db97");
var defineBuiltInAccessor = require("aa01ae94fdeb0215");
var regExpFlags = require("2ca8d4bf4a91f1e2");
var fails = require("cb5bd657e5fc3802");
// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
    var INDICES_SUPPORT = true;
    try {
        RegExp(".", "d");
    } catch (error) {
        INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = "";
    var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
    var addGetter = function(key, chr) {
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        Object.defineProperty(O, key, {
            get: function() {
                calls += chr;
                return true;
            }
        });
    };
    var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
    };
    if (INDICES_SUPPORT) pairs.hasIndices = "d";
    for(var key in pairs)addGetter(key, pairs[key]);
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
    return result !== expected || calls !== expected;
});
// `RegExp.prototype.flags` getter
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
if (FORCED) defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
});

},{"4ac081c87ae725a0":"i8HOC","6d28fe52c8b6db97":"92ZIi","aa01ae94fdeb0215":"592rH","2ca8d4bf4a91f1e2":"9bz1x","cb5bd657e5fc3802":"hL6D2"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"92ZIi":[function(require,module,exports) {
var fails = require("936bc46119d3c09e");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"936bc46119d3c09e":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"592rH":[function(require,module,exports) {
var makeBuiltIn = require("efd607eded5860c9");
var defineProperty = require("d65750709faa3e14");
module.exports = function(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
        getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
        setter: true
    });
    return defineProperty.f(target, name, descriptor);
};

},{"efd607eded5860c9":"cTB4k","d65750709faa3e14":"iJR4w"}],"cTB4k":[function(require,module,exports) {
var uncurryThis = require("c446b20aa29db1b2");
var fails = require("8938980068d71ae8");
var isCallable = require("4d631650bec2fe1f");
var hasOwn = require("c17103899fddfa1e");
var DESCRIPTORS = require("f9341be98e6b6634");
var CONFIGURABLE_FUNCTION_NAME = require("a8b7fa2e3337df05").CONFIGURABLE;
var inspectSource = require("e5d60e612603ed21");
var InternalStateModule = require("140fca695fb59184");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"c446b20aa29db1b2":"7GlkT","8938980068d71ae8":"hL6D2","4d631650bec2fe1f":"l3Kyn","c17103899fddfa1e":"gC2Q5","f9341be98e6b6634":"92ZIi","a8b7fa2e3337df05":"l6Kgd","e5d60e612603ed21":"9jh7O","140fca695fb59184":"7AMlF"}],"7GlkT":[function(require,module,exports) {
var NATIVE_BIND = require("f8414ae32e3326bb");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"f8414ae32e3326bb":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("c406abc77f9c2b32");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"c406abc77f9c2b32":"hL6D2"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("c5c55f4af5706ed1");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"c5c55f4af5706ed1":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("70f63ec81c9bbf9d");
var toObject = require("d3e854300355dc96");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"70f63ec81c9bbf9d":"7GlkT","d3e854300355dc96":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("a376f4d5b25af498");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"a376f4d5b25af498":"fOR0B"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("3abaa3b275f359ea");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"3abaa3b275f359ea":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("3fcaef04ece39a43");
var hasOwn = require("c26ccfd36fddc797");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"3fcaef04ece39a43":"92ZIi","c26ccfd36fddc797":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("e79cc5a320e32ace");
var isCallable = require("ed3b4596981f016d");
var store = require("b5ee7bef53baf84d");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"e79cc5a320e32ace":"7GlkT","ed3b4596981f016d":"l3Kyn","b5ee7bef53baf84d":"l4ncH"}],"l4ncH":[function(require,module,exports) {
var global = require("ecc951ba539a8753");
var defineGlobalProperty = require("86a2f01d12724ae6");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"ecc951ba539a8753":"i8HOC","86a2f01d12724ae6":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("9ce9d5efbee72340");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"9ce9d5efbee72340":"i8HOC"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("1cbf586292b5bfe2");
var global = require("1a27b900d215f978");
var isObject = require("bbb0d0fc66630a59");
var createNonEnumerableProperty = require("c81899e962363b52");
var hasOwn = require("88bf14d9ecdacae3");
var shared = require("fa8c9f37b095f631");
var sharedKey = require("9904346966e9dc0a");
var hiddenKeys = require("57e0e1016a9cc85f");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"1cbf586292b5bfe2":"2PZTl","1a27b900d215f978":"i8HOC","bbb0d0fc66630a59":"Z0pBo","c81899e962363b52":"8CL42","88bf14d9ecdacae3":"gC2Q5","fa8c9f37b095f631":"l4ncH","9904346966e9dc0a":"eAjGz","57e0e1016a9cc85f":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("74b878dce58d10a9");
var isCallable = require("ea0fa2a814062d37");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"74b878dce58d10a9":"i8HOC","ea0fa2a814062d37":"l3Kyn"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("133b96a64334f50c");
var $documentAll = require("4d5f7436bd2e0637");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"133b96a64334f50c":"l3Kyn","4d5f7436bd2e0637":"5MHqB"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("e08bd412dd6227ca");
var definePropertyModule = require("725d692fe119899e");
var createPropertyDescriptor = require("e7ab41a2d7957056");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"e08bd412dd6227ca":"92ZIi","725d692fe119899e":"iJR4w","e7ab41a2d7957056":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("7b1497120084017d");
var IE8_DOM_DEFINE = require("619bb47d6dd8dc9a");
var V8_PROTOTYPE_DEFINE_BUG = require("46d43477cd08dae2");
var anObject = require("7f36f401cae1c60");
var toPropertyKey = require("25615d872443b202");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"7b1497120084017d":"92ZIi","619bb47d6dd8dc9a":"qS9uN","46d43477cd08dae2":"ka1Un","7f36f401cae1c60":"4isCr","25615d872443b202":"5XWKd"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("a462e3dc0164266a");
var fails = require("5564ac75351b9b3b");
var createElement = require("82a7684dd009136f");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"a462e3dc0164266a":"92ZIi","5564ac75351b9b3b":"hL6D2","82a7684dd009136f":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("f0dd1a21a7e14de6");
var isObject = require("ce69831a76831a2d");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"f0dd1a21a7e14de6":"i8HOC","ce69831a76831a2d":"Z0pBo"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("929b1efe1f734429");
var fails = require("152eef32e1f227d0");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"929b1efe1f734429":"92ZIi","152eef32e1f227d0":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("372756c542a62c4e");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"372756c542a62c4e":"Z0pBo"}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("94cb298cbd9e6ae3");
var isSymbol = require("d748bfc090b82afd");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"94cb298cbd9e6ae3":"a2mK1","d748bfc090b82afd":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("378d28517cffe774");
var isObject = require("e0a4df26058b990");
var isSymbol = require("9b786e4dcc47e94a");
var getMethod = require("3e1b222dc9185bcf");
var ordinaryToPrimitive = require("98510ffc2bd592ee");
var wellKnownSymbol = require("a836d18f0a8f005d");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"378d28517cffe774":"d7JlP","e0a4df26058b990":"Z0pBo","9b786e4dcc47e94a":"4aV4F","3e1b222dc9185bcf":"9Zfiw","98510ffc2bd592ee":"7MME2","a836d18f0a8f005d":"gTwyA"}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("f10b9a9f3bf5b964");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"f10b9a9f3bf5b964":"i16Dq"}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("ca824d5fbf8d43a1");
var isCallable = require("4b18d8e9acaf5818");
var isPrototypeOf = require("2b74b9233b9132a8");
var USE_SYMBOL_AS_UID = require("7ba04eeff0365ee9");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"ca824d5fbf8d43a1":"6ZUSY","4b18d8e9acaf5818":"l3Kyn","2b74b9233b9132a8":"3jtKQ","7ba04eeff0365ee9":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("e71c8ae929179d3c");
var isCallable = require("6dea1c7e0ed0eff8");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"e71c8ae929179d3c":"i8HOC","6dea1c7e0ed0eff8":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("f72bb84ef1ad754e");
module.exports = uncurryThis({}.isPrototypeOf);

},{"f72bb84ef1ad754e":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("464173aaed464517");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"464173aaed464517":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("1231ce32cd6a2db3");
var fails = require("9caac5148a8462f4");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"1231ce32cd6a2db3":"bjFlO","9caac5148a8462f4":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("b193b76e26f9b932");
var userAgent = require("e70d8d5453f4132c");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"b193b76e26f9b932":"i8HOC","e70d8d5453f4132c":"73xBt"}],"73xBt":[function(require,module,exports) {
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("8181474bbc77e347");
var isNullOrUndefined = require("272638263b1f1ee4");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"8181474bbc77e347":"gOMir","272638263b1f1ee4":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("d63eab052fa3a891");
var tryToString = require("c4ce68a369c793dd");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"d63eab052fa3a891":"l3Kyn","c4ce68a369c793dd":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("7fc269d92b56eb12");
var isCallable = require("9cf9d320d02571e8");
var isObject = require("6df6e67e22167c8");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"7fc269d92b56eb12":"d7JlP","9cf9d320d02571e8":"l3Kyn","6df6e67e22167c8":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("dd7746cd9cba4537");
var shared = require("172d3de3eabcfa35");
var hasOwn = require("75e9a24ddbc2ba85");
var uid = require("52c22eeadd852804");
var NATIVE_SYMBOL = require("8332875d3ebba567");
var USE_SYMBOL_AS_UID = require("5476fa5b08ba43a8");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"dd7746cd9cba4537":"i8HOC","172d3de3eabcfa35":"i1mHK","75e9a24ddbc2ba85":"gC2Q5","52c22eeadd852804":"a3SEE","8332875d3ebba567":"8KyTD","5476fa5b08ba43a8":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("32c31867d7b34ad");
var store = require("914aa2c350c4ad4c");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.29.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"32c31867d7b34ad":"5ZsyC","914aa2c350c4ad4c":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("d812fa34730936be");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"d812fa34730936be":"7GlkT"}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"eAjGz":[function(require,module,exports) {
var shared = require("e60542e205bd95c4");
var uid = require("64ba09af8db3b876");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"e60542e205bd95c4":"i1mHK","64ba09af8db3b876":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9bz1x":[function(require,module,exports) {
"use strict";
var anObject = require("890f1d5fdb5e6438");
// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function() {
    var that = anObject(this);
    var result = "";
    if (that.hasIndices) result += "d";
    if (that.global) result += "g";
    if (that.ignoreCase) result += "i";
    if (that.multiline) result += "m";
    if (that.dotAll) result += "s";
    if (that.unicode) result += "u";
    if (that.unicodeSets) result += "v";
    if (that.sticky) result += "y";
    return result;
};

},{"890f1d5fdb5e6438":"4isCr"}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("6be6d0c5b5b01b3d");
require("8d5ab29788ac9c69");

},{"6be6d0c5b5b01b3d":"fOGFr","8d5ab29788ac9c69":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("83cddcd4931d1324");
var global = require("ca6bf0819a61240");
var clearImmediate = require("bb1f9d9c8677888f").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"83cddcd4931d1324":"dIGt4","ca6bf0819a61240":"i8HOC","bb1f9d9c8677888f":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("11edf42b1e10f284");
var getOwnPropertyDescriptor = require("32e8a157b5567d42").f;
var createNonEnumerableProperty = require("49b7991a562d8970");
var defineBuiltIn = require("d7c42bfba068bf73");
var defineGlobalProperty = require("d20b8af816736dcd");
var copyConstructorProperties = require("a0de11e9b63e880d");
var isForced = require("a1696fc3309b808f");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"11edf42b1e10f284":"i8HOC","32e8a157b5567d42":"lk5NI","49b7991a562d8970":"8CL42","d7c42bfba068bf73":"6XwEX","d20b8af816736dcd":"ggjnO","a0de11e9b63e880d":"9Z12i","a1696fc3309b808f":"6uTCZ"}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("f567953fa850fe70");
var call = require("e8052233e48d4036");
var propertyIsEnumerableModule = require("eefe59d122b57646");
var createPropertyDescriptor = require("ad91582c391b181d");
var toIndexedObject = require("609e61b033186d35");
var toPropertyKey = require("aeabc0cd34b0fcea");
var hasOwn = require("5c10210e69381440");
var IE8_DOM_DEFINE = require("a4021b820abfca89");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"f567953fa850fe70":"92ZIi","e8052233e48d4036":"d7JlP","eefe59d122b57646":"7SuiS","ad91582c391b181d":"1lpav","609e61b033186d35":"jLWwQ","aeabc0cd34b0fcea":"5XWKd","5c10210e69381440":"gC2Q5","a4021b820abfca89":"qS9uN"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("a5a474c6ae57aaee");
var requireObjectCoercible = require("5135d0b20c84682d");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"a5a474c6ae57aaee":"kPk5h","5135d0b20c84682d":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("c3959b8ff5c51d52");
var fails = require("af1e95fcaad0fe8f");
var classof = require("1834ced6a9a85347");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"c3959b8ff5c51d52":"7GlkT","af1e95fcaad0fe8f":"hL6D2","1834ced6a9a85347":"bdfmm"}],"bdfmm":[function(require,module,exports) {
var uncurryThis = require("764626eb43cb354e");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"764626eb43cb354e":"7GlkT"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("6d3c5afdd6e659b3");
var definePropertyModule = require("17921e8b3e28c137");
var makeBuiltIn = require("8aaf78805db363a3");
var defineGlobalProperty = require("1f4751f1aa434970");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"6d3c5afdd6e659b3":"l3Kyn","17921e8b3e28c137":"iJR4w","8aaf78805db363a3":"cTB4k","1f4751f1aa434970":"ggjnO"}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("8b3fe0e3ff1eaa9b");
var ownKeys = require("b14ed8b49e6d31a5");
var getOwnPropertyDescriptorModule = require("2615b3969e1fd9ff");
var definePropertyModule = require("7061566f2ee3511d");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"8b3fe0e3ff1eaa9b":"gC2Q5","b14ed8b49e6d31a5":"1CX1A","2615b3969e1fd9ff":"lk5NI","7061566f2ee3511d":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("9d1aeb55837db164");
var uncurryThis = require("2c86954ab151d29e");
var getOwnPropertyNamesModule = require("225381746e702681");
var getOwnPropertySymbolsModule = require("6112567b382797c9");
var anObject = require("887278c1b51ec2e0");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"9d1aeb55837db164":"6ZUSY","2c86954ab151d29e":"7GlkT","225381746e702681":"fjY04","6112567b382797c9":"4DWO3","887278c1b51ec2e0":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("bfdce66a25f87199");
var enumBugKeys = require("8d09aae816561e1c");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"bfdce66a25f87199":"hl5T1","8d09aae816561e1c":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("9690f6e784eb693f");
var hasOwn = require("a11921136051baf");
var toIndexedObject = require("1fbf51e494b8b51");
var indexOf = require("23e9ad954af57f69").indexOf;
var hiddenKeys = require("d0c1267304914d3");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"9690f6e784eb693f":"7GlkT","a11921136051baf":"gC2Q5","1fbf51e494b8b51":"jLWwQ","23e9ad954af57f69":"n5IsC","d0c1267304914d3":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("25357f9dacb7a6d");
var toAbsoluteIndex = require("97f2cbd851f984ec");
var lengthOfArrayLike = require("1542334ab55bf5f4");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"25357f9dacb7a6d":"jLWwQ","97f2cbd851f984ec":"5yh27","1542334ab55bf5f4":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("53fcebe601ab62f5");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"53fcebe601ab62f5":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("cc60280e4ec8f22d");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"cc60280e4ec8f22d":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("dd4325b2d935ac89");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"dd4325b2d935ac89":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("fd016a0f20863291");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"fd016a0f20863291":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("74db2c39de080927");
var isCallable = require("bde9ac5ee48c7563");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"74db2c39de080927":"hL6D2","bde9ac5ee48c7563":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("e53051bb8e471b44");
var apply = require("ecdb34d82b871dbe");
var bind = require("60186e167d20edf2");
var isCallable = require("aa7270d00f147bf6");
var hasOwn = require("b893b8894b960b2");
var fails = require("74fda90347966e1d");
var html = require("926702475e6ae023");
var arraySlice = require("d5500e43e3f654cc");
var createElement = require("5d1a7d7268a9ddc7");
var validateArgumentsLength = require("7477f569242faff4");
var IS_IOS = require("4b5939ac0a2a24fc");
var IS_NODE = require("f793d45bb0fbc8f0");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"e53051bb8e471b44":"i8HOC","ecdb34d82b871dbe":"148ka","60186e167d20edf2":"7vpmS","aa7270d00f147bf6":"l3Kyn","b893b8894b960b2":"gC2Q5","74fda90347966e1d":"hL6D2","926702475e6ae023":"2pze4","d5500e43e3f654cc":"RsFXo","5d1a7d7268a9ddc7":"4bOHl","7477f569242faff4":"b9O3D","4b5939ac0a2a24fc":"bzGah","f793d45bb0fbc8f0":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("98a09a4d524aa0fc");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"98a09a4d524aa0fc":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("a8d7fe015caa2842");
var aCallable = require("3c809067fc1993ef");
var NATIVE_BIND = require("2ff285b7926c2fff");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"a8d7fe015caa2842":"5Hioa","3c809067fc1993ef":"gOMir","2ff285b7926c2fff":"i16Dq"}],"5Hioa":[function(require,module,exports) {
var classofRaw = require("a09a9a084a5822e2");
var uncurryThis = require("1445e1e4a8eb8beb");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"a09a9a084a5822e2":"bdfmm","1445e1e4a8eb8beb":"7GlkT"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("4dd24992cb9702fd");
module.exports = getBuiltIn("document", "documentElement");

},{"4dd24992cb9702fd":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("29d3c3a76f607928");
module.exports = uncurryThis([].slice);

},{"29d3c3a76f607928":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("256808fcd417f6cf");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"256808fcd417f6cf":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var process = require("bf78d7826392cb33");
var classof = require("1ad1b8284948ce8a");
module.exports = typeof process != "undefined" && classof(process) == "process";

},{"bf78d7826392cb33":"d5jf4","1ad1b8284948ce8a":"bdfmm"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"l7FDS":[function(require,module,exports) {
var $ = require("ba85d005065619dc");
var global = require("c18ccb363feddd90");
var setTask = require("79ac52f1f1cb6d48").set;
var schedulersFix = require("13c5f2fc4ff9958d");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"ba85d005065619dc":"dIGt4","c18ccb363feddd90":"i8HOC","79ac52f1f1cb6d48":"7jDg7","13c5f2fc4ff9958d":"cAPb6"}],"cAPb6":[function(require,module,exports) {
"use strict";
var global = require("597b7beae22666e6");
var apply = require("a445eecf11f47323");
var isCallable = require("8464209aab50cd4a");
var ENGINE_IS_BUN = require("787270cdb9467072");
var USER_AGENT = require("a764f05efca87d07");
var arraySlice = require("f1891f7877a85efd");
var validateArgumentsLength = require("2a0d12091d441fb9");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"597b7beae22666e6":"i8HOC","a445eecf11f47323":"148ka","8464209aab50cd4a":"l3Kyn","787270cdb9467072":"2BA6V","a764f05efca87d07":"73xBt","f1891f7877a85efd":"RsFXo","2a0d12091d441fb9":"b9O3D"}],"2BA6V":[function(require,module,exports) {
/* global Bun -- Deno case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "commerce", ()=>commerce);
parcelHelpers.export(exports, "categories", ()=>categories);
var _config = require("./config");
var _helpers = require("./helpers");
var _commerceJs = require("@chec/commerce.js");
var _commerceJsDefault = parcelHelpers.interopDefault(_commerceJs);
const commerce = new (0, _commerceJsDefault.default)((0, _config.PUBLIC_API_KEY));
const categories = async function() {
    try {
        const res = await commerce.categories.list();
        return res.data;
    } catch  {
        throw new Error("Something went wrong. Please reload the page and try again!");
    }
};

},{"./config":"k5Hzs","./helpers":"hGI1E","@chec/commerce.js":"9tnnA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "PUBLIC_API_KEY", ()=>PUBLIC_API_KEY);
const API_URL = "https://api.chec.io/v1/";
const PUBLIC_API_KEY = "pk_4929479729be6a9882b891440ea2b215c2f397ca86d6d";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"hGI1E":[function(require,module,exports) {
// export const AJAX = async function (requestType) {
//   try {
//     return commerce[requestType].list();
//   } catch (err) {
//   }
// };

},{}],"9tnnA":[function(require,module,exports) {
var _objectWithoutProperties = require("e3dd3a4651dc0267"), _toConsumableArray = require("8467cfcc8542baba"), _typeof = require("1a3f03a203bd610b"), _defineProperty = require("3a53ef070188fd94"), _classCallCheck = require("c83862bfdaefdcad"), _createClass = require("ba7212682833714e"), _regeneratorRuntime = require("90c7f21080d5346d"), _asyncToGenerator = require("e2fcd0cb31ec9325"), axios = require("75abffe6d5fcbe3b");
function _interopDefaultLegacy(e) {
    return e && "object" == typeof e && "default" in e ? e : {
        default: e
    };
}
var _objectWithoutProperties__default = _interopDefaultLegacy(_objectWithoutProperties), _toConsumableArray__default = _interopDefaultLegacy(_toConsumableArray), _typeof__default = _interopDefaultLegacy(_typeof), _defineProperty__default = _interopDefaultLegacy(_defineProperty), _classCallCheck__default = _interopDefaultLegacy(_classCallCheck), _createClass__default = _interopDefaultLegacy(_createClass), _regeneratorRuntime__default = _interopDefaultLegacy(_regeneratorRuntime), _asyncToGenerator__default = _interopDefaultLegacy(_asyncToGenerator), axios__default = _interopDefaultLegacy(axios), Storage = function() {
    function Storage(commerce) {
        _classCallCheck__default.default(this, Storage), this.commerce = commerce;
    }
    return _createClass__default.default(Storage, [
        {
            key: "set",
            value: function(key, value, days) {
                if ("undefined" == typeof document || this.commerce.options.disableStorage) return null;
                var path, expires = "";
                if (path = this.commerce.options.config && void 0 !== this.commerce.options.config.cookie_path ? this.commerce.options.config.cookie_path : "/", days) {
                    var date = new Date;
                    date.setTime(date.getTime() + 24 * days * 3600000), expires = "; expires=" + date.toUTCString();
                }
                return document.cookie = key + "=" + value + expires + "; path=" + path;
            }
        },
        {
            key: "get",
            value: function(key) {
                if ("undefined" == typeof document || this.commerce.options.disableStorage) return null;
                key += "=";
                for(var _i = 0, _Array$from = Array.from(document.cookie.split(";")); _i < _Array$from.length; _i++){
                    for(var c = _Array$from[_i]; " " === c.charAt(0);)c = c.substring(1, c.length);
                    if (0 === c.indexOf(key)) return c.substring(key.length, c.length);
                }
                return null;
            }
        },
        {
            key: "remove",
            value: function(key) {
                return this.set(key, "", -1);
            }
        }
    ]), Storage;
}();
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(source, !0).forEach(function(key) {
            _defineProperty__default.default(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var Cart = function() {
    function Cart(commerce) {
        _classCallCheck__default.default(this, Cart), this.commerce = commerce, this.cartId = null;
    }
    var _request;
    return _createClass__default.default(Cart, [
        {
            key: "refresh",
            value: function() {
                var _this = this;
                return this.commerce.request("carts").then(function(cart) {
                    var id = cart.id;
                    return _this.commerce.storage.set("commercejs_cart_id", id, _this.commerce.options.cartLifetime), _this.cartId = id, cart;
                });
            }
        },
        {
            key: "id",
            value: function() {
                if (null !== this.cartId) return this.cartId;
                var storedCartId = this.commerce.storage.get("commercejs_cart_id");
                return "string" == typeof storedCartId && storedCartId.length ? storedCartId : null;
            }
        },
        {
            key: "request",
            value: (_request = _asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark(function _callee() {
                var endpoint, method, data, returnFullRequest, suffix, _this2 = this, _args = arguments;
                return _regeneratorRuntime__default.default.wrap(function(_context) {
                    for(;;)switch(_context.prev = _context.next){
                        case 0:
                            if (endpoint = _args.length > 0 && void 0 !== _args[0] ? _args[0] : "", method = _args.length > 1 && void 0 !== _args[1] ? _args[1] : "get", data = _args.length > 2 && void 0 !== _args[2] ? _args[2] : null, returnFullRequest = _args.length > 3 && void 0 !== _args[3] && _args[3], suffix = "string" == typeof endpoint && endpoint.length ? "/".concat(endpoint) : "", this.id()) {
                                _context.next = 8;
                                break;
                            }
                            return _context.next = 8, this.refresh();
                        case 8:
                            return _context.abrupt("return", this.commerce.request("carts/".concat(this.id()).concat(suffix), method, data, returnFullRequest).catch(function(error) {
                                if (error.statusCode && 404 === error.statusCode) return _this2.refresh().then(function() {
                                    return _this2.commerce.request("carts/".concat(_this2.id()).concat(suffix), method, data, returnFullRequest);
                                });
                                throw error;
                            }));
                        case 9:
                        case "end":
                            return _context.stop();
                    }
                }, _callee, this);
            })), function() {
                return _request.apply(this, arguments);
            })
        },
        {
            key: "add",
            value: function(productId) {
                var quantity = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, variantData = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, validatedVariant = {};
                if ("string" == typeof variantData && variantData.startsWith("vrnt")) validatedVariant.variant_id = variantData;
                else if (variantData && "object" === _typeof__default.default(variantData)) {
                    var validKeys = Object.keys(variantData).every(function(key) {
                        return key.startsWith("vgrp");
                    }), validValues = Object.values(variantData).every(function(key) {
                        return key.startsWith("optn");
                    });
                    if (!validKeys || !validValues) throw new Error("The variant options provided to cart.add do not appear to be a valid map of group IDs to option IDs");
                    validatedVariant.options = variantData;
                } else if (variantData) throw new Error("Variant data provided to cart.add must be a variant ID, or a map of group IDs to option IDs");
                var data = _objectSpread({
                    id: "object" === _typeof__default.default(productId) ? productId.id : productId,
                    quantity: quantity
                }, validatedVariant);
                return this.request("", "post", data);
            }
        },
        {
            key: "retrieve",
            value: function() {
                var _this3 = this, cartId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return cartId && (this.cartId = cartId), this.request().then(function(cart) {
                    return _this3.cartId = cart && cart.id || null, cart;
                });
            }
        },
        {
            key: "checkQuantity",
            value: function(productId, quantity) {
                return this.commerce.request("products/".concat(productId)).then(function(response) {
                    return quantity <= response.quantity;
                });
            }
        },
        {
            key: "remove",
            value: function(lineId) {
                return this.request("items/".concat(lineId), "delete");
            }
        },
        {
            key: "delete",
            value: function() {
                return this.request("", "delete");
            }
        },
        {
            key: "update",
            value: function(lineId, data) {
                return this.request("items/".concat(lineId), "put", data);
            }
        },
        {
            key: "contents",
            value: function() {
                return this.request("items");
            }
        },
        {
            key: "empty",
            value: function() {
                return this.request("items", "delete");
            }
        }
    ]), Cart;
}(), Categories = function() {
    function Categories(commerce) {
        _classCallCheck__default.default(this, Categories), this.commerce = commerce;
    }
    return _createClass__default.default(Categories, [
        {
            key: "list",
            value: function() {
                var params = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return "function" == typeof params ? this.commerce.request("categories") : this.commerce.request("categories", "get", params);
            }
        },
        {
            key: "retrieve",
            value: function(id) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.commerce.request("categories/".concat(id), "get", data);
            }
        }
    ]), Categories;
}(), Checkout = function() {
    function Checkout(commerce) {
        _classCallCheck__default.default(this, Checkout), this.commerce = commerce;
    }
    return _createClass__default.default(Checkout, [
        {
            key: "protect",
            value: function protect(token) {
                return this.commerce.request("checkouts/".concat(token, "/protect")).then(function(data) {
                    return eval(data.sift_js);
                });
            }
        },
        {
            key: "generateToken",
            value: function(identifier, data) {
                return this.commerce.request("checkouts/".concat(identifier), "get", data);
            }
        },
        {
            key: "generateTokenFrom",
            value: function(type, identifier) {
                if (![
                    "product_id",
                    "cart",
                    "permalink"
                ].includes(type)) throw new Error('Cannot generate a token with unknown "'.concat(type, '" type'));
                return this.generateToken(identifier, {
                    type: type
                });
            }
        },
        {
            key: "capture",
            value: function(token, data) {
                var _this = this;
                return this.commerce.request("checkouts/".concat(token), "post", data).then(function(response) {
                    return _this.commerce.cart.refresh(), response;
                });
            }
        },
        {
            key: "receipt",
            value: function(token) {
                return this.commerce.request("checkouts/".concat(token, "/receipt"));
            }
        },
        {
            key: "checkPayWhatYouWant",
            value: function(token, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/pay_what_you_want"), "get", data);
            }
        },
        {
            key: "fields",
            value: function(identifier) {
                return this.commerce.request("checkouts/".concat(identifier, "/fields"));
            }
        },
        {
            key: "setTaxZone",
            value: function(identifier, data) {
                return this.commerce.request("checkouts/".concat(identifier, "/helper/set_tax_zone"), "get", data);
            }
        },
        {
            key: "getLocationFromIP",
            value: function(token) {
                var ipAddress = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", urlSuffix = ipAddress && ipAddress.length ? "?ip_address=".concat(ipAddress) : "";
                return this.commerce.request("checkouts/".concat(token, "/helper/location_from_ip").concat(urlSuffix));
            }
        },
        {
            key: "isFree",
            value: function(token) {
                return this.commerce.request("checkouts/".concat(token, "/check/is_free"));
            }
        },
        {
            key: "checkVariant",
            value: function(token, lineItemId, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/").concat(lineItemId, "/variant"), "get", data);
            }
        },
        {
            key: "checkDiscount",
            value: function(token, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/discount"), "get", data);
            }
        },
        {
            key: "checkShippingOption",
            value: function(token, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/shipping"), "get", data);
            }
        },
        {
            key: "getShippingOptions",
            value: function(token, data) {
                return this.commerce.request("checkouts/".concat(token, "/helper/shipping_options"), "get", data);
            }
        },
        {
            key: "checkQuantity",
            value: function(token, lineItem, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/").concat(lineItem, "/quantity"), "get", data);
            }
        },
        {
            key: "helperValidation",
            value: function(token) {
                return this.commerce.request("checkouts/".concat(token, "/helper/validation"));
            }
        },
        {
            key: "getLive",
            value: function(token) {
                return this.commerce.request("checkouts/".concat(token, "/live"));
            }
        },
        {
            key: "getToken",
            value: function(token) {
                return this.commerce.request("checkouts/tokens/".concat(token));
            }
        },
        {
            key: "checkGiftcard",
            value: function(token, data) {
                return this.commerce.request("checkouts/".concat(token, "/check/giftcard"), "get", data);
            }
        }
    ]), Checkout;
}();
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$1(source, !0).forEach(function(key) {
            _defineProperty__default.default(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var Customer = function() {
    function Customer(commerce) {
        _classCallCheck__default.default(this, Customer), this.commerce = commerce, this.data = {};
    }
    return _createClass__default.default(Customer, [
        {
            key: "login",
            value: function(email, baseUrl) {
                return this.commerce.request("customers/email-token", "post", {
                    email: email,
                    base_url: baseUrl
                });
            }
        },
        {
            key: "getToken",
            value: function(token) {
                var _this = this, save = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return this.commerce.request("customers/exchange-token", "post", {
                    token: token
                }).then(function(result) {
                    return save && (result.customer_id || result.jwt) && (_this.data = {
                        id: result.customer_id || null,
                        token: result.jwt || null
                    }, window.localStorage.setItem("commercejs_customer_id", _this.data.id), window.localStorage.setItem("commercejs_customer_token", _this.data.token)), result;
                });
            }
        },
        {
            key: "update",
            value: function() {
                var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, customerId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, token = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this._assertArgsProvided(customerId, token), this._request("customers/".concat(customerId || this.id()), "PUT", data, {}, token);
            }
        },
        {
            key: "getOrders",
            value: function() {
                var customerId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, token = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, params = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this._assertArgsProvided(customerId, token);
                var requestParams = _objectSpread$1({
                    sortBy: "created_at",
                    sortDirection: "desc"
                }, params);
                return this._request("customers/".concat(customerId || this.id(), "/orders"), "get", requestParams, {}, token);
            }
        },
        {
            key: "getOrder",
            value: function(orderId) {
                var customerId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, token = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return this._assertArgsProvided(customerId, token), this._request("customers/".concat(customerId || this.id(), "/orders/").concat(orderId), "get", {}, {}, token);
            }
        },
        {
            key: "about",
            value: function() {
                return this._request("customers/".concat(this.id()));
            }
        },
        {
            key: "id",
            value: function() {
                return this._fromStorage("id");
            }
        },
        {
            key: "token",
            value: function() {
                return this._fromStorage("token");
            }
        },
        {
            key: "isLoggedIn",
            value: function() {
                return null !== this.id() && null !== this.token();
            }
        },
        {
            key: "logout",
            value: function() {
                this.data = {}, window.localStorage.removeItem("commercejs_customer_id"), window.localStorage.removeItem("commercejs_customer_token");
            }
        },
        {
            key: "_fromStorage",
            value: function(key) {
                if (this.data[key] && this.data[key].length) return this.data[key];
                var storedValue = window.localStorage.getItem("commercejs_customer_".concat(key));
                return "string" == typeof storedValue && storedValue.length ? storedValue : null;
            }
        },
        {
            key: "_request",
            value: function(endpoint) {
                var method = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get", data = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, extraHeaders = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, token = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, authToken = token || this.token();
                return this.commerce.request(endpoint, method, data, _objectSpread$1({
                    "X-Authorization": void 0,
                    Authorization: "Bearer ".concat(authToken)
                }, extraHeaders));
            }
        },
        {
            key: "_assertArgsProvided",
            value: function() {
                var customerId = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, token = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (null === customerId && !this.id()) throw new Error("A customer ID must be provided when customer is not logged in");
                if (null === token && !this.token()) throw new Error("A customer access token must be provided when customer is not logged in");
            }
        }
    ]), Customer;
}(), Merchants = function() {
    function Merchants(commerce) {
        _classCallCheck__default.default(this, Merchants), this.commerce = commerce;
    }
    return _createClass__default.default(Merchants, [
        {
            key: "about",
            value: function() {
                return this.commerce.request("merchants");
            }
        }
    ]), Merchants;
}(), Products = function() {
    function Products(commerce) {
        _classCallCheck__default.default(this, Products), this.commerce = commerce;
    }
    return _createClass__default.default(Products, [
        {
            key: "list",
            value: function() {
                var params = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return this.commerce.request("products", "get", params);
            }
        },
        {
            key: "retrieve",
            value: function(id) {
                var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return this.commerce.request("products/".concat(id), "get", data);
            }
        },
        {
            key: "getVariants",
            value: function(productId) {
                var params = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return this.commerce.request("products/".concat(productId, "/variants"), "get", params);
            }
        },
        {
            key: "getVariant",
            value: function(productId, variantId) {
                return this.commerce.request("products/".concat(productId, "/variants/").concat(variantId), "get");
            }
        }
    ]), Products;
}(), Services = function() {
    function Services(commerce) {
        _classCallCheck__default.default(this, Services), this.commerce = commerce;
    }
    return _createClass__default.default(Services, [
        {
            key: "localeListCountries",
            value: function() {
                return this.commerce.request("services/locale/countries");
            }
        },
        {
            key: "localeListShippingCountries",
            value: function(token) {
                return this.commerce.request("services/locale/".concat(token, "/countries"));
            }
        },
        {
            key: "localeListShippingSubdivisions",
            value: function(token, countryCode) {
                return this.commerce.request("services/locale/".concat(token, "/countries/").concat(countryCode, "/subdivisions"));
            }
        },
        {
            key: "localeListSubdivisions",
            value: function(countryCode) {
                return this.commerce.request("services/locale/".concat(countryCode, "/subdivisions"));
            }
        }
    ]), Services;
}(), Features = {
    Cart: Cart,
    Categories: Categories,
    Checkout: Checkout,
    Customer: Customer,
    Merchants: Merchants,
    Products: Products,
    Services: Services
}, consoleHelper = function() {
    var emoji, messages, color = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "black", a = arguments.length > 1 ? arguments[1] : void 0, b = arguments.length > 2 ? arguments[2] : void 0, c = arguments.length > 3 ? arguments[3] : void 0, isError = !1;
    switch(color){
        case "success":
            color = "#488f5a", emoji = "✅   ";
            break;
        case "info":
            color = "DodgerBlue", emoji = "";
            break;
        case "error":
            color = "rgba(244, 67, 54, 1)", "validation" === c.error.type || "unprocessable_entity" === c.error.type ? (emoji = "\uD83D\uDEAB Validation/missing fields", a = "") : emoji = "❌ HTTP ERROR ", isError = !0;
            break;
        case "warning":
            color = "rgba(208, 154, 35, 1)", emoji = "⚠️  ";
    }
    return !0 === isError ? (console.log("%c" + emoji + a, "color:" + color + ";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"), "object" === _typeof__default.default(c.error.errors) ? (messages = c.error.errors, void Object.keys(messages).forEach(function(key, index) {
        Object.values(messages[key]).forEach(function(value) {
            console.log("%c" + key + ": %c" + value, "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;", "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;");
        });
    })) : console.log("%c" + c.error.message, "color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")) : "object" === _typeof__default.default(color) ? (console.log("%c" + a, "color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"), void console.log(color)) : (console.log("%c" + emoji + a, "color:" + color + ";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"), void (b && console.log("%c" + b, "color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")));
}, debuggerOnNotice = function() {
    if ("undefined" != typeof window) console.log("%c\r\n \r\n                           Che         EcC\r\n                         c....c2    2c....:C\r\n                       c........c2   2c.....:C\r\n                     c............c2   2c.....:C\r\n                   c................c2   2c.....:C\r\n                 c....................c2   2c.....:C\r\n               c........................c2   2c.....:C\r\n             c............................c2   2c.....:C\r\n           c.......:E2  2c..................c2   2c.....:C\r\n         c........h  $$   2c..................c2   2c.....:C\r\n       c.........:C  $cc$  E....................c2   2c.....:C\r\n     c............h    $$  c......................c2   2c.....:C\r\n   c...............:E    E:.........................c2   2c.....:C\r\n   E............................:C c..................h2   2c...:C\r\n     E........................:C     c..................h2   2hC\r\n       E....................:C         c..................h2\r\n         E................:C             c................:C\r\n           E............:C                 c............:C\r\n             E........:C                     c........:C\r\n               E....:C                         c....:C\r\n                 EcC                             EcC\r\n \r\n \r\n \r\n", "font-family: Courier New, Courier, monospace; color: #788ba4; font-weight:bold; font-size: 11px;"), console.log("%cCommerce.js console debugger is on!  \uD83C\uDF89", "text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #488f5a; line-height:28px; font-size: 14px"), console.log("%c\uD83D\uDCAC   Need some help? Join our Slack channel - http://slack.commercejs.com \r\n", "text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px");
};
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys$2(source, !0).forEach(function(key) {
            _defineProperty__default.default(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(source).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var defaultEventCallback = function(e) {
    var _e = new CustomEvent("Commercejs.".concat(e), {
        bubbles: !1,
        cancelable: !1
    });
    return window.dispatchEvent(_e);
}, Commerce = function() {
    function Commerce(apiKey) {
        var debug = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], config = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (_classCallCheck__default.default(this, Commerce), this.options = _objectSpread$2(_objectSpread$2({
            version: "v1",
            url: "https://api.chec.io/",
            eventCallback: defaultEventCallback,
            disableStorage: !1,
            cartLifetime: 30,
            allowSecretKey: !1
        }, config), {}, {
            apiKey: apiKey,
            debug: debug
        }), "string" != typeof apiKey || 0 === apiKey.length) throw new Error("⚠️ Invalid public key given to Commerce.js client");
        if (!config.allowSecretKey && "sk_" === apiKey.toLowerCase().substring(0, 3)) throw new Error("Secret key provided. You must use a public key with Commerce.js, or use `allowSecretKey` in the config object.");
        if (this.options.cartLifetime <= 0 || this.options.cartLifetime > 30) throw new Error("cartLifetime configuration option must be between 1 and 30 days");
        this.storage = new Storage(this), this.cart = new Features.Cart(this), this.checkout = new Features.Checkout(this), this.customer = new Features.Customer(this), this.products = new Features.Products(this), this.services = new Features.Services(this), this.categories = new Features.Categories(this), this.merchants = new Features.Merchants(this), debug && (this.consoleHelper = consoleHelper, debuggerOnNotice());
    }
    return _createClass__default.default(Commerce, [
        {
            key: "error",
            value: function(response) {
                if (this.consoleHelper && this.options.debug) {
                    var innerResponse = response.response, type = "[".concat(innerResponse.status, "] Type: ").concat(innerResponse.statusText), msg = "string" == typeof innerResponse.data ? innerResponse.data : innerResponse.statusText;
                    return this.consoleHelper("error", type, msg, innerResponse.data);
                }
            }
        },
        {
            key: "request",
            value: function(endpoint) {
                var _this = this, method = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "get", data = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, extraHeaders = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, returnFullResponse = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], headers = {
                    "X-Authorization": this.options.apiKey,
                    "X-Chec-Agent": "commerce.js/v2",
                    "Content-Type": "application/json"
                }, params = "get" === method ? data : null, requestBody = "get" === method ? null : data, timeout = this.options.timeoutMs || 6e4, axiosConfig = this.options.axiosConfig || {}, baseUrl = this.options.url;
                "/" !== baseUrl.substring(baseUrl.length - 1) && (baseUrl += "/");
                var promise = axios__default.default(_objectSpread$2(_objectSpread$2({
                    url: endpoint,
                    method: method,
                    baseURL: "".concat(baseUrl).concat(this.options.version, "/"),
                    params: params,
                    data: requestBody,
                    timeout: timeout
                }, axiosConfig), {}, {
                    headers: _objectSpread$2(_objectSpread$2(_objectSpread$2({}, headers), axiosConfig.headers), extraHeaders)
                }));
                if (returnFullResponse) return promise;
                var eventCallback = this.options.eventCallback;
                return promise.then(function(response) {
                    if (_this.consoleHelper && _this.options.debug && "object" === _typeof__default.default(response.data._console) && _this.consoleHelper.apply(_this, _toConsumableArray__default.default(response.data._console)), "object" !== _typeof__default.default(response.data) || Array.isArray(response.data)) return response.data;
                    var _response$data = response.data, _event = _response$data._event, otherData = _objectWithoutProperties__default.default(_response$data, [
                        "_event"
                    ]);
                    return "string" == typeof _event && "function" == typeof eventCallback && eventCallback(_event), otherData;
                }).catch(function(error) {
                    if (_this.error(error), !error.response) throw error;
                    throw {
                        message: "Unsuccessful response (".concat(error.response.status, ": ").concat(error.response.statusText, ") received"),
                        statusCode: error.response.status,
                        statusText: error.response.statusText,
                        data: error.response.data,
                        originalError: error
                    };
                });
            }
        }
    ]), Commerce;
}();
module.exports = Commerce;

},{"e3dd3a4651dc0267":"lte4p","8467cfcc8542baba":"bCb5n","1a3f03a203bd610b":"jgQjt","3a53ef070188fd94":"4x6r7","c83862bfdaefdcad":"3nRml","ba7212682833714e":"2yzPp","90c7f21080d5346d":"5nQUq","e2fcd0cb31ec9325":"jxKg8","75abffe6d5fcbe3b":"jo6P5"}],"lte4p":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("8b0f2b08f6ccba06");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"8b0f2b08f6ccba06":"hvCCX"}],"hvCCX":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"bCb5n":[function(require,module,exports) {
var arrayWithoutHoles = require("61b7b77393e4868c");
var iterableToArray = require("38affde52dfed01b");
var unsupportedIterableToArray = require("d83ce0afe9d2178c");
var nonIterableSpread = require("14e0c65db7b54589");
function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"61b7b77393e4868c":"3Xl6v","38affde52dfed01b":"02b3Z","d83ce0afe9d2178c":"cFxnT","14e0c65db7b54589":"aejXd"}],"3Xl6v":[function(require,module,exports) {
var arrayLikeToArray = require("76ef7b86a7090747");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"76ef7b86a7090747":"2QyYi"}],"2QyYi":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"02b3Z":[function(require,module,exports) {
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"cFxnT":[function(require,module,exports) {
var arrayLikeToArray = require("cdc2fd91d3f7d77a");
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"cdc2fd91d3f7d77a":"2QyYi"}],"aejXd":[function(require,module,exports) {
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"jgQjt":[function(require,module,exports) {
function _typeof(obj) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"4x6r7":[function(require,module,exports) {
var toPropertyKey = require("b17d2562afb36080");
function _defineProperty(obj, key, value) {
    key = toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"b17d2562afb36080":"5P3X5"}],"5P3X5":[function(require,module,exports) {
var _typeof = require("e7d1e0cd248534f6")["default"];
var toPrimitive = require("61dab536072aa492");
function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"e7d1e0cd248534f6":"jgQjt","61dab536072aa492":"eJCHQ"}],"eJCHQ":[function(require,module,exports) {
var _typeof = require("a479f37879165c32")["default"];
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"a479f37879165c32":"jgQjt"}],"3nRml":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"2yzPp":[function(require,module,exports) {
var toPropertyKey = require("231a789a9217c3ad");
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"231a789a9217c3ad":"5P3X5"}],"5nQUq":[function(require,module,exports) {
// TODO(Babel 8): Remove this file.
var runtime = require("3631b0407454d688")();
module.exports = runtime;
// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{"3631b0407454d688":"cIfWd"}],"cIfWd":[function(require,module,exports) {
var _typeof = require("2778d38b9561294")["default"];
function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
        return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        }), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
            value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(innerFn, self, context) {
        var state = "suspendedStart";
        return function(method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
            }
            for(context.method = method, context.arg = arg;;){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(val) {
        var object = Object(val), keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function stop() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        "catch": function _catch(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"2778d38b9561294":"jgQjt"}],"jxKg8":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"jo6P5":[function(require,module,exports) {
module.exports = require("57d24d389b49f3fc");

},{"57d24d389b49f3fc":"63MyY"}],"63MyY":[function(require,module,exports) {
"use strict";
var utils = require("dc672b31c6bd76c2");
var bind = require("7f066151b13be615");
var Axios = require("d4db884ef223b2ee");
var mergeConfig = require("641df66e1b37c305");
var defaults = require("169b86fe8f43b83c");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = require("767f529100517b3");
axios.CancelToken = require("803193089b6bbf13");
axios.isCancel = require("6cc14e81ee43be7");
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require("536af00945cad75b");
// Expose isAxiosError
axios.isAxiosError = require("1fb5317a20612d3f");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"dc672b31c6bd76c2":"5By4s","7f066151b13be615":"haRQb","d4db884ef223b2ee":"cpqD8","641df66e1b37c305":"b85oP","169b86fe8f43b83c":"lTJJ4","767f529100517b3":"kjMy2","803193089b6bbf13":"45wzn","6cc14e81ee43be7":"a0VmF","536af00945cad75b":"dyQ8N","1fb5317a20612d3f":"eyiLq"}],"5By4s":[function(require,module,exports) {
"use strict";
var bind = require("557ca550b6e425c6");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"557ca550b6e425c6":"haRQb"}],"haRQb":[function(require,module,exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
"use strict";
var utils = require("72d3b87f319bea00");
var buildURL = require("a7e86037706e6bca");
var InterceptorManager = require("36246ab397652d19");
var dispatchRequest = require("34522adef4c576c8");
var mergeConfig = require("d968c14ec2bbdd4b");
var validator = require("4506b4b40a593b1e");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else config = config || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        forcedJSONParsing: validators.transitional(validators.boolean, "1.0.0"),
        clarifyTimeoutError: validators.transitional(validators.boolean, "1.0.0")
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"72d3b87f319bea00":"5By4s","a7e86037706e6bca":"3bwC2","36246ab397652d19":"1VRIM","34522adef4c576c8":"6sjJ6","d968c14ec2bbdd4b":"b85oP","4506b4b40a593b1e":"9vgkY"}],"3bwC2":[function(require,module,exports) {
"use strict";
var utils = require("24d888eb35cc6ccc");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if (utils.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

},{"24d888eb35cc6ccc":"5By4s"}],"1VRIM":[function(require,module,exports) {
"use strict";
var utils = require("147052c48c655826");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"147052c48c655826":"5By4s"}],"6sjJ6":[function(require,module,exports) {
"use strict";
var utils = require("891c9aa1848c30dd");
var transformData = require("88f9f83203eb6184");
var isCancel = require("c0456e9886bd1752");
var defaults = require("5fd14422162d53eb");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"891c9aa1848c30dd":"5By4s","88f9f83203eb6184":"eRqJY","c0456e9886bd1752":"a0VmF","5fd14422162d53eb":"lTJJ4"}],"eRqJY":[function(require,module,exports) {
"use strict";
var utils = require("d1a36c4edb01777c");
var defaults = require("74046ced82fece18");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"d1a36c4edb01777c":"5By4s","74046ced82fece18":"lTJJ4"}],"lTJJ4":[function(require,module,exports) {
var process = require("b63416781eef28fe");
"use strict";
var utils = require("b0ac42881f519a2f");
var normalizeHeaderName = require("a65ac018dd7b256a");
var enhanceError = require("e7d05823f983f553");
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = require("2bdba6aea11bbd5b");
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = require("69fdd981b1d77f50");
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw enhanceError(e, this, "E_JSON_PARSE");
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        "Accept": "application/json, text/plain, */*"
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"b63416781eef28fe":"d5jf4","b0ac42881f519a2f":"5By4s","a65ac018dd7b256a":"adBZo","e7d05823f983f553":"itUQr","2bdba6aea11bbd5b":"ldm57","69fdd981b1d77f50":"ldm57"}],"adBZo":[function(require,module,exports) {
"use strict";
var utils = require("ba27de90581f685c");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"ba27de90581f685c":"5By4s"}],"itUQr":[function(require,module,exports) {
"use strict";
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
};

},{}],"ldm57":[function(require,module,exports) {
"use strict";
var utils = require("39c37fbb88c91d02");
var settle = require("c219d4335ffe1452");
var cookies = require("c1cfbe2ec89d3470");
var buildURL = require("f955760fe9fb5013");
var buildFullPath = require("217d445863fe076c");
var parseHeaders = require("8538e9a8911550");
var isURLSameOrigin = require("d709edb2c1b1b3d5");
var createError = require("b52b5b1281c06dd");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = "timeout of " + config.timeout + "ms exceeded";
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, config.transitional && config.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken) // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) return;
            request.abort();
            reject(cancel);
            // Clean up request
            request = null;
        });
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"39c37fbb88c91d02":"5By4s","c219d4335ffe1452":"dD9aC","c1cfbe2ec89d3470":"4WJjt","f955760fe9fb5013":"3bwC2","217d445863fe076c":"1I5TW","8538e9a8911550":"kqDd5","d709edb2c1b1b3d5":"lxXtv","b52b5b1281c06dd":"5nVS9"}],"dD9aC":[function(require,module,exports) {
"use strict";
var createError = require("27a42c75f68805c7");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
};

},{"27a42c75f68805c7":"5nVS9"}],"5nVS9":[function(require,module,exports) {
"use strict";
var enhanceError = require("2b671ca9132bad4e");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"2b671ca9132bad4e":"itUQr"}],"4WJjt":[function(require,module,exports) {
"use strict";
var utils = require("462df926f94dacf3");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push("path=" + path);
            if (utils.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"462df926f94dacf3":"5By4s"}],"1I5TW":[function(require,module,exports) {
"use strict";
var isAbsoluteURL = require("a5e5b3876413bf3a");
var combineURLs = require("a78e691738ccb6bf");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"a5e5b3876413bf3a":"jD6NM","a78e691738ccb6bf":"brOWK"}],"jD6NM":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
"use strict";
var utils = require("809c16dec86f594b");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

},{"809c16dec86f594b":"5By4s"}],"lxXtv":[function(require,module,exports) {
"use strict";
var utils = require("6a2ba953a586faa6");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"6a2ba953a586faa6":"5By4s"}],"a0VmF":[function(require,module,exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
"use strict";
var utils = require("89f539abab30d7da");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = [
        "url",
        "method",
        "data"
    ];
    var mergeDeepPropertiesKeys = [
        "headers",
        "auth",
        "proxy",
        "params"
    ];
    var defaultToConfig2Keys = [
        "baseURL",
        "transformRequest",
        "transformResponse",
        "paramsSerializer",
        "timeout",
        "timeoutMessage",
        "withCredentials",
        "adapter",
        "responseType",
        "xsrfCookieName",
        "xsrfHeaderName",
        "onUploadProgress",
        "onDownloadProgress",
        "decompress",
        "maxContentLength",
        "maxBodyLength",
        "maxRedirects",
        "transport",
        "httpAgent",
        "httpsAgent",
        "cancelToken",
        "socketPath",
        "responseEncoding"
    ];
    var directMergeKeys = [
        "validateStatus"
    ];
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(undefined, config1[prop]);
    }
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(undefined, config2[prop]);
    });
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) config[prop] = getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) config[prop] = getMergedValue(undefined, config1[prop]);
    });
    utils.forEach(directMergeKeys, function merge(prop) {
        if (prop in config2) config[prop] = getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) config[prop] = getMergedValue(undefined, config1[prop]);
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, mergeDeepProperties);
    return config;
};

},{"89f539abab30d7da":"5By4s"}],"9vgkY":[function(require,module,exports) {
"use strict";
var pkg = require("4aa4755007a91b7b");
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
var currentVerArr = pkg.version.split(".");
/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */ function isOlderVersion(version, thanVersion) {
    var pkgVersionArr = thanVersion ? thanVersion.split(".") : currentVerArr;
    var destVer = version.split(".");
    for(var i = 0; i < 3; i++){
        if (pkgVersionArr[i] > destVer[i]) return true;
        else if (pkgVersionArr[i] < destVer[i]) return false;
    }
    return false;
}
/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    var isDeprecated = version && isOlderVersion(version);
    function formatMessage(opt, desc) {
        return "[Axios v" + pkg.version + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, " has been removed in " + version));
        if (isDeprecated && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new TypeError("options must be an object");
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError("option " + opt + " must be " + result);
            continue;
        }
        if (allowUnknown !== true) throw Error("Unknown option " + opt);
    }
}
module.exports = {
    isOlderVersion: isOlderVersion,
    assertOptions: assertOptions,
    validators: validators
};

},{"4aa4755007a91b7b":"8o6oT"}],"8o6oT":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

},{}],"kjMy2":[function(require,module,exports) {
"use strict";
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"45wzn":[function(require,module,exports) {
"use strict";
var Cancel = require("ca3503bf4855ab82");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"ca3503bf4855ab82":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
"use strict";
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};

},{}],"4fXSq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("../model");
class Checkout {
    checkoutId;
    data;
    countries = [];
    async generateCheckout(cartId, options) {
        try {
            // Getting checkout data
            const res = await (0, _model.commerce).checkout.generateToken(cartId, options);
            // Store checkout id and data
            this.checkoutId = res.id;
            this.data = res;
            // Return checkout data
            return res;
        } catch (err) {
            console.log(err);
        // throw new Error('Something went wrong. Please reload the page and try again!');
        }
    }
    async shippingCountries() {
        try {
            // Getting the shipping countries data
            const res = await (0, _model.commerce).services.localeListShippingCountries(this.checkoutId);
            // Store shipping countries
            for (const country of Object.keys(res.countries))this.countries.push(country);
            // Return shipping countries
            return res;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async countriesSubdivisions() {
        try {
            const subdivisions = [];
            // Loop over countries array and get subdivision for each country
            for (const country of this.countries){
                const resSubdivision = await (0, _model.commerce).services.localeListShippingSubdivisions(this.checkoutId, country);
                // Store country subdivision
                subdivisions.push({
                    country,
                    subdivision: resSubdivision
                });
            }
            // Return countries subdivisions
            return subdivisions;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async captureOrder(customerObj, shippingObj, shippingPrice, billingObj) {
        try {
            const productObj = this.data.line_items.reduce((obj, lineItem)=>{
                const variantGroups = lineItem.selected_options.reduce((obj, option)=>{
                    obj[option.group_id] = option.option_id;
                    return obj;
                }, {});
                obj[lineItem.id] = {
                    quantity: lineItem.quantity,
                    selected_options: variantGroups
                };
                return obj;
            }, {});
            const shippingMethod = this.data.shipping_methods.find((method)=>method.price.formatted_with_code === shippingPrice);
            const newOrder = {
                line_items: productObj,
                customer: customerObj,
                shipping: shippingObj,
                fulfillment: {
                    shipping_method: shippingMethod.id
                },
                billing: billingObj,
                payment: {
                    gateway: "test_gateway",
                    card: {
                        number: "4242424242424242",
                        expiry_month: "02",
                        expiry_year: "24",
                        cvc: "123",
                        postal_zip_code: "94107"
                    }
                }
            };
            const res = await (0, _model.commerce).checkout.capture(this.checkoutId, newOrder);
            return res;
        } catch (err) {
            console.log(err);
        // throw new Error(
        //   'Something went wrong. Please reload the page and try again!'
        // );
        }
    }
}
// commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
//   line_items: {
//     item_7RyWOwmK5nEa2V: {
//       quantity: 1,
//       selected_options: {
//         vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym'
//       }
//     }
//   },
//   customer: {
//     firstname: 'John',
//     lastname: 'Doe',
//     email: 'john.doe@example.com'
//   },
//   shipping: {
//     name: 'John Doe',
//     street: '123 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   fulfillment: {
//     shipping_method: 'ship_7RyWOwmK5nEa2V'
//   },
//   billing: {
//     name: 'John Doe',
//     street: '234 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   payment: {
//     gateway: 'stripe',
//     card: {
//       token: 'irh98298g49'
//     }
//   },
//   pay_what_you_want: '149.99'
// }).then((response) => console.log(response));
exports.default = new Checkout();

},{"../model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a3FGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("../model");
class Products {
    productsData;
    productdata;
    async products() {
        try {
            // Get products data
            const res = await (0, _model.commerce).products.list();
            // Store products data
            this.productsData = res.data;
            // Return products data
            return this.productsData;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async product(productId) {
        try {
            // Get product data based on ID
            const res = await (0, _model.commerce).products.retrieve(productId);
            // Store product data
            this.productdata = res;
            // Return product data
            return this.productdata;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
}
exports.default = new Products();

},{"../model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ON1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _model = require("../model");
class Cart {
    cartId;
    cartData;
    async addToCart(productId, options) {
        try {
            // Add to cart
            const res = await (0, _model.commerce).cart.add(productId, 1, options);
            // Store cart id and data
            this.cartId = res.id;
            this.cartData = res;
            return res;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async retrieveCart() {
        try {
            // Get cart data
            const res = await (0, _model.commerce).cart.retrieve();
            // Store cart id and data
            this.cartId = res.id;
            this.cartData = res;
            // Return cart data
            return res;
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async removeProductCart(productId) {
        try {
            return await (0, _model.commerce).cart.remove(productId);
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
    async updateCart(productId, quantity) {
        try {
            return await (0, _model.commerce).cart.update(productId, {
                quantity: quantity
            });
        } catch (err) {
            throw new Error("Something went wrong. Please reload the page and try again!");
        }
    }
}
exports.default = new Cart();

},{"../model":"Y4A21","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eH5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HeaderView {
    parentEl = document.querySelector(".hero");
    stickyHeader() {
        if (!this.parentEl) return;
        const headerEl = this.parentEl.querySelector(".header");
        const headerHeight = headerEl.getBoundingClientRect().height;
        const sticky = function(entries) {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                headerEl.classList.add("header-fixed");
                headerEl.classList.add("header-white");
            } else {
                headerEl.classList.remove("header-fixed");
                headerEl.classList.remove("header-white");
            }
        };
        const headerObs = new IntersectionObserver(sticky, {
            root: null,
            threshold: 0,
            rootMargin: `-${headerHeight}px`
        });
        headerObs.observe(this.parentEl);
    }
}
exports.default = new HeaderView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yIFg6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class copyrightView {
    parentEl = document.querySelector(".footer__copyright-year");
    renderCopyrightYear() {
        const now = new Date();
        this.parentEl.textContent = now.getFullYear();
    }
}
exports.default = new copyrightView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eU2kp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class categoriesView {
    parentEl = document.querySelector(".categories");
    parentBtnsEl = document.querySelector(".categories__btns");
    renderMarkup(data) {
        if (!this.parentEl && !this.parentBtnsEl) return;
        if (this.parentEl) this.parentEl.innerHTML = "";
        data.forEach((data)=>{
            // Render categories in homepage
            this.parentEl && this.#generateMarkup(data);
            // Render categories bnts in products page
            this.parentBtnsEl && this.#generateBtnsMarkup(data);
        });
    }
    #generateMarkup(data) {
        const markup = `
        <div class="category">
            <img
            src="${data.assets[0].url}"
            alt="${data.name}"
            class="category__img"
            />
            <h3 class="heading-tertiary category__title">${data.name}</h3>
        </div>
    `;
        this.parentEl.insertAdjacentHTML("beforeend", markup);
    }
    #generateBtnsMarkup(data1) {
        const markup = `
      <button class="btn btn--small">${data1.name}</button>
    `;
        this.parentBtnsEl.insertAdjacentHTML("beforeend", markup);
    }
    renderCategoryLoading() {
        if (!this.parentEl) return;
        for(let i = 1; i <= 5; i++){
            const markup = `
        <!-- Category i -->
        <div class="products__item product loading">
          <div
            class="product__img-box loading--img loading--skeleton mb-md"
          ></div>
        </div>
      `;
            this.parentEl.insertAdjacentHTML("beforeend", markup);
        }
    }
    handleCategoryName(handler) {
        if (!this.parentEl) return;
        this.parentEl.addEventListener("click", function(e) {
            // Send category name
            handler(e.target.closest(".category").querySelector(".category__title").textContent.toLowerCase());
        });
    }
    highlightCategoryName(categoryName) {
        if (!this.parentBtnsEl) return;
        this.parentBtnsEl.querySelectorAll(".btn").forEach((btn)=>{
            // Remove active state
            btn.classList.remove("btn--active");
            // Add active state to the current category name
            btn.textContent === categoryName.replace(categoryName[0], categoryName[0].toUpperCase()) && categoryName.replace(categoryName[0], categoryName[0].toUpperCase()) && btn.classList.add("btn--active");
        });
        localStorage.removeItem("category-name");
    }
    renderHandlerBtns(handler) {
        if (!this.parentBtnsEl) return;
        // Event handler for btns
        this.parentBtnsEl.addEventListener("click", function(e) {
            const targetBtn = e.target.closest(".btn");
            if (!targetBtn && targetBtn.classList.contains("btn--active")) return;
            if (!targetBtn.classList.contains("btn--active")) {
                // Removing the active state from the previous btn
                [
                    ...this.children
                ].find((btn)=>btn.classList.contains("btn--active")).classList.remove("btn--active");
                // Add the active state to the target state
                targetBtn.classList.add("btn--active");
            }
            // Return the current category name
            handler(targetBtn.textContent.toLowerCase());
        });
    }
}
exports.default = new categoriesView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kefoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class productsView {
    parentEl = document.querySelectorAll(".products");
    renderMarkup(data) {
        this.parentEl.forEach((el)=>{
            //   console.log(el.parentElement.classList.contains('section__trends'));
            if (el.parentElement.classList.contains("section__trends")) {
                // Clear the interface
                el.innerHTML = "";
                data.slice(-5).forEach((data)=>{
                    this.#generateMarkup(el, data);
                });
            }
            if (el.parentElement.classList.contains("section__new")) {
                // Clear the interface
                el.innerHTML = "";
                data.slice(0, 5).forEach((data)=>{
                    this.#generateMarkup(el, data);
                });
            }
            if (el.parentElement.classList.contains("section__products")) {
                // Clear the interface
                el.innerHTML = "";
                data.forEach((data)=>{
                    this.#generateMarkup(el, data);
                });
            }
        });
    }
    renderRelatedProducts(data) {
        this.parentEl.forEach((el)=>{
            if (el.parentElement.classList.contains("section__related-products")) {
                // Clear the interface
                el.innerHTML = "";
                data.related_products.length <= 4 ? data.related_products.forEach((data)=>this.#generateMarkup(el, data)) : data.related_products.slice(0, 5).forEach((data)=>this.#generateMarkup(el, data));
            }
        });
    }
    renderProductLoading(parentEl, num) {
        if (!document.querySelector(parentEl)) return;
        for(let i = 1; i <= num; i++){
            const markup = `
        <!-- Product ${i} -->
          <div class="products__item product loading">
            <div
              class="product__img-box loading--img loading--skeleton mb-md"
            ></div>
            <div class="product__details">
              <div
                class="product__title loading--title loading--skeleton mb-sm"
              ></div>
              <div
                class="product__price loading--price loading--skeleton"
              ></div>
            </div>
          </div>
      `;
            document.querySelector(parentEl).querySelector(".products").insertAdjacentHTML("beforeend", markup);
        }
    }
    #generateMarkup(el, data) {
        const markup = `
        <article class="products__item product">
            <div class="product__img-box mb-md">
            <img
                src="${data.image.url}"
                alt="${data.name}"
                class="product__img"
            />
            </div>
            <div class="product__details">
            <h4 class="heading-forty product__title mb-sm">${data.name}</h4>
            <p class="product__price">${data.price.formatted_with_code}</p>
            </div>
        </article>
    `;
        el.insertAdjacentHTML("beforeend", markup);
    }
    getProductName(handler) {
        if (!this.parentEl) return;
        [
            ...this.parentEl
        ].forEach((el)=>{
            el.addEventListener("click", function(e) {
                const targetProduct = e.target.closest(".product");
                // return product name
                handler(targetProduct?.querySelector(".product__title").textContent);
            });
        });
    // this.parentEl.addEventListener('click', function (e) {
    // });
    }
}
exports.default = new productsView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wN6N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regeneratorRuntime = require("regenerator-runtime");
class productView {
    parentEl = document.querySelector(".product-item");
    _data;
    renderMarkup(data) {
        if (!this.parentEl) return;
        this._data = data;
        // Render the product details
        this.parentEl.innerHTML = "";
        this.#generateMarkup(data);
        // Render Shipping details
        this.#shippingDetails();
        // Render image carrousel functionality
        this.#createImageSlide();
        // Render the selected options
        this.#optionsSelected();
    }
    #generateMarkup(data) {
        const markup = `
        <div class="product-item__img-box mb-md">
            ${data.assets.map((img)=>`<img src="${img.url}" alt="${data.name}" class="product-item__img" />`).join("")}
            <div class="product-item__icons">
            <button class="product-item__icon left"><i class="ri-arrow-left-s-line product-item__icon--left"></i></button>
            <button class="product-item__icon right"><i class="ri-arrow-right-s-line product-item__icon--right"></i></button>
            </div>
        </div>

        <!-- Product details -->
        <div class="product-item__details product__details">
            <h4 class="heading-forty product-item__title mb-xsm">${data.name}</h4>
            <a href="#" class="nav__link product__category mb-sm"
            >&mdash; ${data.categories[0].name}</a
            >
            <p class="product__price mb-md">${data.price.formatted_with_code}</p>

            <!-- Product colors -->
            <div class="mb-md">
            <h4 class="heading-forty mb-sm">Select color</h4>
            <div class="product__config product__colors">
                ${data.variant_groups.find((variant)=>variant.name === "Color").options.map((color)=>`<p class="product__option product__color">${color.name}</p>`).join("")}
            </div>
            </div>

            <!-- Product size -->
            <div class="mb-md">
            <h4 class="heading-forty mb-sm">Select size</h4>
            <div class="product__config product__sizes mb-md">
                ${data.variant_groups.find((variant)=>variant.name === "Size").options.map((size)=>`<p class="product__option product__size">${size.name}</p>`).join("")}
            </div>
            </div>

            <!-- Product btn: ADD TO BAG -->
            <button class="btn btn--dark btn--big mb-xsm"
            >Add to bag</button>
            <p class="product__error textCenter hidden mb-md">Please select <span class="error-type"></span>.</p>

            <!-- Product description -->
            <div class="mb-xlg">
            <h3 class="heading-tertiary mb-sm">Product description</h3>
            <p class="product__desc">${data.description.slice(3, -4)}</p>
            </div>

            <!-- <div class="product__shipping product__shipping--active"> -->
            <div class="product__shipping"> 
            <h3 class="heading-tertiary product__shipping--title mb-sm">
                Shipping & returns
                <span><i class="ri-arrow-down-s-line"></i></span>
            </h3>
            <p class="product__shipping--details">
                Free standard shipping and free 60-day returns for Nike Members.
            </p>
            </div>
        </div>
    `;
        this.parentEl.insertAdjacentHTML("beforeend", markup);
    }
    renderProductLoading() {
        const markup = `
      <div class="product-item__img-box mb-md">
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
        <div class="loading--img-big loading--skeleton" /></div>
      </div>

      <!-- Product details -->
      <div class="product-item__details product__details">
          <div class="product-item__title loading--title loading--skeleton mb-xsm"></div>
          <div class="product__category loading--category loading--skeleton mb-sm"></div>
          <div class="product__price loading--price loading--skeleton mb-md"></div>

          <!-- Product colors -->
          <div class="mb-md">
          <h4 class="heading-forty mb-sm">Select color</h4>
          <div class="product__config product__colors">
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
          </div>
          </div>

          <!-- Product size -->
          <div class="mb-md">
          <h4 class="heading-forty mb-sm">Select size</h4>
          <div class="product__config product__sizes mb-md">
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
            <p class="loading--option loading--skeleton"></p>
          </div>
          </div>

          <!-- Product btn: ADD TO BAG -->
          <button class="btn btn--dark btn--big mb-xsm"
          >Add to bag</button>
          <p class="product__error textCenter hidden mb-md">Please select <span class="error-type"></span>.</p>

          <!-- Product description -->
          <div class="mb-xlg">
          <h3 class="heading-tertiary mb-sm">Product description</h3>
            <div class="loading--description">
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
              <div class="loading--description-item loading--skeleton"></div>
            </div>
          </div>

          <!-- <div class="product__shipping product__shipping--active"> -->
          <div class="product__shipping"> 
          <h3 class="heading-tertiary product__shipping--title mb-sm">
              Shipping & returns
              <span><i class="ri-arrow-down-s-line"></i></span>
          </h3>
          <p class="product__shipping--details">
              Free standard shipping and free 60-day returns for Nike Members.
          </p>
          </div>
      </div>
    `;
        this.parentEl.insertAdjacentHTML("beforeend", markup);
    }
    #createImageSlide() {
        // Select the media-query at 37.5em
        const mediaQuery = window.matchMedia("(max-width: 37.5em)");
        if (!mediaQuery.matches) return;
        // Check if width matches the mediaQuery variable and render image slide
        this.#slideFunctionality();
    }
    #slideFunctionality() {
        const imgs = [
            ...this.parentEl.querySelectorAll(".product-item__img")
        ];
        const btnLeft = this.parentEl.querySelector(".left");
        const btnRight = this.parentEl.querySelector(".right");
        let curSlide = 0;
        const maxSlide = imgs.length;
        imgs.forEach((img, i)=>{
            img.style.transform = `translateX(${100 * i}%)`;
        });
        // Functions
        const gotToSlide = function(slide) {
            imgs.forEach((img, i)=>{
                img.style.transform = `translateX(${100 * (i - slide)}%)`;
            });
        };
        const nextSlide = function() {
            if (curSlide === maxSlide - 1) curSlide = 0;
            else curSlide++;
            gotToSlide(curSlide);
        };
        const prevSlide = function() {
            if (curSlide === 0) curSlide = maxSlide - 1;
            else curSlide--;
            gotToSlide(curSlide);
        };
        const init = function() {
            gotToSlide(0);
        };
        init();
        btnRight.addEventListener("click", nextSlide);
        btnLeft.addEventListener("click", prevSlide);
        document.addEventListener("keydown", function(e) {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        });
    }
    #shippingDetails() {
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".product__shipping")) return;
            e.target.closest(".product__shipping").classList.toggle("product__shipping--active");
        });
    }
    #optionsSelected() {
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".product__option")) // Remove the selected class from all the elements
            [
                ...this.querySelectorAll(`.product__option`)
            ].forEach((el)=>el.classList.remove("product__selected"));
            if (!e.target.classList.contains("product__selected")) [
                ...this.querySelectorAll(`.product__${e.target.classList.contains("product__color") ? "color" : "size"}`)
            ].forEach((el)=>el.classList.remove("product__selected"));
            if (e.target.closest(".product__option")) // Add the selected class to selected element
            e.target.classList.add("product__selected");
        });
    }
    handleCategoryName(handler) {
        if (!this.parentEl) return;
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".product__category")) return;
            // Send category name
            handler(e.target.closest(".product__category").textContent.toLowerCase().slice(2));
        });
    }
    addToBagHandler(handler) {
        if (!this.parentEl) return;
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".btn")) return;
            const errorEl = this.querySelector(".error-type");
            const colorOptions = [
                ...this.querySelectorAll(".product__color")
            ];
            const sizeOptions = [
                ...this.querySelectorAll(".product__size")
            ];
            // Check functionality
            errorEl.parentElement.classList.remove("hidden");
            // Check if color or size NOT selected
            if (!colorOptions.some((el)=>el.classList.contains("product__selected")) || !sizeOptions.some((el)=>el.classList.contains("product__selected"))) errorEl.textContent = `${!colorOptions.some((el)=>el.classList.contains("product__selected")) ? "color" : "size"}`;
            // Check if both color and size NOT selected
            if (!colorOptions.some((el)=>el.classList.contains("product__selected")) && !sizeOptions.some((el)=>el.classList.contains("product__selected"))) errorEl.textContent = "color and size";
            // Check if both color and size selected
            if (colorOptions.some((el)=>el.classList.contains("product__selected")) && sizeOptions.some((el)=>el.classList.contains("product__selected")) && !errorEl.parentElement.classList.contains("hidden")) {
                errorEl.parentElement.classList.add("hidden");
                // Send data to controller
                handler(colorOptions.find((el)=>el.classList.contains("product__selected")).textContent, sizeOptions.find((el)=>el.classList.contains("product__selected")).textContent);
            }
        });
    }
}
exports.default = new productView();

},{"regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dXNgZ":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next mehtod, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"glzQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class cartView {
    // parentEl = document.querySelector('.cart');
    btnCartOpen = document.querySelector(".cart__btn--open");
    renderCart(data) {
        if (!this.btnCartOpen) return;
        // Render cart
        this.#generateOverlayMarkup();
        this.#generateCartMarkup(data);
        // Open close cart functionality
        this.#openCloseCart();
    }
    #generateCartMarkup(data) {
        const markup = `
        <aside class="cart cart__hidden">
            <!-- Cart title -->
            <div class="cart__title">
                <h3 class="heading-tertiary">Cart</h3>
                <button class="cart__icon cart__btn--close">
                    <i class="ri-close-line"></i>
                </button>
            </div>

           <!-- Cart product -->
           <div class="cart__product-container">
           ${!data ? `<p>Your cart is empty</p>` : this.updateCart(data)}
            </div>

            <!-- Cart Btns -->
            <div class="cart__btns btns">
                <button class="btn btn--continue-shopping">Continue shopping</button>
                <button class="btn btn--dark btn--checkout">Checkout</button>
            </div>
        </aside>
    `;
        document.body.insertAdjacentHTML("beforeend", markup);
    }
    updateCart(data) {
        if (!data) return;
        document.body.querySelector(".cart__product-container").innerHTML = `${data.line_items.length === 0 ? `<p>Your cart is empty</p>` : data.line_items.map((product)=>`<div class="cart__product">
           <img
             src="${product.image.url}"
             alt="${product.name}"
             class="cart__img"
           />
           <div class="cart__details">
             <div>
               <h4 class="heading-forty title">${product.name}</h4>
               <p class="cart__price">${product.price.formatted_with_code}</p>
             </div>
             <div>
               <div class="cart__quantity">
                 <button class="cart__icon subtract"><i class="ri-subtract-line"></i></button>
                 <p class="cart__quantity-number quantity">${product.quantity}</p>
                 <button class="cart__icon add"><i class="ri-add-line"></i></button>
               </div>
               <button class="cart__remove">remove</button>
             </div>
           </div>
         </div>`).join("")}`;
        this.#updateCartNumber(data);
    }
    #updateCartNumber(data1) {
        document.body.querySelector(".cart__item").textContent = data1.line_items.length;
    }
    #generateOverlayMarkup() {
        const markup = `
        <div class="overlay overlay__hidden"></div>
    `;
        document.body.insertAdjacentHTML("beforeend", markup);
    }
    #openCloseCart() {
        document.body.addEventListener("click", function(e) {
            const overlayEl = this.querySelector(".overlay");
            const cartEl = this.querySelector(".cart");
            // Cart open
            if (e.target.closest(".cart__btn--open")) {
                overlayEl.classList.remove("overlay__hidden");
                cartEl.classList.remove("cart__hidden");
            } else if (e.target.closest(".cart__btn--close") || e.target.closest(".overlay") || e.target.closest(".btn--continue-shopping")) {
                overlayEl.classList.add("overlay__hidden");
                cartEl.classList.add("cart__hidden");
            } else return;
        });
    }
    removeProduct(handler) {
        document.body.addEventListener("click", function(e) {
            if (!e.target.closest(".cart__remove")) return;
            handler(e.target.parentElement.parentElement.querySelector(".title").textContent);
        });
    }
    updateQuantity(handler) {
        document.body.addEventListener("click", function(e) {
            if (!e.target.closest(".cart__icon")) return;
            const quantityEl = e.target.closest(".cart__icon").parentElement.querySelector(".quantity");
            if (!quantityEl) return;
            if (e.target.closest(".subtract")) {
                // If quantity is 1 return immediately and NOT update the cart
                if (+quantityEl.textContent === 1) return;
                // If NOT decrease the quantity then update the cart
                +quantityEl.textContent > 1 && quantityEl.textContent--;
                quantityEl.textContent = +quantityEl.textContent;
            }
            if (e.target.closest(".add")) {
                quantityEl.textContent++;
                quantityEl.textContent = +quantityEl.textContent;
            }
            handler(e.target.closest(".cart__details").querySelector(".title").textContent, +quantityEl.textContent);
        });
    }
    goToCheckout(handler) {
        document.body.addEventListener("click", function(e) {
            if (!e.target.closest(".btn--checkout") || !this.querySelector(".cart__product")) return;
            handler();
        });
    }
}
exports.default = new cartView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eW7tq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regeneratorRuntime = require("regenerator-runtime");
class formView {
    parentEl = document.querySelector(".checkout");
    renderProductOrder(data) {
        if (!this.parentEl) return;
        // Render ordered product
        this.#generateMarkup(data);
        // Render prices
        this.#renderPrices(data);
        this.#renderShippingPrice(data);
    }
    #generateMarkup(data) {
        const markup = `${data.line_items.map((p)=>{
            return `
        <div class="checkout__product">
          <img
            src="${p.image.url}"
            alt="${p.name}"
            class="checkout__product--img"
          />

          <div class="checkout__details">
            <div>
              <h4 class="heading-forty">${p.name}</h4>
              <p class="product__price">${p.price.formatted_with_code}</p>
            </div>
            ${p.selected_options.map((item)=>{
                return `
                <p class="checkout__details--info">${item.group_name}: ${item.option_name}</p>
              `;
            }).join("")}
            <p class="checkout__details--info">Quantity: ${p.quantity}</p>
          </div>
        </div>
      `;
        }).join("")}
    `;
        this.parentEl.querySelector(".checkout__product-container").innerHTML = "";
        this.parentEl.querySelector(".checkout__product-container").insertAdjacentHTML("afterbegin", markup);
    }
    renderProductLoading() {
        const markupProduct = `
      <div class="checkout__product">
        <div class="checkout__product--img loading--img-small loading--skeleton"></div>

        <div class="loading__checkout--details">        
            <div class="loading--title loading--skeleton"></div>
            <div class="loading--price loading--skeleton"></div>
            <div class="loading--price loading--skeleton"></div>
            <div class="loading--price loading--skeleton"></div>
        </div>
      </div>
    `;
        // Render the product markup
        this.parentEl.querySelector(".checkout__product-container").insertAdjacentHTML("beforeend", markupProduct);
        // Render the prices
        this.parentEl.querySelector(".subtotal-price").classList.add("loading--title", "loading--skeleton");
        this.parentEl.querySelector(".total-price").classList.add("loading--title", "loading--skeleton");
    }
    #renderPrices(data1) {
        // Remove the loading classes
        this.parentEl.querySelector(".subtotal-price").classList.remove("loading--title", "loading--skeleton");
        this.parentEl.querySelector(".total-price").classList.remove("loading--title", "loading--skeleton");
        const subtotal = data1.subtotal.formatted_with_code;
        const total = data1.subtotal.formatted_with_code;
        this.parentEl.querySelector(".subtotal-price").textContent = subtotal;
        this.parentEl.querySelector(".total-price").textContent = total;
    }
    renderShippingCountries(data) {
        for (const key of Object.keys(data.countries))this.parentEl.querySelector(".countries").insertAdjacentHTML("beforeend", `<option value="${key}" class="countries__option">${key}</option>`);
    }
    renderSubdivisions(data) {
        this.parentEl.addEventListener("change", function(e) {
            if (!e.target.closest(".countries") || !e.target.closest(".countries").value) return;
            // Get subdivisions of the selected country
            const countrySub = data.find((sub)=>sub.country === e.target.closest(".countries").value);
            // Clear options
            this.querySelector(".cities").innerHTML = `<option value="">Please select a city</option>`;
            // Render subdivions based on the selected country
            for (const [key, option] of Object.entries(countrySub.subdivision.subdivisions))this.querySelector(".cities").insertAdjacentHTML("beforeend", `<option value="${key}" class="cities__option">${option}</option>`);
        });
    }
    #renderShippingPrice(data2) {
        this.parentEl.addEventListener("change", function(e) {
            if (!e.target.closest(".countries")) return;
            // If NO country selected
            if (!e.target.closest(".countries").value) {
                this.querySelector(".shipping-price").innerHTML = "No country selected";
                this.querySelector(".total-price").innerHTML = data2.total.formatted_with_code;
                return;
            }
            // Get shipping country information
            const shippingCountry = data2.shipping_methods.find((option)=>option.description === e.target.closest(".countries").value);
            // Render shipping cost
            this.querySelector(".shipping-price").innerHTML = shippingCountry.price.formatted_with_code;
            // Render total of product price and shipping
            this.querySelector(".total-price").innerHTML = `${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "DZD"
            }).format(shippingCountry.price.raw + data2.subtotal.raw).replace("DZD", "").trim()} DZD`;
        });
    }
    #formInvalid() {
        if (!this.parentEl) return;
        // Event Hendler for the button
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".btn--order")) return;
            const inputsEl = [
                ...this.querySelectorAll(".form__input")
            ];
            inputsEl.forEach((input)=>{
                if (input.value === "") {
                    input.parentElement.classList.add("form__invalid");
                    this.querySelector(".product__error").classList.remove("hidden");
                } else {
                    input.parentElement.classList.remove("form__invalid");
                    this.querySelector(".product__error").classList.add("hidden");
                }
            });
        });
    }
    captureOrder(handler) {
        if (!this.parentEl) return;
        this.#formInvalid();
        this.parentEl.addEventListener("click", function(e) {
            if (!e.target.closest(".btn--order")) return;
            const inputsEl = [
                ...this.querySelectorAll(".form__input")
            ];
            if (inputsEl.some((input)=>input.value === "")) return;
            handler({
                firstname: this.querySelector("#first-name").value,
                lastname: this.querySelector("#last-name").value,
                email: this.querySelector("#email").value
            }, {
                name: `${this.querySelector("#first-name").value} ${this.querySelector("#last-name").value}`,
                street: this.querySelector("#address").value,
                town_city: this.querySelector("#province").value,
                county_state: this.querySelector("#city").value,
                country: this.querySelector("#country").value,
                postal_zip_code: this.querySelector("#post-code").value
            }, this.querySelector(".shipping-price").textContent, {
                name: `${this.querySelector("#first-name").value} ${this.querySelector("#last-name").value}`,
                street: this.querySelector("#address").value,
                town_city: this.querySelector("#province").value,
                county_state: this.querySelector("#city").value,
                country: this.querySelector("#country").value,
                postal_zip_code: this.querySelector("#post-code").value
            });
            // Remove hidden class for overlay element
            document.body.querySelector(".overlay").classList.remove("overlay__hidden");
            // Render order animation
            document.body.querySelector(".loading-box").classList.remove("preloader__hidden");
        });
    }
    renderOrderId(data) {
        if (!this.parentEl) return;
        // Remove order animation
        document.querySelector(".loading-box").classList.add("preloader__hidden");
        // Render confirmation component
        document.body.querySelector(".success").classList.remove("success__hidden");
        // Render order ID
        document.body.querySelector(".success__order-id").textContent = data.id;
    }
    handleBackToHome(handler) {
        if (!this.parentEl) return;
        document.body.querySelector(".success__btn").addEventListener("click", function() {
            handler();
        });
    }
}
// commerce.checkout.capture('chkt_959gvxcZ6lnJ7', {
//   line_items: {
//     item_7RyWOwmK5nEa2V: {
//       quantity: 1,
//       selected_options: {
//         vgrp_p6dP5g0M4ln7kA: 'optn_DeN1ql93doz3ym'
//       }
//     }
//   },
//   customer: {
//     firstname: 'John',
//     lastname: 'Doe',
//     email: 'john.doe@example.com'
//   },
//   shipping: {
//     name: 'John Doe',
//     street: '123 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   fulfillment: {
//     shipping_method: 'ship_7RyWOwmK5nEa2V'
//   },
//   billing: {
//     name: 'John Doe',
//     street: '234 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   payment: {
//     gateway: 'stripe',
//     card: {
//       token: 'irh98298g49'
//     }
//   },
//   pay_what_you_want: '149.99'
// }).then((response) => console.log(response));
exports.default = new formView();

},{"regenerator-runtime":"dXNgZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequire019f")

//# sourceMappingURL=index.e37f48ea.js.map
