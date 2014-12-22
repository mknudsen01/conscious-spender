(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root === 'undefined' || root !== Object(root)) {
        throw new Error('templatizer: window does not exist or is not an object');
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};
    templatizer["forms"] = {};
    templatizer["pages"] = {};
    templatizer["partials"] = {};
    templatizer["pages"]["users"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="row push-down--1"><div class="col-1-2"><a href="/" data-ui-role="brand" class="color-primary--lighter font--larger">Conscious</a></div><section class="js-nav-links col-1-2"><a href="/" data-hook="link-home" class="col-1-3 btn btn--primary">Home</a><a href="/categories" class="col-1-3 btn btn--primary">Categories</a><a href="/users/me" data-hook="username" class="col-1-3 text--right truncate"></a></section></nav><section data-hook="page-container" class="row"></section></body>';
    };

    // forms/textInput.jade compiled template
    templatizer["forms"]["textInput"] = function tmpl_forms_textInput() {
        return '<section data-ui-role="form-input" class="row"><label><span data-hook="label" class="font--larger row"></span><input/><div data-hook="message-container" class="row"><div data-hook="message-text"></div></div></label></section>';
    };

    // pages/home.jade compiled template
    templatizer["pages"]["home"] = function tmpl_pages_home() {
        return '<section class="row"><h2>Home page</h2></section>';
    };

    // pages/users/edit.jade compiled template
    templatizer["pages"]["users"]["edit"] = function tmpl_pages_users_edit() {
        return '<section class="page"><h1>Editing user</h1><form data-hook="user-form"><fieldset data-hook="field-container"></fieldset><button type="submit" class="btn btn--primary">Save</button></form></section>';
    };

    // pages/users/index.jade compiled template
    templatizer["pages"]["users"]["index"] = function tmpl_pages_users_index() {
        return '<section class="row"><h2>Users</h2><ul data-hook="user-list"></ul></section>';
    };

    // pages/users/me.jade compiled template
    templatizer["pages"]["users"]["me"] = function tmpl_pages_users_me() {
        return '<section data-ui-role="user-profile"><section class="media row"><div class="media__img col-1-4"><img data-hook="user-avatar"/></div><div class="media__body--top col-3-4 push-down--3"><h2 data-hook="user-full-name"></h2></div></section></section>';
    };

    // pages/users/new.jade compiled template
    templatizer["pages"]["users"]["new"] = function tmpl_pages_users_new() {
        return '<section data-ui-role="new-user"><form data-hook="new-user" class="push-1-4 col-1-2"><fieldset data-hook="field-container" class="row"></fieldset><button class="btn btn--primary">Create User</button></form></section>';
    };

    // pages/users/show.jade compiled template
    templatizer["pages"]["users"]["show"] = function tmpl_pages_users_show() {
        return '<section data-ui-role="user-profile"><section class="media row"><div class="media__img col-1-4"><img data-hook="user-avatar"/></div><div class="media__body--top col-3-4 push-down--3"><h2 data-hook="user-full-name"></h2></div></section></section>';
    };

    // partials/user.jade compiled template
    templatizer["partials"]["user"] = function tmpl_partials_user() {
        return '<li data-ui-role="user-partial" class="row media"><div class="media__img col-1-8"><img data-hook="user-avatar"/></div><div class="media__body col-7-8"><span data-hook="username" class="font--larger col-1-2"></span><button data-hook="action-delete-user" class="btn btn--danger col-1-6">Delete</button><a data-hook="action-user-profile" class="btn btn--secondary col-1-6">Show</a><a data-hook="action-user-edit" class="btn btn--primary col-1-6">Edit</a></div></li>';
    };

    return templatizer;
}));