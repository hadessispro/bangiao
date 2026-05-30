
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.iRHCMwIP.js","/cdn/shopifycloud/checkout-web/assets/c1/app.fFiS3Y3c.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CnnNClxR.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.mYAmvDXN.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-is-shop-pay-active.BbYByhHu.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload.xoiLG9ye.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.C_9SDN8i.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.CfpDpN7B.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode.CHVrhqNI.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors.xutTvVJC.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.rKCz_MMB.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.CTLGG4oZ.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.DGJWhfl_.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.DpQ2Nz-2.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.CQsttGaX.js","/cdn/shopifycloud/checkout-web/assets/c1/types-index.CSxFMtQJ.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.C72jX7Qr.js","/cdn/shopifycloud/checkout-web/assets/c1/page-Information.BareJTLk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DgTYPpDm.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.2UH3EDLi.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.C5rVKH4R.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.DoS8qMwf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUiComponentsColorContrast.CpoPL6AR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.DHWY9er8.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.8260poCg.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.poLXM_sl.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.BzY35ZXa.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.6Pd5EzTi.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.FEwIHOXH.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.CRn7Zkrd.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.COK2R6c9.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.DHV2nFyk.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DQm2XSFQ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/is-shop-pay-active.Bz45BrAn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.CO286Meg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.DgE9h97U.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.CRDql5Io.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.Ho_Bkwiw.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/lato/lato_n4.c3b93d431f0091c8be23185e15c9d1fee1e971c5.woff2?h1=cGFpbnQtYm94LmNvbQ&hmac=3294e44900725921f388ed07a01dce7f550700653cf9a1cce9bcfa1df5d3e7c9","https://fonts.shopifycdn.com/lato/lato_n7.900f219bc7337bc57a7a2151983f0a4a4d9d5dcf.woff2?h1=cGFpbnQtYm94LmNvbQ&hmac=e152fbcbf2e5b06d2bec26c9c9d95ce31fa8d0c7581be2ef1ea0c6ed9ca8df1b","https://fonts.shopifycdn.com/pt_serif/ptserif_n4.5dc26655329dc6264a046fc444eea109ea514d3d.woff2?h1=cGFpbnQtYm94LmNvbQ&hmac=8472c98ae52cb8ff7f63cc01472c468e349c1b08485b10f6696584b7329cc1a9","https://fonts.shopifycdn.com/pt_serif/ptserif_n7.05b01f581be1e3c8aaf548f8c90656344869b497.woff2?h1=cGFpbnQtYm94LmNvbQ&hmac=3ae54ecbe8f7df697b4610e433335614925d5ecaee726da9f9ce6aa3c8f50ea9"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0086/4865/4895/files/paintbox-log_x320.png?v=1613186887"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  