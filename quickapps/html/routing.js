!function () {
  "use strict";
  var a = navigator.userAgent.toLowerCase();
  function i(e, n) {
    for (var t in n = n || {}) e[t] = n[t];
    return e;
  }
  function r(e, n, t) {
    var o = document.createElement("iframe"), a = "hwfastapp://" + e;
    n && (a = a + "/" + n), t && 0 < Object.keys(t).length && (a = a + "?" + (t = Object.keys(t).map(function (e) {
      return e + "=" + encodeURIComponent(t[e]);
    }).join("&"))), o.src = a, document.body.appendChild(o), o.style.display = "none";
  }
  function e(e) {
    var n = {available: new Function};
    "function" == typeof e ? n.available = e : "object" == typeof e && i(n, e);
    var t = false, o = n.available;
    n.available = function () {
      t || (t = true, o.apply(null, arguments));
    }, n.available.call(null, true);
  }
  function n(e, n, t) {
    var o;
    !function () {
      var e = navigator.userAgent;
      if (e) {
        if (0 <= (e = e.toLowerCase()).indexOf("huaweibrowser")) return;
        var n = e.indexOf("android"), t = e.indexOf("huawei");
        if (t < 0 && (t = e.indexOf("honor")), 0 <= n && 0 <= t) {
          var o = e.slice(n + 8, n + 9);
          if (8 <= o) return 1;
          if ((o = e.slice(n + 8, n + 10)) && o.indexOf(";") < 0 && 10 <= o) return 1;
        }
      }
    }() ? r(e, n, t) : (function (e, n, t) {
      var o, a = "", i = (i = "http://fastappjump-drcn.hispace.hicloud.com/fastapprouter/") + (new Date).getTime() + "/";
      n && 0 === n.indexOf("/") && (n = 1 === n.length ? "" : n.substr(1)), e && (i = i + "?i=" + e), n && (i = i + "&p=" + n), function (e) {
        if (!e) return 1;
        var n = void 0;
        for (n in e) return;
        return 1;
      }(t) ? -1 < (o = window.location.search).indexOf("?") && (a = o.substr(1)) : a = Object.keys(t).map(function (e) {
        return e + "=" + encodeURIComponent(t[e]);
      }).join("&"), "" !== a && (i = i + "&a=" + encodeURIComponent(a));
      var r = document.createElement("img");
      r.src = i, r.style.width = "1px", r.style.height = "1px", r.style.display = "none", document.body.appendChild(r);
    }(e, n, t = t || {}), function () {
      var e = navigator.userAgent;
      if (e) {
        var n = (e = e.toLowerCase()).indexOf("android"), t = e.indexOf("huawei");
        if (t < 0 && (t = e.indexOf("honor")), 0 <= n && 0 <= t) {
          var o = e.slice(n + 8, n + 9);
          if (9 <= o) return;
          if ((o = e.slice(n + 8, n + 10)) && o.indexOf(";") < 0 && 10 <= o) return;
        }
      }
      return 1;
    }() && (o = new Date, setTimeout(function () {
      new Date - o <= 830 && r(e, n, t);
    }, 800)));
  }
  var d = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), l = new Uint8Array(16);
  for (var s = [], t = 0; t < 256; ++t) s.push((t + 256).toString(16).substr(1));
  function o(e, n, t) {
    "string" == typeof e && (n = "binary" === e ? new Uint8Array(16) : null, e = null);
    var o, a, i, r = (e = e || {}).random || (e.rng || function () {
      if (!d) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return d(l);
    })();
    if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, n) {
      for (var c = t || 0, u = 0; u < 16; ++u) n[c + u] = r[u];
      return n;
    }
    return (s[(o = r)[(i = a || 0) + 0]] + s[o[i + 1]] + s[o[i + 2]] + s[o[i + 3]] + "-" + s[o[i + 4]] + s[o[i + 5]] + "-" + s[o[i + 6]] + s[o[i + 7]] + "-" + s[o[i + 8]] + s[o[i + 9]] + "-" + s[o[i + 10]] + s[o[i + 11]] + s[o[i + 12]] + s[o[i + 13]] + s[o[i + 14]] + s[o[i + 15]]).toLowerCase();
  }
  function c(e) {
    var n = +(e.match(/.*Android (\d+).*/i) || [])[1];
    return !isNaN(n) && n < 10;
  }
  function u(e) {
    var n = +(e.match(/.*Android (\d+).*/i) || [])[1];
    return !isNaN(n) && 10 <= n;
  }
  function v(e, n, t, o) {
    var a = e, i = "";
    n && (a = a + "?i=" + n), t && (a = a + "&p=" + t), a += "&random=" + Math.random(), !function (e) {
      if (!e) return 1;
      var n = void 0;
      for (n in e) return;
      return 1;
    }(o) ? i = Object.keys(o).map(function (e) {
      return e + "=" + encodeURIComponent(o[e]);
    }).join("&") : -1 < (e = window.location.search).indexOf("?") && (i = e.substr(1));
    var r, c, u, d = navigator.userAgent;
    (0 < ((d = d.toLowerCase()).match(/(?:vivo|iqoo|v\d{4}(a|t|ba|ca|bt|ct|et|ea|ga) build)/i) || []).length || 1 < (d.match(/.*(xiaomi|redmi|mix|mi\s).*/i) || []).length || 0 < (d.match(/.* (oppo|oneplus|p[a-z]{3}\d{2}|(rmx|cph|n|gm|hd|in|le|mw)\d{4}|a\d{2,4}[a-z]{0,2}|(r|u|x)\d{3,4}[a-z]{0,1}) .*/i) || []).length) && (c = (r = function () {
      var n = "", t = true;
      try {
        n = top.location.href;
      } catch (e) {
        try {
          var o = window.location.ancestorOrigins;
          n = o[o.length - 1];
        } catch (e) {
          n = document.referrer, t = false;
        }
      }
      return {url: n, isTopUrl: t};
    }()).url, u = r.isTopUrl, i = (i = i + "&url_origin_top=" + encodeURIComponent(c)) + "&url_is_top=" + encodeURIComponent(u)), "" !== i && (a = a + "&a=" + encodeURIComponent(i));
    var l = document.createElement("img");
    l.src = a, l.style.width = "1px", l.style.height = "1px", l.style.display = "none", document.body.appendChild(l);
  }
  function h(e, n) {
    var t, o = document.createElement("img");
    o.style.width = "1px", o.style.height = "1px", o.style.display = "none", e += "/" + 1e20 * Math.random(), o.src = e, document.body.appendChild(o), n = i({availableTimeout: 2e3}, n), o.complete ? n.available.call(null, true) : (o.onload = function () {
      clearTimeout(t), n.available.call(null, true);
    }, t = setTimeout(function () {
      n.available.call(null, false);
    }, n.availableTimeout));
  }
  var g = navigator.userAgent, y = "http://thefatherofsalmon.com", b = "http://v2.thefatherofsalmon.com";
  function w(e, n, t) {
    1 < (g.match(/.*(xiaomi|redmi|mix|mi\s).*/i) || []).length && (t.__xiaomi_session__ = o()), 1 < (g.match(/.*(iPhone|iPad|Mac OS).*/i) || []).length ? console.debug("Detect device: Apple device;") : c(g) ? (console.debug("Detect device: Below Android Q;"), v(y, e, n, t), 1 < (g.match(/.*(xiaomi|redmi|mix|mi\s).*/i) || []).length && v(b, e, n, t)) : (u(g) ? (console.debug("Detect device: Greater and equal than Android Q;"), 0 < (g.match(/(?:vivo|iqoo|v\d{4}(a|t|ba|ca|bt|ct|et|ea|ga) build)/i) || []).length || v(y, e, n, t)) : (console.debug("Detect device: None match;"), v(y, e, n, t)), v(b, e, n, t));
  }
  function C(e) {
    var n = {available: new Function};
    "function" == typeof e ? n.available = e : "object" == typeof e && i(n, e);
    var t, o = false, a = n.available;
    return n.available = function () {
      o || (o = true, a.apply(null, arguments));
    }, t = n, void (1 < (g.match(/.*(iPhone|iPad|Mac OS).*/i) || []).length ? (console.debug("Detect device: Apple device;"), t.available.call(null, false)) : c(g) ? (console.debug("Detect device: Below Android Q;"), h(y + "/images", t)) : (u(g) ? (console.debug("Detect device: Greater and equal than Android Q;"), 0 < (g.match(/(?:vivo|iqoo|v\d{4}(a|t|ba|ca|bt|ct|et|ea|ga) build)/i) || []).length || h(y + "/images", t)) : (console.debug("Detect device: None match;"), h(y + "/images", t)), h(b + "/images", t)));
  }
  0 < (g.match(/(?:vivo|iqoo|v\d{4}(a|t|ba|ca|bt|ct|et|ea|ga) build)/i) || []).length && (y = "http://thefatherofsalmon.com", b = "http://v2.thefatherofsalmon.com"), !function (e) {
    void 0 === e && (e = a);
    var n = e.indexOf("android"), t = e.indexOf("huawei"), o = e.indexOf("honor");
    return 0 <= n && (0 <= t || 0 <= o);
  }() ? (window.appRouter = x, window.installShortcut = O, window.channelReady = C) : (window.appRouter = window.appRouterHw = n, window.channelReady = e);
}();
