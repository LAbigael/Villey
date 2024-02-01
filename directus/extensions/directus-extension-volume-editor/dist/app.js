import { useItems, useApi } from '@directus/extensions-sdk';
import * as vue from 'vue';
import { ref, resolveComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, withCtx, createVNode, createElementVNode, normalizeClass, toDisplayString, Suspense, reactive, computed, unref, nextTick, onMounted, isRef, watch, provide, toValue, readonly, watchEffect, shallowRef, withDirectives, mergeProps, vModelCheckbox, vModelText, createTextVNode, pushScopeId, popScopeId } from 'vue';

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$3 = "\n.status {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    margin-right: 0.5rem;\n    height: 0.5rem;\n    width: 0.5rem;\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(239 68 68 / var(--tw-bg-opacity))\n}\n.status.active {\n    --tw-bg-opacity: 1;\n    background-color: rgb(34 197 94 / var(--tw-bg-opacity))\n}\ntd {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-style: none;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n}\ntr:nth-child(even) {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity))\n}\ntr {\n    border-bottom-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity))\n}\n";
n(css$3,{});

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$4 = {
  async setup() {
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["title", "number", "site_id", "slug", "id", "active"]),
      limit: ref(100),
      sort: ref(null),
      search: ref(null),
      filter: ref({}),
      page: ref(1),
    };

    const { getItems, items } = useItems(collectionRef, query);

    query.search.value = ""; // update query search
    query.filter.value.site_id = 1; // update query filter
    query.sort.value = "-number"; // update query sort

    await getItems(); // fetch the items
    const data = items.value; // get the items

    return {
      data,
    };
  },
};

const _hoisted_1$3 = { class: "w-full flex items-center cursor-pointer" };
const _hoisted_2$2 = { class: "h-full py-10" };
const _hoisted_3$1 = { class: "w-full" };
const _hoisted_4$1 = ["href"];

function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VIcon = resolveComponent("VIcon");
  const _component_VListItem = resolveComponent("VListItem");
  const _component_VList = resolveComponent("VList");

  return (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data, (item) => {
    return (openBlock(), createBlock(_component_VList, {
      key: item.id
    }, {
      default: withCtx(() => [
        createVNode(_component_VListItem, {
          clickable: true,
          href: `volume-editor/edit/${item.id}`
        }, {
          default: withCtx(() => [
            createElementVNode("tr", _hoisted_1$3, [
              createElementVNode("td", _hoisted_2$2, [
                createElementVNode("span", {
                  class: normalizeClass(["status", { active: item.active }])
                }, null, 2 /* CLASS */)
              ]),
              createElementVNode("td", _hoisted_3$1, [
                createElementVNode("h5", null, toDisplayString(item.title), 1 /* TEXT */)
              ]),
              createElementVNode("td", null, [
                createElementVNode("a", {
                  target: "_self",
                  href: `/admin/volume-editor/edit/${item.id}`
                }, [
                  createVNode(_component_VIcon, {
                    name: "edit",
                    title: "Modifier le volume"
                  })
                ], 8 /* PROPS */, _hoisted_4$1)
              ])
            ])
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])
      ]),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */))
  }), 128 /* KEYED_FRAGMENT */))
}
var VolumeList = /*#__PURE__*/_export_sfc(_sfc_main$4, [['render',_sfc_render$4],['__file',"VolumeList.vue"]]);

const _sfc_main$3 = {};

function _sfc_render$3(_ctx, _cache) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list = resolveComponent("v-list");

  return (openBlock(), createBlock(_component_v_list, { nav: "" }, {
    default: withCtx(() => [
      createVNode(_component_v_list_item, { href: "/volumes" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "import_contacts" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Volumes" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "book" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Numéros" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "article" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Recensions" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "person" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Auteurs" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "explore" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Appels à contribution" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, null, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "palette" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Thèmes" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}
var PageNavigation = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__file',"PageNavigation.vue"]]);

const _sfc_main$2 = {
  components: { VolumeList, Suspense, PageNavigation },
  setup() { },
};

const _hoisted_1$2 = /*#__PURE__*/createElementVNode("h2", null, "Liste des volumes", -1 /* HOISTED */);
const _hoisted_2$1 = /*#__PURE__*/createElementVNode("div", null, "Loading...", -1 /* HOISTED */);

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_PageNavigation = resolveComponent("PageNavigation");
  const _component_VolumeList = resolveComponent("VolumeList");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Liste des volumes" }, {
    navigation: withCtx(() => [
      createVNode(_component_PageNavigation)
    ]),
    default: withCtx(() => [
      _hoisted_1$2,
      (openBlock(), createBlock(Suspense, null, {
        default: withCtx(() => [
          createVNode(_component_VolumeList)
        ]),
        fallback: withCtx(() => [
          _hoisted_2$1
        ]),
        _: 1 /* STABLE */
      })),
      createVNode(_component_VolumeList)
    ]),
    _: 1 /* STABLE */
  }))
}
var ModuleComponent = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render$2],['__file',"module.vue"]]);

function useVolumes() {
  async function getVolume(id) {
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["*"]),
      limit: ref(1),
      sort: ref(null),
      search: ref(null),
      filter: ref(null),
      page: ref(1),
    };

    query.filter.value = { id: id };
    query.fields.value = [
      "slug",
      "title",
      "number",
      "active",
      "published_at",
      "sections.title",
      "sections.id",
      "sections.position",
      "sections.articles.title",
      "sections.articles.id",
      "sections.articles.section_id",
      "sections.articles.position",
      "sections.articles.active",
      "sections.articles.authors.author_id.fullname",
    ];
    const { getItems, items } = useItems(collectionRef, query);

    await getItems();

    return items?.value[0];
  }
  async function createSection(api, volumeId) {
    const response = await api.post(`/items/VolumeSections`, {
      volume_id: volumeId,
    });
    console.log(response);
  }
  return { getVolume, createSection };
}

/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */

function isCallable(fn) {
    return typeof fn === 'function';
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj);
function isIndex(value) {
    return Number(value) >= 0;
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
}
// Reference: https://github.com/lodash/lodash/blob/master/isPlainObject.js
function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
    Object.keys(source).forEach(key => {
        if (isPlainObject(source[key]) && isPlainObject(target[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}
/**
 * Constructs a path with dot paths for arrays to use brackets to be compatible with vee-validate path syntax
 */
function normalizeFormPath(path) {
    const pathArr = path.split('.');
    if (!pathArr.length) {
        return '';
    }
    let fullPath = String(pathArr[0]);
    for (let i = 1; i < pathArr.length; i++) {
        if (isIndex(pathArr[i])) {
            fullPath += `[${pathArr[i]}]`;
            continue;
        }
        fullPath += `.${pathArr[i]}`;
    }
    return fullPath;
}

const RULES = {};
/**
 * Gets an already defined rule
 */
function resolveRule(id) {
    return RULES[id];
}

function set(obj, key, val) {
	if (typeof val.value === 'object') val.value = klona(val.value);
	if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === '__proto__') {
		Object.defineProperty(obj, key, val);
	} else obj[key] = val.value;
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var i=0, k, list, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		tmp = Object.create(x.__proto__ || null);
	} else if (str === '[object Array]') {
		tmp = Array(x.length);
	} else if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
	} else if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
	} else if (str === '[object Date]') {
		tmp = new Date(+x);
	} else if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
	} else if (str === '[object DataView]') {
		tmp = new x.constructor( klona(x.buffer) );
	} else if (str === '[object ArrayBuffer]') {
		tmp = x.slice(0);
	} else if (str.slice(-6) === 'Array]') {
		// ArrayBuffer.isView(x)
		// ~> `new` bcuz `Buffer.slice` => ref
		tmp = new x.constructor(x);
	}

	if (tmp) {
		for (list=Object.getOwnPropertySymbols(x); i < list.length; i++) {
			set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
		}

		for (i=0, list=Object.getOwnPropertyNames(x); i < list.length; i++) {
			if (Object.hasOwnProperty.call(tmp, k=list[i]) && tmp[k] === x[k]) continue;
			set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
		}
	}

	return tmp || x;
}

const FormContextKey = Symbol('vee-validate-form');

const isClient = typeof window !== 'undefined';
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}
function isTypedSchema(value) {
    return !!value && isCallable(value.parse) && value.__type === 'VVTypedSchema';
}
function isYupValidator(value) {
    return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
    return type === 'checkbox' || type === 'radio';
}
function isContainerValue(value) {
    return isObject(value) || Array.isArray(value);
}
/**
 * True if the value is an empty object or array
 */
function isEmptyContainer(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isObject(value) && Object.keys(value).length === 0;
}
/**
 * Checks if the path opted out of nested fields using `[fieldName]` syntax
 */
function isNotNestedPath(path) {
    return /^\[.+\]$/i.test(path);
}
/**
 * Checks if an element is a native HTML5 multi-select input element
 */
function isNativeMultiSelect(el) {
    return isNativeSelect(el) && el.multiple;
}
/**
 * Checks if an element is a native HTML5 select input element
 */
function isNativeSelect(el) {
    return el.tagName === 'SELECT';
}
function isFormSubmitEvent(evt) {
    return isEvent(evt) && evt.target && 'submit' in evt.target;
}
function isEvent(evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE and Cypress #3161
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
}
/**
 * Compares if two values are the same borrowed from:
 * https://github.com/epoberezkin/fast-deep-equal
 * We added a case for file matching since `Object.keys` doesn't work with Files.
 * */
function isEqual(a, b) {
    if (a === b)
        return true;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
        if (a.constructor !== b.constructor)
            return false;
        // eslint-disable-next-line no-var
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            // eslint-disable-next-line eqeqeq
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (!isEqual(a[i], b[i]))
                    return false;
            return true;
        }
        if (a instanceof Map && b instanceof Map) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            for (i of a.entries())
                if (!isEqual(i[1], b.get(i[0])))
                    return false;
            return true;
        }
        // We added this part for file comparison, arguably a little naive but should work for most cases.
        // #3911
        if (isFile(a) && isFile(b)) {
            if (a.size !== b.size)
                return false;
            if (a.name !== b.name)
                return false;
            if (a.lastModified !== b.lastModified)
                return false;
            if (a.type !== b.type)
                return false;
            return true;
        }
        if (a instanceof Set && b instanceof Set) {
            if (a.size !== b.size)
                return false;
            for (i of a.entries())
                if (!b.has(i[0]))
                    return false;
            return true;
        }
        if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
            length = a.length;
            // eslint-disable-next-line eqeqeq
            if (length != b.length)
                return false;
            for (i = length; i-- !== 0;)
                if (a[i] !== b[i])
                    return false;
            return true;
        }
        if (a.constructor === RegExp)
            return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf)
            return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString)
            return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        for (i = length; i-- !== 0;) {
            // eslint-disable-next-line no-var
            var key = keys[i];
            if (!isEqual(a[key], b[key]))
                return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    // eslint-disable-next-line no-self-compare
    return a !== a && b !== b;
}
function isFile(a) {
    if (!isClient) {
        return false;
    }
    return a instanceof File;
}

function cleanupNonNestedPath(path) {
    if (isNotNestedPath(path)) {
        return path.replace(/\[|\]/gi, '');
    }
    return path;
}
function getFromPath(object, path, fallback) {
    if (!object) {
        return fallback;
    }
    if (isNotNestedPath(path)) {
        return object[cleanupNonNestedPath(path)];
    }
    const resolvedValue = (path || '')
        .split(/\.|\[(\d+)\]/)
        .filter(Boolean)
        .reduce((acc, propKey) => {
        if (isContainerValue(acc) && propKey in acc) {
            return acc[propKey];
        }
        return fallback;
    }, object);
    return resolvedValue;
}
/**
 * Sets a nested property value in a path, creates the path properties if it doesn't exist
 */
function setInPath(object, path, value) {
    if (isNotNestedPath(path)) {
        object[cleanupNonNestedPath(path)] = value;
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, set it
        if (i === keys.length - 1) {
            acc[keys[i]] = value;
            return;
        }
        // Key does not exist, create a container for it
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            // container can be either an object or an array depending on the next key if it exists
            acc[keys[i]] = isIndex(keys[i + 1]) ? [] : {};
        }
        acc = acc[keys[i]];
    }
}
function unset(object, key) {
    if (Array.isArray(object) && isIndex(key)) {
        object.splice(Number(key), 1);
        return;
    }
    if (isObject(object)) {
        delete object[key];
    }
}
/**
 * Removes a nested property from object
 */
function unsetPath(object, path) {
    if (isNotNestedPath(path)) {
        delete object[cleanupNonNestedPath(path)];
        return;
    }
    const keys = path.split(/\.|\[(\d+)\]/).filter(Boolean);
    let acc = object;
    for (let i = 0; i < keys.length; i++) {
        // Last key, unset it
        if (i === keys.length - 1) {
            unset(acc, keys[i]);
            break;
        }
        // Key does not exist, exit
        if (!(keys[i] in acc) || isNullOrUndefined(acc[keys[i]])) {
            break;
        }
        acc = acc[keys[i]];
    }
    const pathValues = keys.map((_, idx) => {
        return getFromPath(object, keys.slice(0, idx).join('.'));
    });
    for (let i = pathValues.length - 1; i >= 0; i--) {
        if (!isEmptyContainer(pathValues[i])) {
            continue;
        }
        if (i === 0) {
            unset(object, keys[0]);
            continue;
        }
        unset(pathValues[i - 1], keys[i - 1]);
    }
}
/**
 * A typed version of Object.keys
 */
function keysOf(record) {
    return Object.keys(record);
}
function debounceAsync(inner, ms = 0) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        if (timer) {
            clearTimeout(timer);
        }
        // @ts-expect-error timer is a number
        timer = setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
        }, ms);
        return new Promise(resolve => resolves.push(resolve));
    };
}
function withLatest(fn, onDone) {
    let latestRun;
    return async function runLatest(...args) {
        const pending = fn(...args);
        latestRun = pending;
        const result = await pending;
        if (pending !== latestRun) {
            return result;
        }
        latestRun = undefined;
        return onDone(result, args);
    };
}
function normalizeErrorItem(message) {
    return Array.isArray(message) ? message : message ? [message] : [];
}
function omit(obj, keys) {
    const target = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            target[key] = obj[key];
        }
    }
    return target;
}
function debounceNextTick(inner) {
    let lastTick = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        const thisTick = nextTick(() => {
            if (lastTick !== thisTick) {
                return;
            }
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach(r => r(result));
            resolves = [];
            lastTick = null;
        });
        lastTick = thisTick;
        return new Promise(resolve => resolves.push(resolve));
    };
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function getBoundValue(el) {
    if (hasValueBinding(el)) {
        return el._value;
    }
    return undefined;
}
/**
 * Vue adds a `_value` prop at the moment on the input elements to store the REAL value on them, real values are different than the `value` attribute
 * as they do not get casted to strings unlike `el.value` which preserves user-code behavior
 */
function hasValueBinding(el) {
    return '_value' in el;
}

function parseInputValue(el) {
    if (el.type === 'number') {
        return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
    }
    if (el.type === 'range') {
        return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
    }
    return el.value;
}
function normalizeEventValue(value) {
    if (!isEvent(value)) {
        return value;
    }
    const input = value.target;
    // Vue sets the current bound value on `_value` prop
    // for checkboxes it it should fetch the value binding type as is (boolean instead of string)
    if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
        return getBoundValue(input);
    }
    if (input.type === 'file' && input.files) {
        const files = Array.from(input.files);
        return input.multiple ? files : files[0];
    }
    if (isNativeMultiSelect(input)) {
        return Array.from(input.options)
            .filter(opt => opt.selected && !opt.disabled)
            .map(getBoundValue);
    }
    // makes sure we get the actual `option` bound value
    // #3440
    if (isNativeSelect(input)) {
        const selectedOption = Array.from(input.options).find(opt => opt.selected);
        return selectedOption ? getBoundValue(selectedOption) : input.value;
    }
    return parseInputValue(input);
}

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    const acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false,
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce((prev, curr) => {
            const params = normalizeParams(rules[curr]);
            if (rules[curr] !== false) {
                prev[curr] = buildParams(params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        return acc;
    }
    return rules.split('|').reduce((prev, rule) => {
        const parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.params);
        return prev;
    }, acc);
}
/**
 * Normalizes a rule param.
 */
function normalizeParams(params) {
    if (params === true) {
        return [];
    }
    if (Array.isArray(params)) {
        return params;
    }
    if (isObject(params)) {
        return params;
    }
    return [params];
}
function buildParams(provided) {
    const mapValueToLocator = (value) => {
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            return createLocator(value.slice(1));
        }
        return value;
    };
    if (Array.isArray(provided)) {
        return provided.map(mapValueToLocator);
    }
    // #3073
    if (provided instanceof RegExp) {
        return [provided];
    }
    return Object.keys(provided).reduce((prev, key) => {
        prev[key] = mapValueToLocator(provided[key]);
        return prev;
    }, {});
}
/**
 * Parses a rule string expression.
 */
const parseRule = (rule) => {
    let params = [];
    const name = rule.split(':')[0];
    if (rule.includes(':')) {
        params = rule.split(':').slice(1).join(':').split(',');
    }
    return { name, params };
};
function createLocator(value) {
    const locator = (crossTable) => {
        const val = getFromPath(crossTable, value) || crossTable[value];
        return val;
    };
    locator.__locatorRef = value;
    return locator;
}

const DEFAULT_CONFIG = {
    generateMessage: ({ field }) => `${field} is not valid.`,
    bails: true,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: false,
    validateOnModelUpdate: true,
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;

/**
 * Validates a value against the rules.
 */
async function validate(value, rules, options = {}) {
    const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
    const field = {
        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
        rules,
        label: options === null || options === void 0 ? void 0 : options.label,
        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
        formData: (options === null || options === void 0 ? void 0 : options.values) || {},
    };
    const result = await _validate(field, value);
    const errors = result.errors;
    return {
        errors,
        valid: !errors.length,
    };
}
/**
 * Starts the validation process.
 */
async function _validate(field, value) {
    if (isTypedSchema(field.rules) || isYupValidator(field.rules)) {
        return validateFieldWithTypedSchema(value, field.rules);
    }
    // if a generic function or chain of generic functions
    if (isCallable(field.rules) || Array.isArray(field.rules)) {
        const ctx = {
            field: field.label || field.name,
            name: field.name,
            label: field.label,
            form: field.formData,
            value,
        };
        // Normalize the pipeline
        const pipeline = Array.isArray(field.rules) ? field.rules : [field.rules];
        const length = pipeline.length;
        const errors = [];
        for (let i = 0; i < length; i++) {
            const rule = pipeline[i];
            const result = await rule(value, ctx);
            const isValid = typeof result !== 'string' && !Array.isArray(result) && result;
            if (isValid) {
                continue;
            }
            if (Array.isArray(result)) {
                errors.push(...result);
            }
            else {
                const message = typeof result === 'string' ? result : _generateFieldError(ctx);
                errors.push(message);
            }
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
        return {
            errors,
        };
    }
    const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
    const errors = [];
    const rulesKeys = Object.keys(normalizedContext.rules);
    const length = rulesKeys.length;
    for (let i = 0; i < length; i++) {
        const rule = rulesKeys[i];
        const result = await _test(normalizedContext, value, {
            name: rule,
            params: normalizedContext.rules[rule],
        });
        if (result.error) {
            errors.push(result.error);
            if (field.bails) {
                return {
                    errors,
                };
            }
        }
    }
    return {
        errors,
    };
}
function isYupError(err) {
    return !!err && err.name === 'ValidationError';
}
function yupToTypedSchema(yupSchema) {
    const schema = {
        __type: 'VVTypedSchema',
        async parse(values) {
            var _a;
            try {
                const output = await yupSchema.validate(values, { abortEarly: false });
                return {
                    output,
                    errors: [],
                };
            }
            catch (err) {
                // Yup errors have a name prop one them.
                // https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
                if (!isYupError(err)) {
                    throw err;
                }
                if (!((_a = err.inner) === null || _a === void 0 ? void 0 : _a.length) && err.errors.length) {
                    return { errors: [{ path: err.path, errors: err.errors }] };
                }
                const errors = err.inner.reduce((acc, curr) => {
                    const path = curr.path || '';
                    if (!acc[path]) {
                        acc[path] = { errors: [], path };
                    }
                    acc[path].errors.push(...curr.errors);
                    return acc;
                }, {});
                return { errors: Object.values(errors) };
            }
        },
    };
    return schema;
}
/**
 * Handles yup validation
 */
async function validateFieldWithTypedSchema(value, schema) {
    const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
    const result = await typedSchema.parse(value);
    const messages = [];
    for (const error of result.errors) {
        if (error.errors.length) {
            messages.push(...error.errors);
        }
    }
    return {
        errors: messages,
    };
}
/**
 * Tests a single input value against a rule.
 */
async function _test(field, value, rule) {
    const validator = resolveRule(rule.name);
    if (!validator) {
        throw new Error(`No such validator '${rule.name}' exists.`);
    }
    const params = fillTargetValues(rule.params, field.formData);
    const ctx = {
        field: field.label || field.name,
        name: field.name,
        label: field.label,
        value,
        form: field.formData,
        rule: Object.assign(Object.assign({}, rule), { params }),
    };
    const result = await validator(value, params, ctx);
    if (typeof result === 'string') {
        return {
            error: result,
        };
    }
    return {
        error: result ? undefined : _generateFieldError(ctx),
    };
}
/**
 * Generates error messages.
 */
function _generateFieldError(fieldCtx) {
    const message = getConfig().generateMessage;
    if (!message) {
        return 'Field is invalid';
    }
    return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
    const normalize = (value) => {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    if (Array.isArray(params)) {
        return params.map(normalize);
    }
    return Object.keys(params).reduce((acc, param) => {
        acc[param] = normalize(params[param]);
        return acc;
    }, {});
}
async function validateTypedSchema(schema, values) {
    const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
    const validationResult = await typedSchema.parse(klona(values));
    const results = {};
    const errors = {};
    for (const error of validationResult.errors) {
        const messages = error.errors;
        // Fixes issue with path mapping with Yup 1.0 including quotes around array indices
        const path = (error.path || '').replace(/\["(\d+)"\]/g, (_, m) => {
            return `[${m}]`;
        });
        results[path] = { valid: !messages.length, errors: messages };
        if (messages.length) {
            errors[path] = messages[0];
        }
    }
    return {
        valid: !validationResult.errors.length,
        results,
        errors,
        values: validationResult.value,
    };
}
async function validateObjectSchema(schema, values, opts) {
    const paths = keysOf(schema);
    const validations = paths.map(async (path) => {
        var _a, _b, _c;
        const strings = (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path];
        const fieldResult = await validate(getFromPath(values, path), schema[path], {
            name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
            label: strings === null || strings === void 0 ? void 0 : strings.label,
            values: values,
            bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true,
        });
        return Object.assign(Object.assign({}, fieldResult), { path });
    });
    let isAllValid = true;
    const validationResults = await Promise.all(validations);
    const results = {};
    const errors = {};
    for (const result of validationResults) {
        results[result.path] = {
            valid: result.valid,
            errors: result.errors,
        };
        if (!result.valid) {
            isAllValid = false;
            errors[result.path] = result.errors[0];
        }
    }
    return {
        valid: isAllValid,
        results,
        errors,
    };
}

let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ['bails', 'fieldsCount', 'id', 'multiple', 'type', 'validate'];
function resolveInitialValues(opts) {
    const providedValues = Object.assign({}, toValue((opts === null || opts === void 0 ? void 0 : opts.initialValues) || {}));
    const schema = unref(opts === null || opts === void 0 ? void 0 : opts.validationSchema);
    if (schema && isTypedSchema(schema) && isCallable(schema.cast)) {
        return klona(schema.cast(providedValues) || {});
    }
    return klona(providedValues);
}
function useForm(opts) {
    var _a;
    const formId = FORM_COUNTER++;
    // Prevents fields from double resetting their values, which causes checkboxes to toggle their initial value
    let FIELD_ID_COUNTER = 0;
    // If the form is currently submitting
    const isSubmitting = ref(false);
    // If the form is currently validating
    const isValidating = ref(false);
    // The number of times the user tried to submit the form
    const submitCount = ref(0);
    // field arrays managed by this form
    const fieldArrays = [];
    // a private ref for all form values
    const formValues = reactive(resolveInitialValues(opts));
    const pathStates = ref([]);
    const extraErrorsBag = ref({});
    const pathStateLookup = ref({});
    const rebuildPathLookup = debounceNextTick(() => {
        pathStateLookup.value = pathStates.value.reduce((names, state) => {
            names[normalizeFormPath(toValue(state.path))] = state;
            return names;
        }, {});
    });
    /**
     * Manually sets an error message on a specific field
     */
    function setFieldError(field, message) {
        const state = findPathState(field);
        if (!state) {
            if (typeof field === 'string') {
                extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message);
            }
            return;
        }
        // Move the error from the extras path if exists
        if (typeof field === 'string') {
            const normalizedPath = normalizeFormPath(field);
            if (extraErrorsBag.value[normalizedPath]) {
                delete extraErrorsBag.value[normalizedPath];
            }
        }
        state.errors = normalizeErrorItem(message);
        state.valid = !state.errors.length;
    }
    /**
     * Sets errors for the fields specified in the object
     */
    function setErrors(paths) {
        keysOf(paths).forEach(path => {
            setFieldError(path, paths[path]);
        });
    }
    if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
        setErrors(opts.initialErrors);
    }
    const errorBag = computed(() => {
        const pathErrors = pathStates.value.reduce((acc, state) => {
            if (state.errors.length) {
                acc[state.path] = state.errors;
            }
            return acc;
        }, {});
        return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors);
    });
    // Gets the first error of each field
    const errors = computed(() => {
        return keysOf(errorBag.value).reduce((acc, key) => {
            const errors = errorBag.value[key];
            if (errors === null || errors === void 0 ? void 0 : errors.length) {
                acc[key] = errors[0];
            }
            return acc;
        }, {});
    });
    /**
     * Holds a computed reference to all fields names and labels
     */
    const fieldNames = computed(() => {
        return pathStates.value.reduce((names, state) => {
            names[state.path] = { name: state.path || '', label: state.label || '' };
            return names;
        }, {});
    });
    const fieldBailsMap = computed(() => {
        return pathStates.value.reduce((map, state) => {
            var _a;
            map[state.path] = (_a = state.bails) !== null && _a !== void 0 ? _a : true;
            return map;
        }, {});
    });
    // mutable non-reactive reference to initial errors
    // we need this to process initial errors then unset them
    const initialErrors = Object.assign({}, ((opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {}));
    const keepValuesOnUnmount = (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a !== void 0 ? _a : false;
    // initial form values
    const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(pathStates, formValues, opts);
    // form meta aggregations
    const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors);
    const controlledValues = computed(() => {
        return pathStates.value.reduce((acc, state) => {
            const value = getFromPath(formValues, state.path);
            setInPath(acc, state.path, value);
            return acc;
        }, {});
    });
    const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
    function createPathState(path, config) {
        var _a, _b;
        const initialValue = computed(() => getFromPath(initialValues.value, toValue(path)));
        const pathStateExists = pathStateLookup.value[toValue(path)];
        const isCheckboxOrRadio = (config === null || config === void 0 ? void 0 : config.type) === 'checkbox' || (config === null || config === void 0 ? void 0 : config.type) === 'radio';
        if (pathStateExists && isCheckboxOrRadio) {
            pathStateExists.multiple = true;
            const id = FIELD_ID_COUNTER++;
            if (Array.isArray(pathStateExists.id)) {
                pathStateExists.id.push(id);
            }
            else {
                pathStateExists.id = [pathStateExists.id, id];
            }
            pathStateExists.fieldsCount++;
            pathStateExists.__flags.pendingUnmount[id] = false;
            return pathStateExists;
        }
        const currentValue = computed(() => getFromPath(formValues, toValue(path)));
        const pathValue = toValue(path);
        const unsetBatchIndex = UNSET_BATCH.findIndex(_path => _path === pathValue);
        if (unsetBatchIndex !== -1) {
            UNSET_BATCH.splice(unsetBatchIndex, 1);
        }
        const isRequired = computed(() => {
            var _a, _b, _c, _d, _e, _f;
            if (isTypedSchema(schema)) {
                return (_c = (_b = (_a = schema).describe) === null || _b === void 0 ? void 0 : _b.call(_a, toValue(path)).required) !== null && _c !== void 0 ? _c : false;
            }
            // Path own schema
            if (isTypedSchema(config === null || config === void 0 ? void 0 : config.schema)) {
                return (_f = (_e = (_d = (config === null || config === void 0 ? void 0 : config.schema)).describe) === null || _e === void 0 ? void 0 : _e.call(_d).required) !== null && _f !== void 0 ? _f : false;
            }
            return false;
        });
        const id = FIELD_ID_COUNTER++;
        const state = reactive({
            id,
            path,
            touched: false,
            pending: false,
            valid: true,
            validated: !!((_a = initialErrors[pathValue]) === null || _a === void 0 ? void 0 : _a.length),
            required: isRequired,
            initialValue,
            errors: shallowRef([]),
            bails: (_b = config === null || config === void 0 ? void 0 : config.bails) !== null && _b !== void 0 ? _b : false,
            label: config === null || config === void 0 ? void 0 : config.label,
            type: (config === null || config === void 0 ? void 0 : config.type) || 'default',
            value: currentValue,
            multiple: false,
            __flags: {
                pendingUnmount: { [id]: false },
                pendingReset: false,
            },
            fieldsCount: 1,
            validate: config === null || config === void 0 ? void 0 : config.validate,
            dirty: computed(() => {
                return !isEqual(unref(currentValue), unref(initialValue));
            }),
        });
        pathStates.value.push(state);
        pathStateLookup.value[pathValue] = state;
        rebuildPathLookup();
        if (errors.value[pathValue] && !initialErrors[pathValue]) {
            nextTick(() => {
                validateField(pathValue, { mode: 'silent' });
            });
        }
        // Handles when a path changes
        if (isRef(path)) {
            watch(path, newPath => {
                rebuildPathLookup();
                const nextValue = klona(currentValue.value);
                pathStateLookup.value[newPath] = state;
                nextTick(() => {
                    setInPath(formValues, newPath, nextValue);
                });
            });
        }
        return state;
    }
    /**
     * Batches validation runs in 5ms batches
     * Must have two distinct batch queues to make sure they don't override each other settings #3783
     */
    const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
    const debouncedValidation = debounceAsync(_validateSchema, 5);
    const validateSchema = withLatest(async (mode) => {
        return (await (mode === 'silent'
            ? debouncedSilentValidation()
            : debouncedValidation()));
    }, (formResult, [mode]) => {
        // fields by id lookup
        // errors fields names, we need it to also check if custom errors are updated
        const currentErrorsPaths = keysOf(formCtx.errorBag.value);
        // collect all the keys from the schema and all fields
        // this ensures we have a complete key map of all the fields
        const paths = [
            ...new Set([...keysOf(formResult.results), ...pathStates.value.map(p => p.path), ...currentErrorsPaths]),
        ].sort();
        // aggregates the paths into a single result object while applying the results on the fields
        const results = paths.reduce((validation, _path) => {
            var _a;
            const expectedPath = _path;
            const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath);
            const messages = ((_a = formResult.results[expectedPath]) === null || _a === void 0 ? void 0 : _a.errors) || [];
            // This is the real path of the field, because it might've been a hoisted field
            const path = (toValue(pathState === null || pathState === void 0 ? void 0 : pathState.path) || expectedPath);
            // It is possible that multiple paths are collected across loops
            // We want to merge them to avoid overriding any iteration's results
            const fieldResult = mergeValidationResults({ errors: messages, valid: !messages.length }, validation.results[path]);
            validation.results[path] = fieldResult;
            if (!fieldResult.valid) {
                validation.errors[path] = fieldResult.errors[0];
            }
            // clean up extra errors if path state exists
            if (pathState && extraErrorsBag.value[path]) {
                delete extraErrorsBag.value[path];
            }
            // field not rendered
            if (!pathState) {
                setFieldError(path, messages);
                return validation;
            }
            // always update the valid flag regardless of the mode
            pathState.valid = fieldResult.valid;
            if (mode === 'silent') {
                return validation;
            }
            if (mode === 'validated-only' && !pathState.validated) {
                return validation;
            }
            setFieldError(pathState, fieldResult.errors);
            return validation;
        }, { valid: formResult.valid, results: {}, errors: {} });
        if (formResult.values) {
            results.values = formResult.values;
        }
        return results;
    });
    function mutateAllPathState(mutation) {
        pathStates.value.forEach(mutation);
    }
    function findPathState(path) {
        const normalizedPath = typeof path === 'string' ? normalizeFormPath(path) : path;
        const pathState = typeof normalizedPath === 'string' ? pathStateLookup.value[normalizedPath] : normalizedPath;
        return pathState;
    }
    function findHoistedPath(path) {
        const candidates = pathStates.value.filter(state => path.startsWith(state.path));
        return candidates.reduce((bestCandidate, candidate) => {
            if (!bestCandidate) {
                return candidate;
            }
            return (candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate);
        }, undefined);
    }
    let UNSET_BATCH = [];
    let PENDING_UNSET;
    function unsetPathValue(path) {
        UNSET_BATCH.push(path);
        if (!PENDING_UNSET) {
            PENDING_UNSET = nextTick(() => {
                const sortedPaths = [...UNSET_BATCH].sort().reverse();
                sortedPaths.forEach(p => {
                    unsetPath(formValues, p);
                });
                UNSET_BATCH = [];
                PENDING_UNSET = null;
            });
        }
        return PENDING_UNSET;
    }
    function makeSubmissionFactory(onlyControlled) {
        return function submitHandlerFactory(fn, onValidationError) {
            return function submissionHandler(e) {
                if (e instanceof Event) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                // Touch all fields
                mutateAllPathState(s => (s.touched = true));
                isSubmitting.value = true;
                submitCount.value++;
                return validate()
                    .then(result => {
                    const values = klona(formValues);
                    if (result.valid && typeof fn === 'function') {
                        const controlled = klona(controlledValues.value);
                        let submittedValues = (onlyControlled ? controlled : values);
                        if (result.values) {
                            submittedValues = result.values;
                        }
                        return fn(submittedValues, {
                            evt: e,
                            controlledValues: controlled,
                            setErrors,
                            setFieldError,
                            setTouched,
                            setFieldTouched,
                            setValues,
                            setFieldValue,
                            resetForm,
                            resetField,
                        });
                    }
                    if (!result.valid && typeof onValidationError === 'function') {
                        onValidationError({
                            values,
                            evt: e,
                            errors: result.errors,
                            results: result.results,
                        });
                    }
                })
                    .then(returnVal => {
                    isSubmitting.value = false;
                    return returnVal;
                }, err => {
                    isSubmitting.value = false;
                    // re-throw the err so it doesn't go silent
                    throw err;
                });
            };
        };
    }
    const handleSubmitImpl = makeSubmissionFactory(false);
    const handleSubmit = handleSubmitImpl;
    handleSubmit.withControlled = makeSubmissionFactory(true);
    function removePathState(path, id) {
        const idx = pathStates.value.findIndex(s => s.path === path);
        const pathState = pathStates.value[idx];
        if (idx === -1 || !pathState) {
            return;
        }
        nextTick(() => {
            validateField(path, { mode: 'silent', warn: false });
        });
        if (pathState.multiple && pathState.fieldsCount) {
            pathState.fieldsCount--;
        }
        if (Array.isArray(pathState.id)) {
            const idIndex = pathState.id.indexOf(id);
            if (idIndex >= 0) {
                pathState.id.splice(idIndex, 1);
            }
            delete pathState.__flags.pendingUnmount[id];
        }
        if (!pathState.multiple || pathState.fieldsCount <= 0) {
            pathStates.value.splice(idx, 1);
            unsetInitialValue(path);
            rebuildPathLookup();
            delete pathStateLookup.value[path];
        }
    }
    function destroyPath(path) {
        keysOf(pathStateLookup.value).forEach(key => {
            if (key.startsWith(path)) {
                delete pathStateLookup.value[key];
            }
        });
        pathStates.value = pathStates.value.filter(s => !s.path.startsWith(path));
        nextTick(() => {
            rebuildPathLookup();
        });
    }
    const formCtx = {
        formId,
        values: formValues,
        controlledValues,
        errorBag,
        errors,
        schema,
        submitCount,
        meta,
        isSubmitting,
        isValidating,
        fieldArrays,
        keepValuesOnUnmount,
        validateSchema: unref(schema) ? validateSchema : undefined,
        validate,
        setFieldError,
        validateField,
        setFieldValue,
        setValues,
        setErrors,
        setFieldTouched,
        setTouched,
        resetForm,
        resetField,
        handleSubmit,
        useFieldModel,
        defineInputBinds,
        defineComponentBinds: defineComponentBinds,
        defineField,
        stageInitialValue,
        unsetInitialValue,
        setFieldInitialValue,
        createPathState,
        getPathState: findPathState,
        unsetPathValue,
        removePathState,
        initialValues: initialValues,
        getAllPathStates: () => pathStates.value,
        destroyPath,
        isFieldTouched,
        isFieldDirty,
        isFieldValid,
    };
    /**
     * Sets a single field value
     */
    function setFieldValue(field, value, shouldValidate = true) {
        const clonedValue = klona(value);
        const path = typeof field === 'string' ? field : field.path;
        const pathState = findPathState(path);
        if (!pathState) {
            createPathState(path);
        }
        setInPath(formValues, path, clonedValue);
        if (shouldValidate) {
            validateField(path);
        }
    }
    function forceSetValues(fields, shouldValidate = true) {
        // clean up old values
        keysOf(formValues).forEach(key => {
            delete formValues[key];
        });
        // set up new values
        keysOf(fields).forEach(path => {
            setFieldValue(path, fields[path], false);
        });
        if (shouldValidate) {
            validate();
        }
    }
    /**
     * Sets multiple fields values
     */
    function setValues(fields, shouldValidate = true) {
        merge(formValues, fields);
        // regenerate the arrays when the form values change
        fieldArrays.forEach(f => f && f.reset());
        if (shouldValidate) {
            validate();
        }
    }
    function createModel(path, shouldValidate) {
        const pathState = findPathState(toValue(path)) || createPathState(path);
        return computed({
            get() {
                return pathState.value;
            },
            set(value) {
                var _a;
                const pathValue = toValue(path);
                setFieldValue(pathValue, value, (_a = toValue(shouldValidate)) !== null && _a !== void 0 ? _a : false);
            },
        });
    }
    /**
     * Sets the touched meta state on a field
     */
    function setFieldTouched(field, isTouched) {
        const pathState = findPathState(field);
        if (pathState) {
            pathState.touched = isTouched;
        }
    }
    function isFieldTouched(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.touched;
        }
        // Find all nested paths and consider their touched state
        return pathStates.value.filter(s => s.path.startsWith(field)).some(s => s.touched);
    }
    function isFieldDirty(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.dirty;
        }
        return pathStates.value.filter(s => s.path.startsWith(field)).some(s => s.dirty);
    }
    function isFieldValid(field) {
        const pathState = findPathState(field);
        if (pathState) {
            return pathState.valid;
        }
        return pathStates.value.filter(s => s.path.startsWith(field)).every(s => s.valid);
    }
    /**
     * Sets the touched meta state on multiple fields
     */
    function setTouched(fields) {
        if (typeof fields === 'boolean') {
            mutateAllPathState(state => {
                state.touched = fields;
            });
            return;
        }
        keysOf(fields).forEach(field => {
            setFieldTouched(field, !!fields[field]);
        });
    }
    function resetField(field, state) {
        var _a;
        const newValue = state && 'value' in state ? state.value : getFromPath(initialValues.value, field);
        const pathState = findPathState(field);
        if (pathState) {
            pathState.__flags.pendingReset = true;
        }
        setFieldInitialValue(field, klona(newValue), true);
        setFieldValue(field, newValue, false);
        setFieldTouched(field, (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false);
        setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || []);
        nextTick(() => {
            if (pathState) {
                pathState.__flags.pendingReset = false;
            }
        });
    }
    /**
     * Resets all fields
     */
    function resetForm(resetState, opts) {
        let newValues = klona((resetState === null || resetState === void 0 ? void 0 : resetState.values) ? resetState.values : originalInitialValues.value);
        newValues = (opts === null || opts === void 0 ? void 0 : opts.force) ? newValues : merge(originalInitialValues.value, newValues);
        newValues = isTypedSchema(schema) && isCallable(schema.cast) ? schema.cast(newValues) : newValues;
        setInitialValues(newValues);
        mutateAllPathState(state => {
            var _a;
            state.__flags.pendingReset = true;
            state.validated = false;
            state.touched = ((_a = resetState === null || resetState === void 0 ? void 0 : resetState.touched) === null || _a === void 0 ? void 0 : _a[state.path]) || false;
            setFieldValue(state.path, getFromPath(newValues, state.path), false);
            setFieldError(state.path, undefined);
        });
        (opts === null || opts === void 0 ? void 0 : opts.force) ? forceSetValues(newValues, false) : setValues(newValues, false);
        setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {});
        submitCount.value = (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0;
        nextTick(() => {
            validate({ mode: 'silent' });
            mutateAllPathState(state => {
                state.__flags.pendingReset = false;
            });
        });
    }
    async function validate(opts) {
        const mode = (opts === null || opts === void 0 ? void 0 : opts.mode) || 'force';
        if (mode === 'force') {
            mutateAllPathState(f => (f.validated = true));
        }
        if (formCtx.validateSchema) {
            return formCtx.validateSchema(mode);
        }
        isValidating.value = true;
        // No schema, each field is responsible to validate itself
        const validations = await Promise.all(pathStates.value.map(state => {
            if (!state.validate) {
                return Promise.resolve({
                    key: state.path,
                    valid: true,
                    errors: [],
                });
            }
            return state.validate(opts).then((result) => {
                return {
                    key: state.path,
                    valid: result.valid,
                    errors: result.errors,
                };
            });
        }));
        isValidating.value = false;
        const results = {};
        const errors = {};
        for (const validation of validations) {
            results[validation.key] = {
                valid: validation.valid,
                errors: validation.errors,
            };
            if (validation.errors.length) {
                errors[validation.key] = validation.errors[0];
            }
        }
        return {
            valid: validations.every(r => r.valid),
            results,
            errors,
        };
    }
    async function validateField(path, opts) {
        var _a;
        const state = findPathState(path);
        if (state && (opts === null || opts === void 0 ? void 0 : opts.mode) !== 'silent') {
            state.validated = true;
        }
        if (schema) {
            const { results } = await validateSchema((opts === null || opts === void 0 ? void 0 : opts.mode) || 'validated-only');
            return results[path] || { errors: [], valid: true };
        }
        if (state === null || state === void 0 ? void 0 : state.validate) {
            return state.validate(opts);
        }
        !state && ((_a = opts === null || opts === void 0 ? void 0 : opts.warn) !== null && _a !== void 0 ? _a : true);
        return Promise.resolve({ errors: [], valid: true });
    }
    function unsetInitialValue(path) {
        unsetPath(initialValues.value, path);
    }
    /**
     * Sneaky function to set initial field values
     */
    function stageInitialValue(path, value, updateOriginal = false) {
        setFieldInitialValue(path, value);
        setInPath(formValues, path, value);
        if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
            setInPath(originalInitialValues.value, path, klona(value));
        }
    }
    function setFieldInitialValue(path, value, updateOriginal = false) {
        setInPath(initialValues.value, path, klona(value));
        if (updateOriginal) {
            setInPath(originalInitialValues.value, path, klona(value));
        }
    }
    async function _validateSchema() {
        const schemaValue = unref(schema);
        if (!schemaValue) {
            return { valid: true, results: {}, errors: {} };
        }
        isValidating.value = true;
        const formResult = isYupValidator(schemaValue) || isTypedSchema(schemaValue)
            ? await validateTypedSchema(schemaValue, formValues)
            : await validateObjectSchema(schemaValue, formValues, {
                names: fieldNames.value,
                bailsMap: fieldBailsMap.value,
            });
        isValidating.value = false;
        return formResult;
    }
    const submitForm = handleSubmit((_, { evt }) => {
        if (isFormSubmitEvent(evt)) {
            evt.target.submit();
        }
    });
    // Trigger initial validation
    onMounted(() => {
        if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
            setErrors(opts.initialErrors);
        }
        if (opts === null || opts === void 0 ? void 0 : opts.initialTouched) {
            setTouched(opts.initialTouched);
        }
        // if validate on mount was enabled
        if (opts === null || opts === void 0 ? void 0 : opts.validateOnMount) {
            validate();
            return;
        }
        // otherwise run initial silent validation through schema if available
        // the useField should skip their own silent validation if a yup schema is present
        if (formCtx.validateSchema) {
            formCtx.validateSchema('silent');
        }
    });
    if (isRef(schema)) {
        watch(schema, () => {
            var _a;
            (_a = formCtx.validateSchema) === null || _a === void 0 ? void 0 : _a.call(formCtx, 'validated-only');
        });
    }
    // Provide injections
    provide(FormContextKey, formCtx);
    function defineField(path, config) {
        const label = isCallable(config) ? undefined : config === null || config === void 0 ? void 0 : config.label;
        const pathState = (findPathState(toValue(path)) || createPathState(path, { label }));
        const evalConfig = () => (isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {});
        function onBlur() {
            var _a;
            pathState.touched = true;
            const validateOnBlur = (_a = evalConfig().validateOnBlur) !== null && _a !== void 0 ? _a : getConfig().validateOnBlur;
            if (validateOnBlur) {
                validateField(pathState.path);
            }
        }
        function onInput() {
            var _a;
            const validateOnInput = (_a = evalConfig().validateOnInput) !== null && _a !== void 0 ? _a : getConfig().validateOnInput;
            if (validateOnInput) {
                nextTick(() => {
                    validateField(pathState.path);
                });
            }
        }
        function onChange() {
            var _a;
            const validateOnChange = (_a = evalConfig().validateOnChange) !== null && _a !== void 0 ? _a : getConfig().validateOnChange;
            if (validateOnChange) {
                nextTick(() => {
                    validateField(pathState.path);
                });
            }
        }
        const props = computed(() => {
            const base = {
                onChange,
                onInput,
                onBlur,
            };
            if (isCallable(config)) {
                return Object.assign(Object.assign({}, base), (config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {}));
            }
            if (config === null || config === void 0 ? void 0 : config.props) {
                return Object.assign(Object.assign({}, base), config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS)));
            }
            return base;
        });
        const model = createModel(path, () => { var _a, _b, _c; return (_c = (_a = evalConfig().validateOnModelUpdate) !== null && _a !== void 0 ? _a : (_b = getConfig()) === null || _b === void 0 ? void 0 : _b.validateOnModelUpdate) !== null && _c !== void 0 ? _c : true; });
        return [model, props];
    }
    function useFieldModel(pathOrPaths) {
        if (!Array.isArray(pathOrPaths)) {
            return createModel(pathOrPaths);
        }
        return pathOrPaths.map(p => createModel(p, true));
    }
    /**
     * @deprecated use defineField instead
     */
    function defineInputBinds(path, config) {
        const [model, props] = defineField(path, config);
        function onBlur(e) {
            props.value.onBlur(e);
        }
        function onInput(e) {
            const value = normalizeEventValue(e);
            setFieldValue(toValue(path), value, false);
            props.value.onInput(e);
        }
        function onChange(e) {
            const value = normalizeEventValue(e);
            setFieldValue(toValue(path), value, false);
            props.value.onChange(e);
        }
        return computed(() => {
            return Object.assign(Object.assign({}, props.value), { onBlur,
                onInput,
                onChange, value: model.value });
        });
    }
    /**
     * @deprecated use defineField instead
     */
    function defineComponentBinds(path, config) {
        const [model, props] = defineField(path, config);
        const pathState = findPathState(toValue(path));
        function onUpdateModelValue(value) {
            model.value = value;
        }
        return computed(() => {
            const conf = isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
            return Object.assign({ [conf.model || 'modelValue']: model.value, [`onUpdate:${conf.model || 'modelValue'}`]: onUpdateModelValue }, props.value);
        });
    }
    return Object.assign(Object.assign({}, formCtx), { values: readonly(formValues), handleReset: () => resetForm(), submitForm });
}
/**
 * Manages form meta aggregation
 */
function useFormMeta(pathsState, currentValues, initialValues, errors) {
    const MERGE_STRATEGIES = {
        touched: 'some',
        pending: 'some',
        valid: 'every',
    };
    const isDirty = computed(() => {
        return !isEqual(currentValues, unref(initialValues));
    });
    function calculateFlags() {
        const states = pathsState.value;
        return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
            const mergeMethod = MERGE_STRATEGIES[flag];
            acc[flag] = states[mergeMethod](s => s[flag]);
            return acc;
        }, {});
    }
    const flags = reactive(calculateFlags());
    watchEffect(() => {
        const value = calculateFlags();
        flags.touched = value.touched;
        flags.valid = value.valid;
        flags.pending = value.pending;
    });
    return computed(() => {
        return Object.assign(Object.assign({ initialValues: unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
    });
}
/**
 * Manages the initial values prop
 */
function useFormInitialValues(pathsState, formValues, opts) {
    const values = resolveInitialValues(opts);
    // these are the mutable initial values as the fields are mounted/unmounted
    const initialValues = ref(values);
    // these are the original initial value as provided by the user initially, they don't keep track of conditional fields
    // this is important because some conditional fields will overwrite the initial values for other fields who had the same name
    // like array fields, any push/insert operation will overwrite the initial values because they "create new fields"
    // so these are the values that the reset function should use
    // these only change when the user explicitly changes the initial values or when the user resets them with new values.
    const originalInitialValues = ref(klona(values));
    function setInitialValues(values, updateFields = false) {
        initialValues.value = merge(klona(initialValues.value) || {}, klona(values));
        originalInitialValues.value = merge(klona(originalInitialValues.value) || {}, klona(values));
        if (!updateFields) {
            return;
        }
        // update the pristine non-touched fields
        // those are excluded because it's unlikely you want to change the form values using initial values
        // we mostly watch them for API population or newly inserted fields
        // if the user API is taking too much time before user interaction they should consider disabling or hiding their inputs until the values are ready
        pathsState.value.forEach(state => {
            const wasTouched = state.touched;
            if (wasTouched) {
                return;
            }
            const newValue = getFromPath(initialValues.value, state.path);
            setInPath(formValues, state.path, klona(newValue));
        });
    }
    return {
        initialValues,
        originalInitialValues,
        setInitialValues,
    };
}
function mergeValidationResults(a, b) {
    if (!b) {
        return a;
    }
    return {
        valid: a.valid && b.valid,
        errors: [...a.errors, ...b.errors],
    };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var vuedraggable_umd = {exports: {}};

var require$$0 = /*@__PURE__*/getAugmentedNamespace(vue);

/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.14.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css$2(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css$2(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css$2(container, 'transform') !== 'none' || relativeToNonStaticParent && css$2(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css$2(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css$2(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css$2(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css$2(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css$2(el, 'position', 'absolute');
  css$2(el, 'top', rect.top);
  css$2(el, 'left', rect.left);
  css$2(el, 'width', rect.width);
  css$2(el, 'height', rect.height);
}

function unsetRect(el) {
  css$2(el, 'position', '');
  css$2(el, 'top', '');
  css$2(el, 'left', '');
  css$2(el, 'width', '');
  css$2(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css$2(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css$2(target, 'transition', '');
        css$2(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css$2(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css$2(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css$2(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css$2(target, 'transition', '');
          css$2(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css$2(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css$2(child1),
      secondChildCSS = child2 && css$2(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css$2(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css$2(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css$2(ghostEl, 'webkitTransform', cssMatrix);
        css$2(ghostEl, 'mozTransform', cssMatrix);
        css$2(ghostEl, 'msTransform', cssMatrix);
        css$2(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css$2(ghostRelativeParent, 'position') === 'static' && css$2(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css$2(ghostEl, 'transition', '');
      css$2(ghostEl, 'transform', '');
      css$2(ghostEl, 'box-sizing', 'border-box');
      css$2(ghostEl, 'margin', 0);
      css$2(ghostEl, 'top', rect.top);
      css$2(ghostEl, 'left', rect.left);
      css$2(ghostEl, 'width', rect.width);
      css$2(ghostEl, 'height', rect.height);
      css$2(ghostEl, 'opacity', '0.8');
      css$2(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css$2(ghostEl, 'zIndex', '100000');
      css$2(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css$2(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css$2(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css$2(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css$2(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css$2(document.body, 'user-select', '');
    }

    css$2(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css$2(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css$2(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css$2,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css$2(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css$2(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      _ref5.sortable;
          var cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css$2(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css$2(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

var sortable_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MultiDrag: MultiDragPlugin,
  Sortable: Sortable,
  Swap: SwapPlugin,
  default: Sortable
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(sortable_esm);

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0, require$$1);
	})((typeof self !== 'undefined' ? self : commonjsGlobal), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
	/******/ })
	/************************************************************************/
	/******/ ({

	/***/ "00ee":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG] = 'z';

	module.exports = String(test) === '[object z]';


	/***/ }),

	/***/ "0366":
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__("1c0b");

	// optional / simple context binding
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


	/***/ }),

	/***/ "057f":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]'
	    ? getWindowNames(it)
	    : nativeGetOwnPropertyNames(toIndexedObject(it));
	};


	/***/ }),

	/***/ "06cf":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var propertyIsEnumerableModule = __webpack_require__("d1e7");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var toIndexedObject = __webpack_require__("fc6a");
	var toPrimitive = __webpack_require__("c04e");
	var has = __webpack_require__("5135");
	var IE8_DOM_DEFINE = __webpack_require__("0cfb");

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
	};


	/***/ }),

	/***/ "0cfb":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var fails = __webpack_require__("d039");
	var createElement = __webpack_require__("cc12");

	// Thank's IE8 for his funny defineProperty
	module.exports = !DESCRIPTORS && !fails(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});


	/***/ }),

	/***/ "13d5":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $reduce = __webpack_require__("d58f").left;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "14c3":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("c6b6");
	var regexpExec = __webpack_require__("9263");

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	module.exports = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classof(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};



	/***/ }),

	/***/ "159b":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var DOMIterables = __webpack_require__("fdbc");
	var forEach = __webpack_require__("17c2");
	var createNonEnumerableProperty = __webpack_require__("9112");

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  // some Chrome versions have non-configurable methods on DOMTokenList
	  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
	    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
	  } catch (error) {
	    CollectionPrototype.forEach = forEach;
	  }
	}


	/***/ }),

	/***/ "17c2":
	/***/ (function(module, exports, __webpack_require__) {

	var $forEach = __webpack_require__("b727").forEach;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;


	/***/ }),

	/***/ "1be4":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");

	module.exports = getBuiltIn('document', 'documentElement');


	/***/ }),

	/***/ "1c0b":
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};


	/***/ }),

	/***/ "1c7e":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR] = function () {
	    return this;
	  };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	module.exports = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};


	/***/ }),

	/***/ "1d80":
	/***/ (function(module, exports) {

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};


	/***/ }),

	/***/ "1dde":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");
	var wellKnownSymbol = __webpack_require__("b622");
	var V8_VERSION = __webpack_require__("2d00");

	var SPECIES = wellKnownSymbol('species');

	module.exports = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};


	/***/ }),

	/***/ "23cb":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");

	var max = Math.max;
	var min = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	module.exports = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min(integer, length);
	};


	/***/ }),

	/***/ "23e7":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var setGlobal = __webpack_require__("ce4e");
	var copyConstructorProperties = __webpack_require__("e893");
	var isForced = __webpack_require__("94ca");

	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	module.exports = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global;
	  } else if (STATIC) {
	    target = global[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};


	/***/ }),

	/***/ "241c":
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__("ca84");
	var enumBugKeys = __webpack_require__("7839");

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};


	/***/ }),

	/***/ "25f0":
	/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__("6eeb");
	var anObject = __webpack_require__("825a");
	var fails = __webpack_require__("d039");
	var flags = __webpack_require__("ad6d");

	var TO_STRING = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING];

	var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
	// FF44- RegExp#toString has a wrong name
	var INCORRECT_NAME = nativeToString.name != TO_STRING;

	// `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine(RegExp.prototype, TO_STRING, function toString() {
	    var R = anObject(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, { unsafe: true });
	}


	/***/ }),

	/***/ "2ca0":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var toLength = __webpack_require__("50c4");
	var notARegExp = __webpack_require__("5a34");
	var requireObjectCoercible = __webpack_require__("1d80");
	var correctIsRegExpLogic = __webpack_require__("ab13");
	var IS_PURE = __webpack_require__("c430");

	var nativeStartsWith = ''.startsWith;
	var min = Math.min;

	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
	// https://github.com/zloirock/core-js/pull/702
	var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}();

	// `String.prototype.startsWith` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
	$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
	  startsWith: function startsWith(searchString /* , position = 0 */) {
	    var that = String(requireObjectCoercible(this));
	    notARegExp(searchString);
	    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return nativeStartsWith
	      ? nativeStartsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});


	/***/ }),

	/***/ "2d00":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var userAgent = __webpack_require__("342f");

	var process = global.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	module.exports = version && +version;


	/***/ }),

	/***/ "342f":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");

	module.exports = getBuiltIn('navigator', 'userAgent') || '';


	/***/ }),

	/***/ "35a1":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("f5df");
	var Iterators = __webpack_require__("3f8c");
	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');

	module.exports = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


	/***/ }),

	/***/ "37e8":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var definePropertyModule = __webpack_require__("9bf2");
	var anObject = __webpack_require__("825a");
	var objectKeys = __webpack_require__("df75");

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
	  return O;
	};


	/***/ }),

	/***/ "3bbe":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	module.exports = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};


	/***/ }),

	/***/ "3ca3":
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__("6547").charAt;
	var InternalStateModule = __webpack_require__("69f3");
	var defineIterator = __webpack_require__("7dd0");

	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});


	/***/ }),

	/***/ "3f8c":
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),

	/***/ "4160":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var forEach = __webpack_require__("17c2");

	// `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
	  forEach: forEach
	});


	/***/ }),

	/***/ "428f":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");

	module.exports = global;


	/***/ }),

	/***/ "44ad":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");
	var classof = __webpack_require__("c6b6");

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	module.exports = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;


	/***/ }),

	/***/ "44d2":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");
	var create = __webpack_require__("7c73");
	var definePropertyModule = __webpack_require__("9bf2");

	var UNSCOPABLES = wellKnownSymbol('unscopables');
	var ArrayPrototype = Array.prototype;

	// Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create(null)
	  });
	}

	// add a key to Array.prototype[@@unscopables]
	module.exports = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};


	/***/ }),

	/***/ "44e7":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");
	var classof = __webpack_require__("c6b6");
	var wellKnownSymbol = __webpack_require__("b622");

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	module.exports = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
	};


	/***/ }),

	/***/ "4930":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});


	/***/ }),

	/***/ "4d64":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var toLength = __webpack_require__("50c4");
	var toAbsoluteIndex = __webpack_require__("23cb");

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	module.exports = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};


	/***/ }),

	/***/ "4de4":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $filter = __webpack_require__("b727").filter;
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
	// Edge 14- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

	// `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  filter: function filter(callbackfn /* , thisArg */) {
	    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "4df4":
	/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__("0366");
	var toObject = __webpack_require__("7b0b");
	var callWithSafeIterationClosing = __webpack_require__("9bdd");
	var isArrayIteratorMethod = __webpack_require__("e95a");
	var toLength = __webpack_require__("50c4");
	var createProperty = __webpack_require__("8418");
	var getIteratorMethod = __webpack_require__("35a1");

	// `Array.from` method implementation
	// https://tc39.github.io/ecma262/#sec-array.from
	module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();
	    for (;!(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = toLength(O.length);
	    result = new C(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};


	/***/ }),

	/***/ "4fad":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $entries = __webpack_require__("6f53").entries;

	// `Object.entries` method
	// https://tc39.github.io/ecma262/#sec-object.entries
	$({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});


	/***/ }),

	/***/ "50c4":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	module.exports = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};


	/***/ }),

	/***/ "5135":
	/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;

	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


	/***/ }),

	/***/ "5319":
	/***/ (function(module, exports, __webpack_require__) {

	var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
	var anObject = __webpack_require__("825a");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var toInteger = __webpack_require__("a691");
	var requireObjectCoercible = __webpack_require__("1d80");
	var advanceStringIndex = __webpack_require__("8aa5");
	var regExpExec = __webpack_require__("14c3");

	var max = Math.max;
	var min = Math.min;
	var floor = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	};

	// @@replace logic
	fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
	  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
	  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

	  return [
	    // `String.prototype.replace` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	    function replace(searchValue, replaceValue) {
	      var O = requireObjectCoercible(this);
	      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	      return replacer !== undefined
	        ? replacer.call(searchValue, O, replaceValue)
	        : nativeReplace.call(String(O), searchValue, replaceValue);
	    },
	    // `RegExp.prototype[@@replace]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	    function (regexp, replaceValue) {
	      if (
	        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
	        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
	      ) {
	        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	        if (res.done) return res.value;
	      }

	      var rx = anObject(regexp);
	      var S = String(this);

	      var functionalReplace = typeof replaceValue === 'function';
	      if (!functionalReplace) replaceValue = String(replaceValue);

	      var global = rx.global;
	      if (global) {
	        var fullUnicode = rx.unicode;
	        rx.lastIndex = 0;
	      }
	      var results = [];
	      while (true) {
	        var result = regExpExec(rx, S);
	        if (result === null) break;

	        results.push(result);
	        if (!global) break;

	        var matchStr = String(result[0]);
	        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
	      }

	      var accumulatedResult = '';
	      var nextSourcePosition = 0;
	      for (var i = 0; i < results.length; i++) {
	        result = results[i];

	        var matched = String(result[0]);
	        var position = max(min(toInteger(result.index), S.length), 0);
	        var captures = [];
	        // NOTE: This is equivalent to
	        //   captures = result.slice(1).map(maybeToString)
	        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
	        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
	        var namedCaptures = result.groups;
	        if (functionalReplace) {
	          var replacerArgs = [matched].concat(captures, position, S);
	          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	          var replacement = String(replaceValue.apply(undefined, replacerArgs));
	        } else {
	          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	        }
	        if (position >= nextSourcePosition) {
	          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	          nextSourcePosition = position + matched.length;
	        }
	      }
	      return accumulatedResult + S.slice(nextSourcePosition);
	    }
	  ];

	  // https://tc39.github.io/ecma262/#sec-getsubstitution
	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }
	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;
	      switch (ch.charAt(0)) {
	        case '$': return '$';
	        case '&': return matched;
	        case '`': return str.slice(0, position);
	        case "'": return str.slice(tailPos);
	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;
	        default: // \d\d?
	          var n = +ch;
	          if (n === 0) return match;
	          if (n > m) {
	            var f = floor(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }
	          capture = captures[n - 1];
	      }
	      return capture === undefined ? '' : capture;
	    });
	  }
	});


	/***/ }),

	/***/ "5692":
	/***/ (function(module, exports, __webpack_require__) {

	var IS_PURE = __webpack_require__("c430");
	var store = __webpack_require__("c6cd");

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.5',
	  mode: IS_PURE ? 'pure' : 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});


	/***/ }),

	/***/ "56ef":
	/***/ (function(module, exports, __webpack_require__) {

	var getBuiltIn = __webpack_require__("d066");
	var getOwnPropertyNamesModule = __webpack_require__("241c");
	var getOwnPropertySymbolsModule = __webpack_require__("7418");
	var anObject = __webpack_require__("825a");

	// all object keys, includes non-enumerable and symbols
	module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};


	/***/ }),

	/***/ "5a34":
	/***/ (function(module, exports, __webpack_require__) {

	var isRegExp = __webpack_require__("44e7");

	module.exports = function (it) {
	  if (isRegExp(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  } return it;
	};


	/***/ }),

	/***/ "5c6c":
	/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


	/***/ }),

	/***/ "5db7":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var flattenIntoArray = __webpack_require__("a2bf");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var aFunction = __webpack_require__("1c0b");
	var arraySpeciesCreate = __webpack_require__("65f0");

	// `Array.prototype.flatMap` method
	// https://github.com/tc39/proposal-flatMap
	$({ target: 'Array', proto: true }, {
	  flatMap: function flatMap(callbackfn /* , thisArg */) {
	    var O = toObject(this);
	    var sourceLen = toLength(O.length);
	    var A;
	    aFunction(callbackfn);
	    A = arraySpeciesCreate(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});


	/***/ }),

	/***/ "6547":
	/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__("a691");
	var requireObjectCoercible = __webpack_require__("1d80");

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	module.exports = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod(true)
	};


	/***/ }),

	/***/ "65f0":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");
	var isArray = __webpack_require__("e8b5");
	var wellKnownSymbol = __webpack_require__("b622");

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	module.exports = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};


	/***/ }),

	/***/ "69f3":
	/***/ (function(module, exports, __webpack_require__) {

	var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
	var global = __webpack_require__("da84");
	var isObject = __webpack_require__("861d");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var objectHas = __webpack_require__("5135");
	var sharedKey = __webpack_require__("f772");
	var hiddenKeys = __webpack_require__("d012");

	var WeakMap = global.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP) {
	  var store = new WeakMap();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;
	  set = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	module.exports = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};


	/***/ }),

	/***/ "6eeb":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var has = __webpack_require__("5135");
	var setGlobal = __webpack_require__("ce4e");
	var inspectSource = __webpack_require__("8925");
	var InternalStateModule = __webpack_require__("69f3");

	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});


	/***/ }),

	/***/ "6f53":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var objectKeys = __webpack_require__("df75");
	var toIndexedObject = __webpack_require__("fc6a");
	var propertyIsEnumerable = __webpack_require__("d1e7").f;

	// `Object.{ entries, values }` methods implementation
	var createMethod = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	module.exports = {
	  // `Object.entries` method
	  // https://tc39.github.io/ecma262/#sec-object.entries
	  entries: createMethod(true),
	  // `Object.values` method
	  // https://tc39.github.io/ecma262/#sec-object.values
	  values: createMethod(false)
	};


	/***/ }),

	/***/ "73d9":
	/***/ (function(module, exports, __webpack_require__) {

	// this method was added to unscopables after implementation
	// in popular engines, so it's moved to a separate module
	var addToUnscopables = __webpack_require__("44d2");

	addToUnscopables('flatMap');


	/***/ }),

	/***/ "7418":
	/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


	/***/ }),

	/***/ "746f":
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__("428f");
	var has = __webpack_require__("5135");
	var wrappedWellKnownSymbolModule = __webpack_require__("e538");
	var defineProperty = __webpack_require__("9bf2").f;

	module.exports = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule.f(NAME)
	  });
	};


	/***/ }),

	/***/ "7839":
	/***/ (function(module, exports) {

	// IE8- don't enum bug keys
	module.exports = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];


	/***/ }),

	/***/ "7b0b":
	/***/ (function(module, exports, __webpack_require__) {

	var requireObjectCoercible = __webpack_require__("1d80");

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	module.exports = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};


	/***/ }),

	/***/ "7c73":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");
	var defineProperties = __webpack_require__("37e8");
	var enumBugKeys = __webpack_require__("7839");
	var hiddenKeys = __webpack_require__("d012");
	var html = __webpack_require__("1be4");
	var documentCreateElement = __webpack_require__("cc12");
	var sharedKey = __webpack_require__("f772");

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties(result, Properties);
	};


	/***/ }),

	/***/ "7dd0":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var createIteratorConstructor = __webpack_require__("9ed3");
	var getPrototypeOf = __webpack_require__("e163");
	var setPrototypeOf = __webpack_require__("d2bb");
	var setToStringTag = __webpack_require__("d44e");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var wellKnownSymbol = __webpack_require__("b622");
	var IS_PURE = __webpack_require__("c430");
	var Iterators = __webpack_require__("3f8c");
	var IteratorsCore = __webpack_require__("ae93");

	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf) {
	          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
	          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;
	    defaultIterator = function values() { return nativeIterator.call(this); };
	  }

	  // define iterator
	  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
	  }
	  Iterators[NAME] = defaultIterator;

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  return methods;
	};


	/***/ }),

	/***/ "7f9a":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var inspectSource = __webpack_require__("8925");

	var WeakMap = global.WeakMap;

	module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


	/***/ }),

	/***/ "825a":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	module.exports = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};


	/***/ }),

	/***/ "83ab":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	// Thank's IE8 for his funny defineProperty
	module.exports = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});


	/***/ }),

	/***/ "8418":
	/***/ (function(module, exports, __webpack_require__) {

	var toPrimitive = __webpack_require__("c04e");
	var definePropertyModule = __webpack_require__("9bf2");
	var createPropertyDescriptor = __webpack_require__("5c6c");

	module.exports = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};


	/***/ }),

	/***/ "861d":
	/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


	/***/ }),

	/***/ "8875":
	/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
	// MIT license
	// source: https://github.com/amiller-gh/currentScript-polyfill

	// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

	(function (root, factory) {
	  {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
					__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
					(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
					__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}(typeof self !== 'undefined' ? self : this, function () {
	  function getCurrentScript () {
	    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript');
	    // for chrome
	    if (!descriptor && 'currentScript' in document && document.currentScript) {
	      return document.currentScript
	    }

	    // for other browsers with native support for currentScript
	    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
	      return document.currentScript
	    }
	  
	    // IE 8-10 support script readyState
	    // IE 11+ & Firefox support stack trace
	    try {
	      throw new Error();
	    }
	    catch (err) {
	      // Find the second match for the "at" string to get file src url from stack.
	      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
	        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
	        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
	        scriptLocation = (stackDetails && stackDetails[1]) || false,
	        line = (stackDetails && stackDetails[2]) || false,
	        currentLocation = document.location.href.replace(document.location.hash, ''),
	        pageSource,
	        inlineScriptSourceRegExp,
	        inlineScriptSource,
	        scripts = document.getElementsByTagName('script'); // Live NodeList collection
	  
	      if (scriptLocation === currentLocation) {
	        pageSource = document.documentElement.outerHTML;
	        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
	        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
	      }
	  
	      for (var i = 0; i < scripts.length; i++) {
	        // If ready state is interactive, return the script tag
	        if (scripts[i].readyState === 'interactive') {
	          return scripts[i];
	        }
	  
	        // If src matches, return the script tag
	        if (scripts[i].src === scriptLocation) {
	          return scripts[i];
	        }
	  
	        // If inline source matches, return the script tag
	        if (
	          scriptLocation === currentLocation &&
	          scripts[i].innerHTML &&
	          scripts[i].innerHTML.trim() === inlineScriptSource
	        ) {
	          return scripts[i];
	        }
	      }
	  
	      // If no match, return null
	      return null;
	    }
	  }
	  return getCurrentScript
	}));


	/***/ }),

	/***/ "8925":
	/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__("c6cd");

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof store.inspectSource != 'function') {
	  store.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	module.exports = store.inspectSource;


	/***/ }),

	/***/ "8aa5":
	/***/ (function(module, exports, __webpack_require__) {

	var charAt = __webpack_require__("6547").charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	module.exports = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};


	/***/ }),

	/***/ "8bbf":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

	/***/ }),

	/***/ "90e3":
	/***/ (function(module, exports) {

	var id = 0;
	var postfix = Math.random();

	module.exports = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};


	/***/ }),

	/***/ "9112":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var definePropertyModule = __webpack_require__("9bf2");
	var createPropertyDescriptor = __webpack_require__("5c6c");

	module.exports = DESCRIPTORS ? function (object, key, value) {
	  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


	/***/ }),

	/***/ "9263":
	/***/ (function(module, exports, __webpack_require__) {

	var regexpFlags = __webpack_require__("ad6d");
	var stickyHelpers = __webpack_require__("9f7f");

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	module.exports = patchedExec;


	/***/ }),

	/***/ "94ca":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	module.exports = isForced;


	/***/ }),

	/***/ "99af":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var fails = __webpack_require__("d039");
	var isArray = __webpack_require__("e8b5");
	var isObject = __webpack_require__("861d");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var createProperty = __webpack_require__("8418");
	var arraySpeciesCreate = __webpack_require__("65f0");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var wellKnownSymbol = __webpack_require__("b622");
	var V8_VERSION = __webpack_require__("2d00");

	var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

	// We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});

	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray(O);
	};

	var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

	// `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species
	$({ target: 'Array', proto: true, forced: FORCED }, {
	  concat: function concat(arg) { // eslint-disable-line no-unused-vars
	    var O = toObject(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = toLength(E.length);
	        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});


	/***/ }),

	/***/ "9bdd":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");

	// call something on iterator step with safe closing on error
	module.exports = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
	    throw error;
	  }
	};


	/***/ }),

	/***/ "9bf2":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var IE8_DOM_DEFINE = __webpack_require__("0cfb");
	var anObject = __webpack_require__("825a");
	var toPrimitive = __webpack_require__("c04e");

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


	/***/ }),

	/***/ "9ed3":
	/***/ (function(module, exports, __webpack_require__) {

	var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
	var create = __webpack_require__("7c73");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var setToStringTag = __webpack_require__("d44e");
	var Iterators = __webpack_require__("3f8c");

	var returnThis = function () { return this; };

	module.exports = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators[TO_STRING_TAG] = returnThis;
	  return IteratorConstructor;
	};


	/***/ }),

	/***/ "9f7f":
	/***/ (function(module, exports, __webpack_require__) {


	var fails = __webpack_require__("d039");

	// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.
	function RE(s, f) {
	  return RegExp(s, f);
	}

	exports.UNSUPPORTED_Y = fails(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	exports.BROKEN_CARET = fails(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});


	/***/ }),

	/***/ "a2bf":
	/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__("e8b5");
	var toLength = __webpack_require__("50c4");
	var bind = __webpack_require__("0366");

	// `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
	var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
	  var element;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray(element)) {
	        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }
	    sourceIndex++;
	  }
	  return targetIndex;
	};

	module.exports = flattenIntoArray;


	/***/ }),

	/***/ "a352":
	/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

	/***/ }),

	/***/ "a434":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var toAbsoluteIndex = __webpack_require__("23cb");
	var toInteger = __webpack_require__("a691");
	var toLength = __webpack_require__("50c4");
	var toObject = __webpack_require__("7b0b");
	var arraySpeciesCreate = __webpack_require__("65f0");
	var createProperty = __webpack_require__("8418");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

	var max = Math.max;
	var min = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});


	/***/ }),

	/***/ "a4d3":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var global = __webpack_require__("da84");
	var getBuiltIn = __webpack_require__("d066");
	var IS_PURE = __webpack_require__("c430");
	var DESCRIPTORS = __webpack_require__("83ab");
	var NATIVE_SYMBOL = __webpack_require__("4930");
	var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
	var fails = __webpack_require__("d039");
	var has = __webpack_require__("5135");
	var isArray = __webpack_require__("e8b5");
	var isObject = __webpack_require__("861d");
	var anObject = __webpack_require__("825a");
	var toObject = __webpack_require__("7b0b");
	var toIndexedObject = __webpack_require__("fc6a");
	var toPrimitive = __webpack_require__("c04e");
	var createPropertyDescriptor = __webpack_require__("5c6c");
	var nativeObjectCreate = __webpack_require__("7c73");
	var objectKeys = __webpack_require__("df75");
	var getOwnPropertyNamesModule = __webpack_require__("241c");
	var getOwnPropertyNamesExternal = __webpack_require__("057f");
	var getOwnPropertySymbolsModule = __webpack_require__("7418");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var definePropertyModule = __webpack_require__("9bf2");
	var propertyIsEnumerableModule = __webpack_require__("d1e7");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var redefine = __webpack_require__("6eeb");
	var shared = __webpack_require__("5692");
	var sharedKey = __webpack_require__("f772");
	var hiddenKeys = __webpack_require__("d012");
	var uid = __webpack_require__("90e3");
	var wellKnownSymbol = __webpack_require__("b622");
	var wrappedWellKnownSymbolModule = __webpack_require__("e538");
	var defineWellKnownSymbol = __webpack_require__("746f");
	var setToStringTag = __webpack_require__("d44e");
	var InternalStateModule = __webpack_require__("69f3");
	var $forEach = __webpack_require__("b727").forEach;

	var HIDDEN = sharedKey('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global.Symbol;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	var nativeDefineProperty = definePropertyModule.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDescriptor = DESCRIPTORS && fails(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;

	var wrap = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
	  setInternalState(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS) symbol.description = description;
	  return symbol;
	};

	var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject(O);
	  var key = toPrimitive(P, true);
	  anObject(Attributes);
	  if (has(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject(O);
	  var properties = toIndexedObject(Properties);
	  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
	  $forEach(keys, function (key) {
	    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive(V, true);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject(O);
	  var key = toPrimitive(P, true);
	  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
	  var result = [];
	  $forEach(names, function (key) {
	    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	};

	// `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor
	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
	    };
	    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap(tag, description);
	  };

	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return getInternalState(this).tag;
	  });

	  redefine($Symbol, 'withoutSetter', function (description) {
	    return wrap(uid(description), description);
	  });

	  propertyIsEnumerableModule.f = $propertyIsEnumerable;
	  definePropertyModule.f = $defineProperty;
	  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap(wellKnownSymbol(name), name);
	  };

	  if (DESCRIPTORS) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState(this).description;
	      }
	    });
	    if (!IS_PURE) {
	      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
	    }
	  }
	}

	$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
	  Symbol: $Symbol
	});

	$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol(name);
	});

	$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});

	$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule.f(toObject(it));
	  }
	});

	// `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify
	if ($stringify) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
	    var symbol = $Symbol();
	    // MS Edge converts symbol values to JSON as {}
	    return $stringify([symbol]) != '[null]'
	      // WebKit converts symbol values to JSON as null
	      || $stringify({ a: symbol }) != '{}'
	      // V8 throws on boxed symbols
	      || $stringify(Object(symbol)) != '{}';
	  });

	  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;
	      while (arguments.length > index) args.push(arguments[index++]);
	      $replacer = replacer;
	      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	      if (!isArray(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify.apply(null, args);
	    }
	  });
	}

	// `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
	if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
	  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	}
	// `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
	setToStringTag($Symbol, SYMBOL);

	hiddenKeys[HIDDEN] = true;


	/***/ }),

	/***/ "a630":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var from = __webpack_require__("4df4");
	var checkCorrectnessOfIteration = __webpack_require__("1c7e");

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.github.io/ecma262/#sec-array.from
	$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: from
	});


	/***/ }),

	/***/ "a640":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};


	/***/ }),

	/***/ "a691":
	/***/ (function(module, exports) {

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	module.exports = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};


	/***/ }),

	/***/ "ab13":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	var MATCH = wellKnownSymbol('match');

	module.exports = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) { /* empty */ }
	  } return false;
	};


	/***/ }),

	/***/ "ac1f":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var exec = __webpack_require__("9263");

	$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
	  exec: exec
	});


	/***/ }),

	/***/ "ad6d":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	module.exports = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};


	/***/ }),

	/***/ "ae40":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var fails = __webpack_require__("d039");
	var has = __webpack_require__("5135");

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	module.exports = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !DESCRIPTORS) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};


	/***/ }),

	/***/ "ae93":
	/***/ (function(module, exports, __webpack_require__) {

	var getPrototypeOf = __webpack_require__("e163");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var has = __webpack_require__("5135");
	var wellKnownSymbol = __webpack_require__("b622");
	var IS_PURE = __webpack_require__("c430");

	var ITERATOR = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS = false;

	var returnThis = function () { return this; };

	// `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype == undefined) IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
	  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
	}

	module.exports = {
	  IteratorPrototype: IteratorPrototype,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
	};


	/***/ }),

	/***/ "b041":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var classof = __webpack_require__("f5df");

	// `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
	  return '[object ' + classof(this) + ']';
	};


	/***/ }),

	/***/ "b0c0":
	/***/ (function(module, exports, __webpack_require__) {

	var DESCRIPTORS = __webpack_require__("83ab");
	var defineProperty = __webpack_require__("9bf2").f;

	var FunctionPrototype = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME = 'name';

	// Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name
	if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
	  defineProperty(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}


	/***/ }),

	/***/ "b622":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var shared = __webpack_require__("5692");
	var has = __webpack_require__("5135");
	var uid = __webpack_require__("90e3");
	var NATIVE_SYMBOL = __webpack_require__("4930");
	var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

	var WellKnownSymbolsStore = shared('wks');
	var Symbol = global.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

	module.exports = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};


	/***/ }),

	/***/ "b64b":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var toObject = __webpack_require__("7b0b");
	var nativeKeys = __webpack_require__("df75");
	var fails = __webpack_require__("d039");

	var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject(it));
	  }
	});


	/***/ }),

	/***/ "b727":
	/***/ (function(module, exports, __webpack_require__) {

	var bind = __webpack_require__("0366");
	var IndexedObject = __webpack_require__("44ad");
	var toObject = __webpack_require__("7b0b");
	var toLength = __webpack_require__("50c4");
	var arraySpeciesCreate = __webpack_require__("65f0");

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	module.exports = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6)
	};


	/***/ }),

	/***/ "c04e":
	/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__("861d");

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


	/***/ }),

	/***/ "c430":
	/***/ (function(module, exports) {

	module.exports = false;


	/***/ }),

	/***/ "c6b6":
	/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


	/***/ }),

	/***/ "c6cd":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var setGlobal = __webpack_require__("ce4e");

	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || setGlobal(SHARED, {});

	module.exports = store;


	/***/ }),

	/***/ "c740":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $findIndex = __webpack_require__("b727").findIndex;
	var addToUnscopables = __webpack_require__("44d2");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;

	var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

	// Shouldn't skip holes
	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

	// `Array.prototype.findIndex` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
	$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables(FIND_INDEX);


	/***/ }),

	/***/ "c8ba":
	/***/ (function(module, exports) {

	var g;

	// This works in non-strict mode
	g = (function() {
		return this;
	})();

	try {
		// This works if eval is allowed (see CSP)
		g = g || new Function("return this")();
	} catch (e) {
		// This works if the window reference is available
		if (typeof window === "object") g = window;
	}

	// g can still be undefined, but nothing to do about it...
	// We return undefined, instead of nothing here, so it's
	// easier to handle this case. if(!global) { ...}

	module.exports = g;


	/***/ }),

	/***/ "c975":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $indexOf = __webpack_require__("4d64").indexOf;
	var arrayMethodIsStrict = __webpack_require__("a640");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var nativeIndexOf = [].indexOf;

	var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD = arrayMethodIsStrict('indexOf');
	var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
	  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? nativeIndexOf.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "ca84":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var toIndexedObject = __webpack_require__("fc6a");
	var indexOf = __webpack_require__("4d64").indexOf;
	var hiddenKeys = __webpack_require__("d012");

	module.exports = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};


	/***/ }),

	/***/ "caad":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $includes = __webpack_require__("4d64").includes;
	var addToUnscopables = __webpack_require__("44d2");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

	// `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes
	$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('includes');


	/***/ }),

	/***/ "cc12":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var isObject = __webpack_require__("861d");

	var document = global.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document) && isObject(document.createElement);

	module.exports = function (it) {
	  return EXISTS ? document.createElement(it) : {};
	};


	/***/ }),

	/***/ "ce4e":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var createNonEnumerableProperty = __webpack_require__("9112");

	module.exports = function (key, value) {
	  try {
	    createNonEnumerableProperty(global, key, value);
	  } catch (error) {
	    global[key] = value;
	  } return value;
	};


	/***/ }),

	/***/ "d012":
	/***/ (function(module, exports) {

	module.exports = {};


	/***/ }),

	/***/ "d039":
	/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};


	/***/ }),

	/***/ "d066":
	/***/ (function(module, exports, __webpack_require__) {

	var path = __webpack_require__("428f");
	var global = __webpack_require__("da84");

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	module.exports = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
	    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
	};


	/***/ }),

	/***/ "d1e7":
	/***/ (function(module, exports, __webpack_require__) {

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;


	/***/ }),

	/***/ "d28b":
	/***/ (function(module, exports, __webpack_require__) {

	var defineWellKnownSymbol = __webpack_require__("746f");

	// `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator
	defineWellKnownSymbol('iterator');


	/***/ }),

	/***/ "d2bb":
	/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__("825a");
	var aPossiblePrototype = __webpack_require__("3bbe");

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);


	/***/ }),

	/***/ "d3b7":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var redefine = __webpack_require__("6eeb");
	var toString = __webpack_require__("b041");

	// `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	if (!TO_STRING_TAG_SUPPORT) {
	  redefine(Object.prototype, 'toString', toString, { unsafe: true });
	}


	/***/ }),

	/***/ "d44e":
	/***/ (function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__("9bf2").f;
	var has = __webpack_require__("5135");
	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	module.exports = function (it, TAG, STATIC) {
	  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
	    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};


	/***/ }),

	/***/ "d58f":
	/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__("1c0b");
	var toObject = __webpack_require__("7b0b");
	var IndexedObject = __webpack_require__("44ad");
	var toLength = __webpack_require__("50c4");

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction(callbackfn);
	    var O = toObject(that);
	    var self = IndexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	module.exports = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod(true)
	};


	/***/ }),

	/***/ "d784":
	/***/ (function(module, exports, __webpack_require__) {

	// TODO: Remove from `core-js@4` since it's moved to entry points
	__webpack_require__("ac1f");
	var redefine = __webpack_require__("6eeb");
	var fails = __webpack_require__("d039");
	var wellKnownSymbol = __webpack_require__("b622");
	var regexpExec = __webpack_require__("9263");
	var createNonEnumerableProperty = __webpack_require__("9112");

	var SPECIES = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	var REPLACE = wellKnownSymbol('replace');
	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	module.exports = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !(
	      REPLACE_SUPPORTS_NAMED_GROUPS &&
	      REPLACE_KEEPS_$0 &&
	      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    )) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	  }

	  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
	};


	/***/ }),

	/***/ "d81d":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var $map = __webpack_require__("b727").map;
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});


	/***/ }),

	/***/ "da84":
	/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	module.exports =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof global == 'object' && global) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

	/***/ }),

	/***/ "dbb4":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var DESCRIPTORS = __webpack_require__("83ab");
	var ownKeys = __webpack_require__("56ef");
	var toIndexedObject = __webpack_require__("fc6a");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var createProperty = __webpack_require__("8418");

	// `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	    var keys = ownKeys(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;
	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty(result, key, descriptor);
	    }
	    return result;
	  }
	});


	/***/ }),

	/***/ "dbf1":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return console; });
	function getConsole() {
	  if (typeof window !== "undefined") {
	    return window.console;
	  }

	  return global.console;
	}

	var console = getConsole();

	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

	/***/ }),

	/***/ "ddb0":
	/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__("da84");
	var DOMIterables = __webpack_require__("fdbc");
	var ArrayIteratorMethods = __webpack_require__("e260");
	var createNonEnumerableProperty = __webpack_require__("9112");
	var wellKnownSymbol = __webpack_require__("b622");

	var ITERATOR = wellKnownSymbol('iterator');
	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR] = ArrayValues;
	    }
	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }
	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	}


	/***/ }),

	/***/ "df75":
	/***/ (function(module, exports, __webpack_require__) {

	var internalObjectKeys = __webpack_require__("ca84");
	var enumBugKeys = __webpack_require__("7839");

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	module.exports = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys);
	};


	/***/ }),

	/***/ "e01a":
	/***/ (function(module, exports, __webpack_require__) {
	// `Symbol.prototype.description` getter
	// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

	var $ = __webpack_require__("23e7");
	var DESCRIPTORS = __webpack_require__("83ab");
	var global = __webpack_require__("da84");
	var has = __webpack_require__("5135");
	var isObject = __webpack_require__("861d");
	var defineProperty = __webpack_require__("9bf2").f;
	var copyConstructorProperties = __webpack_require__("e893");

	var NativeSymbol = global.Symbol;

	if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
	  // Safari 12 bug
	  NativeSymbol().description !== undefined
	)) {
	  var EmptyStringDescriptionStore = {};
	  // wrap Symbol constructor for correct work with undefined description
	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper
	      ? new NativeSymbol(description)
	      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	      : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };
	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;

	  var symbolToString = symbolPrototype.toString;
	  var native = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });

	  $({ global: true, forced: true }, {
	    Symbol: SymbolWrapper
	  });
	}


	/***/ }),

	/***/ "e163":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var toObject = __webpack_require__("7b0b");
	var sharedKey = __webpack_require__("f772");
	var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype = Object.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof
	module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectPrototype : null;
	};


	/***/ }),

	/***/ "e177":
	/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__("d039");

	module.exports = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});


	/***/ }),

	/***/ "e260":
	/***/ (function(module, exports, __webpack_require__) {

	var toIndexedObject = __webpack_require__("fc6a");
	var addToUnscopables = __webpack_require__("44d2");
	var Iterators = __webpack_require__("3f8c");
	var InternalStateModule = __webpack_require__("69f3");
	var defineIterator = __webpack_require__("7dd0");

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator
	module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
	Iterators.Arguments = Iterators.Array;

	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


	/***/ }),

	/***/ "e439":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var fails = __webpack_require__("d039");
	var toIndexedObject = __webpack_require__("fc6a");
	var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
	var DESCRIPTORS = __webpack_require__("83ab");

	var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
	var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
	  }
	});


	/***/ }),

	/***/ "e538":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");

	exports.f = wellKnownSymbol;


	/***/ }),

	/***/ "e893":
	/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__("5135");
	var ownKeys = __webpack_require__("56ef");
	var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
	var definePropertyModule = __webpack_require__("9bf2");

	module.exports = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};


	/***/ }),

	/***/ "e8b5":
	/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__("c6b6");

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	module.exports = Array.isArray || function isArray(arg) {
	  return classof(arg) == 'Array';
	};


	/***/ }),

	/***/ "e95a":
	/***/ (function(module, exports, __webpack_require__) {

	var wellKnownSymbol = __webpack_require__("b622");
	var Iterators = __webpack_require__("3f8c");

	var ITERATOR = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
	};


	/***/ }),

	/***/ "f5df":
	/***/ (function(module, exports, __webpack_require__) {

	var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
	var classofRaw = __webpack_require__("c6b6");
	var wellKnownSymbol = __webpack_require__("b622");

	var TO_STRING_TAG = wellKnownSymbol('toStringTag');
	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};


	/***/ }),

	/***/ "f772":
	/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__("5692");
	var uid = __webpack_require__("90e3");

	var keys = shared('keys');

	module.exports = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};


	/***/ }),

	/***/ "fb15":
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
	// This file is imported into lib/wc client bundles.

	if (typeof window !== 'undefined') {
	  var currentScript = window.document.currentScript;
	  {
	    var getCurrentScript = __webpack_require__("8875");
	    currentScript = getCurrentScript();

	    // for backward compatibility, because previously we directly included the polyfill
	    if (!('currentScript' in document)) {
	      Object.defineProperty(document, 'currentScript', { get: getCurrentScript });
	    }
	  }

	  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
	  if (src) {
	    __webpack_require__.p = src[1]; // eslint-disable-line
	  }
	}

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
	__webpack_require__("99af");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
	__webpack_require__("4de4");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
	__webpack_require__("4160");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
	__webpack_require__("c975");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
	__webpack_require__("d81d");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
	__webpack_require__("a434");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
	__webpack_require__("159b");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
	__webpack_require__("a4d3");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
	__webpack_require__("e439");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
	__webpack_require__("dbb4");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
	__webpack_require__("b64b");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);

	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	    if (enumerableOnly) symbols = symbols.filter(function (sym) {
	      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	    });
	    keys.push.apply(keys, symbols);
	  }

	  return keys;
	}

	function _objectSpread2(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};

	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }

	  return target;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}
	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
	__webpack_require__("e01a");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
	__webpack_require__("d28b");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
	__webpack_require__("e260");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
	__webpack_require__("d3b7");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
	__webpack_require__("3ca3");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
	__webpack_require__("ddb0");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







	function _iterableToArrayLimit(arr, i) {
	  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;
	  var _e = undefined;

	  try {
	    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}
	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
	__webpack_require__("a630");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
	__webpack_require__("fb6a");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
	__webpack_require__("b0c0");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
	__webpack_require__("25f0");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) {
	    arr2[i] = arr[i];
	  }

	  return arr2;
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}
	// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
	var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
	var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

	// CONCATENATED MODULE: ./src/util/htmlHelper.js
	function removeNode(node) {
	  if (node.parentElement !== null) {
	    node.parentElement.removeChild(node);
	  }
	}

	function insertNodeAt(fatherNode, node, position) {
	  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
	  fatherNode.insertBefore(node, refNode);
	}


	// EXTERNAL MODULE: ./src/util/console.js
	var console = __webpack_require__("dbf1");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
	__webpack_require__("13d5");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
	__webpack_require__("4fad");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
	__webpack_require__("ac1f");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
	__webpack_require__("5319");

	// CONCATENATED MODULE: ./src/util/string.js



	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}

	var regex = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(regex, function (_, c) {
	    return c.toUpperCase();
	  });
	});

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
	__webpack_require__("5db7");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
	__webpack_require__("73d9");

	// CONCATENATED MODULE: ./src/core/sortableEvents.js




	var manageAndEmit = ["Start", "Add", "Remove", "Update", "End"];
	var emit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
	var manage = ["Move"];
	var eventHandlerNames = [manage, manageAndEmit, emit].flatMap(function (events) {
	  return events;
	}).map(function (evt) {
	  return "on".concat(evt);
	});
	var events = {
	  manage: manage,
	  manageAndEmit: manageAndEmit,
	  emit: emit
	};

	function isReadOnly(eventName) {
	  return eventHandlerNames.indexOf(eventName) !== -1;
	}


	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
	__webpack_require__("caad");

	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
	__webpack_require__("2ca0");

	// CONCATENATED MODULE: ./src/util/tags.js


	var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

	function isHtmlTag(name) {
	  return tags.includes(name);
	}

	function isTransition(name) {
	  return ["transition-group", "TransitionGroup"].includes(name);
	}

	function isHtmlAttribute(value) {
	  return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
	}


	// CONCATENATED MODULE: ./src/core/componentBuilderHelper.js












	function project(entries) {
	  return entries.reduce(function (res, _ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        key = _ref2[0],
	        value = _ref2[1];

	    res[key] = value;
	    return res;
	  }, {});
	}

	function getComponentAttributes(_ref3) {
	  var $attrs = _ref3.$attrs,
	      _ref3$componentData = _ref3.componentData,
	      componentData = _ref3$componentData === void 0 ? {} : _ref3$componentData;
	  var attributes = project(Object.entries($attrs).filter(function (_ref4) {
	    var _ref5 = _slicedToArray(_ref4, 2),
	        key = _ref5[0];
	        _ref5[1];

	    return isHtmlAttribute(key);
	  }));
	  return _objectSpread2(_objectSpread2({}, attributes), componentData);
	}

	function createSortableOption(_ref6) {
	  var $attrs = _ref6.$attrs,
	      callBackBuilder = _ref6.callBackBuilder;
	  var options = project(getValidSortableEntries($attrs));
	  Object.entries(callBackBuilder).forEach(function (_ref7) {
	    var _ref8 = _slicedToArray(_ref7, 2),
	        eventType = _ref8[0],
	        eventBuilder = _ref8[1];

	    events[eventType].forEach(function (event) {
	      options["on".concat(event)] = eventBuilder(event);
	    });
	  });
	  var draggable = "[data-draggable]".concat(options.draggable || "");
	  return _objectSpread2(_objectSpread2({}, options), {}, {
	    draggable: draggable
	  });
	}

	function getValidSortableEntries(value) {
	  return Object.entries(value).filter(function (_ref9) {
	    var _ref10 = _slicedToArray(_ref9, 2),
	        key = _ref10[0];
	        _ref10[1];

	    return !isHtmlAttribute(key);
	  }).map(function (_ref11) {
	    var _ref12 = _slicedToArray(_ref11, 2),
	        key = _ref12[0],
	        value = _ref12[1];

	    return [camelize(key), value];
	  }).filter(function (_ref13) {
	    var _ref14 = _slicedToArray(_ref13, 2),
	        key = _ref14[0];
	        _ref14[1];

	    return !isReadOnly(key);
	  });
	}


	// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
	__webpack_require__("c740");

	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}
	// CONCATENATED MODULE: ./src/core/componentStructure.js








	var getHtmlElementFromNode = function getHtmlElementFromNode(_ref) {
	  var el = _ref.el;
	  return el;
	};

	var addContext = function addContext(domElement, context) {
	  return domElement.__draggable_context = context;
	};

	var getContext = function getContext(domElement) {
	  return domElement.__draggable_context;
	};

	var componentStructure_ComponentStructure = /*#__PURE__*/function () {
	  function ComponentStructure(_ref2) {
	    var _ref2$nodes = _ref2.nodes,
	        header = _ref2$nodes.header,
	        defaultNodes = _ref2$nodes.default,
	        footer = _ref2$nodes.footer,
	        root = _ref2.root,
	        realList = _ref2.realList;

	    _classCallCheck(this, ComponentStructure);

	    this.defaultNodes = defaultNodes;
	    this.children = [].concat(_toConsumableArray(header), _toConsumableArray(defaultNodes), _toConsumableArray(footer));
	    this.externalComponent = root.externalComponent;
	    this.rootTransition = root.transition;
	    this.tag = root.tag;
	    this.realList = realList;
	  }

	  _createClass(ComponentStructure, [{
	    key: "render",
	    value: function render(h, attributes) {
	      var tag = this.tag,
	          children = this.children,
	          _isRootComponent = this._isRootComponent;
	      var option = !_isRootComponent ? children : {
	        default: function _default() {
	          return children;
	        }
	      };
	      return h(tag, attributes, option);
	    }
	  }, {
	    key: "updated",
	    value: function updated() {
	      var defaultNodes = this.defaultNodes,
	          realList = this.realList;
	      defaultNodes.forEach(function (node, index) {
	        addContext(getHtmlElementFromNode(node), {
	          element: realList[index],
	          index: index
	        });
	      });
	    }
	  }, {
	    key: "getUnderlyingVm",
	    value: function getUnderlyingVm(domElement) {
	      return getContext(domElement);
	    }
	  }, {
	    key: "getVmIndexFromDomIndex",
	    value: function getVmIndexFromDomIndex(domIndex, element) {
	      var defaultNodes = this.defaultNodes;
	      var length = defaultNodes.length;
	      var domChildren = element.children;
	      var domElement = domChildren.item(domIndex);

	      if (domElement === null) {
	        return length;
	      }

	      var context = getContext(domElement);

	      if (context) {
	        return context.index;
	      }

	      if (length === 0) {
	        return 0;
	      }

	      var firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);

	      var indexFirstDomListElement = _toConsumableArray(domChildren).findIndex(function (element) {
	        return element === firstDomListElement;
	      });

	      return domIndex < indexFirstDomListElement ? 0 : length;
	    }
	  }, {
	    key: "_isRootComponent",
	    get: function get() {
	      return this.externalComponent || this.rootTransition;
	    }
	  }]);

	  return ComponentStructure;
	}();


	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

	// CONCATENATED MODULE: ./src/core/renderHelper.js









	function getSlot(slots, key) {
	  var slotValue = slots[key];
	  return slotValue ? slotValue() : [];
	}

	function computeNodes(_ref) {
	  var $slots = _ref.$slots,
	      realList = _ref.realList,
	      getKey = _ref.getKey;
	  var normalizedList = realList || [];

	  var _map = ["header", "footer"].map(function (name) {
	    return getSlot($slots, name);
	  }),
	      _map2 = _slicedToArray(_map, 2),
	      header = _map2[0],
	      footer = _map2[1];

	  var item = $slots.item;

	  if (!item) {
	    throw new Error("draggable element must have an item slot");
	  }

	  var defaultNodes = normalizedList.flatMap(function (element, index) {
	    return item({
	      element: element,
	      index: index
	    }).map(function (node) {
	      node.key = getKey(element);
	      node.props = _objectSpread2(_objectSpread2({}, node.props || {}), {}, {
	        "data-draggable": true
	      });
	      return node;
	    });
	  });

	  if (defaultNodes.length !== normalizedList.length) {
	    throw new Error("Item slot must have only one child");
	  }

	  return {
	    header: header,
	    footer: footer,
	    default: defaultNodes
	  };
	}

	function getRootInformation(tag) {
	  var transition = isTransition(tag);
	  var externalComponent = !isHtmlTag(tag) && !transition;
	  return {
	    transition: transition,
	    externalComponent: externalComponent,
	    tag: externalComponent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])(tag) : transition ? external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"] : tag
	  };
	}

	function computeComponentStructure(_ref2) {
	  var $slots = _ref2.$slots,
	      tag = _ref2.tag,
	      realList = _ref2.realList,
	      getKey = _ref2.getKey;
	  var nodes = computeNodes({
	    $slots: $slots,
	    realList: realList,
	    getKey: getKey
	  });
	  var root = getRootInformation(tag);
	  return new componentStructure_ComponentStructure({
	    nodes: nodes,
	    root: root,
	    realList: realList
	  });
	}


	// CONCATENATED MODULE: ./src/vuedraggable.js


















	function _emit(evtName, evtData) {
	  var _this = this;

	  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
	    return _this.$emit(evtName.toLowerCase(), evtData);
	  });
	}

	function _manage(evtName) {
	  var _this2 = this;

	  return function (evtData, originalElement) {
	    if (_this2.realList !== null) {
	      return _this2["onDrag".concat(evtName)](evtData, originalElement);
	    }
	  };
	}

	function _manageAndEmit(evtName) {
	  var _this3 = this;

	  var delegateCallBack = _manage.call(this, evtName);

	  return function (evtData, originalElement) {
	    delegateCallBack.call(_this3, evtData, originalElement);

	    _emit.call(_this3, evtName, evtData);
	  };
	}

	var draggingElement = null;
	var props = {
	  list: {
	    type: Array,
	    required: false,
	    default: null
	  },
	  modelValue: {
	    type: Array,
	    required: false,
	    default: null
	  },
	  itemKey: {
	    type: [String, Function],
	    required: true
	  },
	  clone: {
	    type: Function,
	    default: function _default(original) {
	      return original;
	    }
	  },
	  tag: {
	    type: String,
	    default: "div"
	  },
	  move: {
	    type: Function,
	    default: null
	  },
	  componentData: {
	    type: Object,
	    required: false,
	    default: null
	  }
	};
	var emits = ["update:modelValue", "change"].concat(_toConsumableArray([].concat(_toConsumableArray(events.manageAndEmit), _toConsumableArray(events.emit)).map(function (evt) {
	  return evt.toLowerCase();
	})));
	var draggableComponent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
	  name: "draggable",
	  inheritAttrs: false,
	  props: props,
	  emits: emits,
	  data: function data() {
	    return {
	      error: false
	    };
	  },
	  render: function render() {
	    try {
	      this.error = false;
	      var $slots = this.$slots,
	          $attrs = this.$attrs,
	          tag = this.tag,
	          componentData = this.componentData,
	          realList = this.realList,
	          getKey = this.getKey;
	      var componentStructure = computeComponentStructure({
	        $slots: $slots,
	        tag: tag,
	        realList: realList,
	        getKey: getKey
	      });
	      this.componentStructure = componentStructure;
	      var attributes = getComponentAttributes({
	        $attrs: $attrs,
	        componentData: componentData
	      });
	      return componentStructure.render(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], attributes);
	    } catch (err) {
	      this.error = true;
	      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("pre", {
	        style: {
	          color: "red"
	        }
	      }, err.stack);
	    }
	  },
	  created: function created() {
	    if (this.list !== null && this.modelValue !== null) {
	      console["a" /* console */].error("modelValue and list props are mutually exclusive! Please set one or another.");
	    }
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    if (this.error) {
	      return;
	    }

	    var $attrs = this.$attrs,
	        $el = this.$el,
	        componentStructure = this.componentStructure;
	    componentStructure.updated();
	    var sortableOptions = createSortableOption({
	      $attrs: $attrs,
	      callBackBuilder: {
	        manageAndEmit: function manageAndEmit(event) {
	          return _manageAndEmit.call(_this4, event);
	        },
	        emit: function emit(event) {
	          return _emit.bind(_this4, event);
	        },
	        manage: function manage(event) {
	          return _manage.call(_this4, event);
	        }
	      }
	    });
	    var targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
	    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(targetDomElement, sortableOptions);
	    this.targetDomElement = targetDomElement;
	    targetDomElement.__draggable_component__ = this;
	  },
	  updated: function updated() {
	    this.componentStructure.updated();
	  },
	  beforeUnmount: function beforeUnmount() {
	    if (this._sortable !== undefined) this._sortable.destroy();
	  },
	  computed: {
	    realList: function realList() {
	      var list = this.list;
	      return list ? list : this.modelValue;
	    },
	    getKey: function getKey() {
	      var itemKey = this.itemKey;

	      if (typeof itemKey === "function") {
	        return itemKey;
	      }

	      return function (element) {
	        return element[itemKey];
	      };
	    }
	  },
	  watch: {
	    $attrs: {
	      handler: function handler(newOptionValue) {
	        var _sortable = this._sortable;
	        if (!_sortable) return;
	        getValidSortableEntries(newOptionValue).forEach(function (_ref) {
	          var _ref2 = _slicedToArray(_ref, 2),
	              key = _ref2[0],
	              value = _ref2[1];

	          _sortable.option(key, value);
	        });
	      },
	      deep: true
	    }
	  },
	  methods: {
	    getUnderlyingVm: function getUnderlyingVm(domElement) {
	      return this.componentStructure.getUnderlyingVm(domElement) || null;
	    },
	    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(htmElement) {
	      //TODO check case where you need to see component children
	      return htmElement.__draggable_component__;
	    },
	    emitChanges: function emitChanges(evt) {
	      var _this5 = this;

	      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
	        return _this5.$emit("change", evt);
	      });
	    },
	    alterList: function alterList(onList) {
	      if (this.list) {
	        onList(this.list);
	        return;
	      }

	      var newList = _toConsumableArray(this.modelValue);

	      onList(newList);
	      this.$emit("update:modelValue", newList);
	    },
	    spliceList: function spliceList() {
	      var _arguments = arguments;

	      var spliceList = function spliceList(list) {
	        return list.splice.apply(list, _toConsumableArray(_arguments));
	      };

	      this.alterList(spliceList);
	    },
	    updatePosition: function updatePosition(oldIndex, newIndex) {
	      var updatePosition = function updatePosition(list) {
	        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
	      };

	      this.alterList(updatePosition);
	    },
	    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
	      var to = _ref3.to,
	          related = _ref3.related;
	      var component = this.getUnderlyingPotencialDraggableComponent(to);

	      if (!component) {
	        return {
	          component: component
	        };
	      }

	      var list = component.realList;
	      var context = {
	        list: list,
	        component: component
	      };

	      if (to !== related && list) {
	        var destination = component.getUnderlyingVm(related) || {};
	        return _objectSpread2(_objectSpread2({}, destination), context);
	      }

	      return context;
	    },
	    getVmIndexFromDomIndex: function getVmIndexFromDomIndex(domIndex) {
	      return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
	    },
	    onDragStart: function onDragStart(evt) {
	      this.context = this.getUnderlyingVm(evt.item);
	      evt.item._underlying_vm_ = this.clone(this.context.element);
	      draggingElement = evt.item;
	    },
	    onDragAdd: function onDragAdd(evt) {
	      var element = evt.item._underlying_vm_;

	      if (element === undefined) {
	        return;
	      }

	      removeNode(evt.item);
	      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
	      this.spliceList(newIndex, 0, element);
	      var added = {
	        element: element,
	        newIndex: newIndex
	      };
	      this.emitChanges({
	        added: added
	      });
	    },
	    onDragRemove: function onDragRemove(evt) {
	      insertNodeAt(this.$el, evt.item, evt.oldIndex);

	      if (evt.pullMode === "clone") {
	        removeNode(evt.clone);
	        return;
	      }

	      var _this$context = this.context,
	          oldIndex = _this$context.index,
	          element = _this$context.element;
	      this.spliceList(oldIndex, 1);
	      var removed = {
	        element: element,
	        oldIndex: oldIndex
	      };
	      this.emitChanges({
	        removed: removed
	      });
	    },
	    onDragUpdate: function onDragUpdate(evt) {
	      removeNode(evt.item);
	      insertNodeAt(evt.from, evt.item, evt.oldIndex);
	      var oldIndex = this.context.index;
	      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
	      this.updatePosition(oldIndex, newIndex);
	      var moved = {
	        element: this.context.element,
	        oldIndex: oldIndex,
	        newIndex: newIndex
	      };
	      this.emitChanges({
	        moved: moved
	      });
	    },
	    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
	      if (!relatedContext.element) {
	        return 0;
	      }

	      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
	        return el.style["display"] !== "none";
	      });

	      var currentDomIndex = domChildren.indexOf(evt.related);
	      var currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
	      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
	      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
	    },
	    onDragMove: function onDragMove(evt, originalEvent) {
	      var move = this.move,
	          realList = this.realList;

	      if (!move || !realList) {
	        return true;
	      }

	      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
	      var futureIndex = this.computeFutureIndex(relatedContext, evt);

	      var draggedContext = _objectSpread2(_objectSpread2({}, this.context), {}, {
	        futureIndex: futureIndex
	      });

	      var sendEvent = _objectSpread2(_objectSpread2({}, evt), {}, {
	        relatedContext: relatedContext,
	        draggedContext: draggedContext
	      });

	      return move(sendEvent, originalEvent);
	    },
	    onDragEnd: function onDragEnd() {
	      draggingElement = null;
	    }
	  }
	});
	/* harmony default export */ var vuedraggable = (draggableComponent);
	// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


	/* harmony default export */ __webpack_exports__["default"] = (vuedraggable);



	/***/ }),

	/***/ "fb6a":
	/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__("23e7");
	var isObject = __webpack_require__("861d");
	var isArray = __webpack_require__("e8b5");
	var toAbsoluteIndex = __webpack_require__("23cb");
	var toLength = __webpack_require__("50c4");
	var toIndexedObject = __webpack_require__("fc6a");
	var createProperty = __webpack_require__("8418");
	var wellKnownSymbol = __webpack_require__("b622");
	var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
	var arrayMethodUsesToLength = __webpack_require__("ae40");

	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});


	/***/ }),

	/***/ "fc6a":
	/***/ (function(module, exports, __webpack_require__) {

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject = __webpack_require__("44ad");
	var requireObjectCoercible = __webpack_require__("1d80");

	module.exports = function (it) {
	  return IndexedObject(requireObjectCoercible(it));
	};


	/***/ }),

	/***/ "fdbc":
	/***/ (function(module, exports) {

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	module.exports = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};


	/***/ }),

	/***/ "fdbf":
	/***/ (function(module, exports, __webpack_require__) {

	var NATIVE_SYMBOL = __webpack_require__("4930");

	module.exports = NATIVE_SYMBOL
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';


	/***/ })

	/******/ })["default"];
	});
	
} (vuedraggable_umd));

var vuedraggable_umdExports = vuedraggable_umd.exports;
var draggable = /*@__PURE__*/getDefaultExportFromCjs(vuedraggable_umdExports);

var css$1 = "\nform[data-v-51beb72a] {\n    display: flex;\n    flex-direction: column\n}\ninput[data-v-51beb72a] {\n    width: 66.666667%;\n    border-radius: 0.375rem;\n    border-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n    padding: 0.5rem;\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\nlabel[data-v-51beb72a] {\n    margin-top: 1rem;\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity))\n}\n.chapter_title[data-v-51beb72a] {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    padding: 0.25rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    font-weight: 600;\n    font-style: italic;\n    --tw-text-opacity: 1;\n    color: rgb(213 185 133 / var(--tw-text-opacity))\n}\n.article_title[data-v-51beb72a] {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    padding: 0.25rem;\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n    font-weight: 600;\n    font-style: italic;\n    --tw-text-opacity: 1;\n    color: rgb(165 181 197 / var(--tw-text-opacity))\n}\n.status[data-v-51beb72a] {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    margin-right: 0.5rem;\n    height: 0.5rem;\n    width: 0.5rem;\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(239 68 68 / var(--tw-bg-opacity))\n}\n.status[data-v-51beb72a]:hover {\n    border-width: 1px;\n    border-style: solid;\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity))\n}\n.status.active[data-v-51beb72a] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(34 197 94 / var(--tw-bg-opacity))\n}\ntd[data-v-51beb72a] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-style: none;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem\n}\ntr[data-v-51beb72a]:nth-child(even) {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity))\n}\ntr[data-v-51beb72a] {\n    display: flex;\n    align-items: center;\n    border-bottom-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity));\n    cursor: grab\n}\ntr[data-v-51beb72a]:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity))\n}\nbutton[data-v-51beb72a] {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    width: 16rem;\n    border-radius: 0.375rem;\n    border-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n    padding: 0.5rem;\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n";
n(css$1,{});

const _sfc_main$1 = {
  components: {
    draggable,
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  async setup(props) {
    const api = useApi();
    const { id } = props;
    const { getVolume } = useVolumes();
    const data = await getVolume(id);
    let sections = ref(data.sections);

    const { handleSubmit, defineField } = useForm({
      initialValues: { ...data, published_at: data.published_at.split("T")[0] },
    });

    const onSubmit = handleSubmit(async (values) => {
      const { title, number, published_at, active } = values;
      await api.patch(`/items/Volumes/${id}`, {
        title,
        number,
        published_at,
        active,
      });
    });

    const [title, titleAttrs] = defineField("title");
    const [number, numberAttrs] = defineField("number");
    const [published_at, published_atAttrs] = defineField("published_at");
    const [active, activeAttrs] = defineField("active");

    const addSection = async () => {
      const position = sections.value.length + 1;
      const response = await api.post(`/items/VolumeSections`, {
        volume_id: id,
        position,
        title: "Nouveau chapitre",
      });
      window.location.href =
        "/admin/content/VolumeSections/" + response.data.data.id;
    };

    const addArticle = async (sectionId) => {
      const position =
        sections.value.find((section) => section.id === sectionId).articles
          .length + 1;
      const response = await api.post(`/items/Articles`, {
        section_id: sectionId,
        position,
        title: "Nouvel article",
      });
      window.location.href = "/admin/content/Articles/" + response.data.data.id;
    };

    const removeArticle = async (articleId, sectionId) => {
      if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
      sections.value = sections.value.map((section) => {
        if (section.id === sectionId) {
          section.articles = section.articles.filter(
            (article) => article.id !== articleId
          );
        }
        return section;
      });

      await api.delete(`/items/Articles/${articleId}`);
    };

    const removeSection = async (sectionId) => {
      if (!confirm("Êtes-vous sûr de vouloir supprimer ce chapitre ?")) return;
      sections.value = sections.value.filter(
        (section) => section.id !== sectionId
      );
      await api.delete(`/items/VolumeSections/${sectionId}`);
    };

    const onPositionChange = (elem) => {
      const { element } = elem.moved;
      const section = sections.value.find(
        (section) => section.id === element.section_id
      );
      section.articles.forEach((article, index) => {
        article.position = index + 1;
        api.patch(`/items/Articles/${article.id}`, {
          position: article.position,
        });
      });
    };

    const toggleActive = async (sectionId, articleId) => {
      let active;
      sections.value = sections.value.map((section) => {
        if (section.id === sectionId) {
          section.articles = section.articles.map((article) => {
            if (article.id === articleId) {
              article.active = !article.active;
              active = article.active;
            }
            return article;
          });
        }
        return section;
      });
      await api.patch(`/items/Articles/${articleId}`, {
        active,
      });
    };

    return {
      title,
      titleAttrs,
      number,
      numberAttrs,
      published_at,
      published_atAttrs,
      active,
      activeAttrs,
      onSubmit,
      data,
      addSection,
      addArticle,
      removeArticle,
      removeSection,
      sections,
      onPositionChange,
      toggleActive,
    };
  },
};

const _withScopeId = n => (pushScopeId("data-v-51beb72a"),n=n(),popScopeId(),n);
const _hoisted_1$1 = { class: "px-4" };
const _hoisted_2 = { class: "relative inline-flex items-center cursor-pointer" };
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }, null, -1 /* HOISTED */));
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("span", { class: "ms-3 font-medium text-gray-900 dark:text-gray-300" }, "En ligne", -1 /* HOISTED */));
const _hoisted_5 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("label", null, "Titre du volume ", -1 /* HOISTED */));
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("label", null, "Numéro du volume ", -1 /* HOISTED */));
const _hoisted_7 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("label", null, "Date de publication ", -1 /* HOISTED */));
const _hoisted_8 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/createElementVNode("button", null, "Enregistrer", -1 /* HOISTED */));
const _hoisted_9 = { class: "chapter_title mt-8" };
const _hoisted_10 = { class: "relative border-b border-gray-800 items-center flex justify-between" };
const _hoisted_11 = { class: "w-full article_title" };
const _hoisted_12 = ["href"];
const _hoisted_13 = { class: "" };
const _hoisted_14 = { class: "h-full py-10" };
const _hoisted_15 = ["title", "onClick"];
const _hoisted_16 = { class: "w-full" };
const _hoisted_17 = ["href"];
const _hoisted_18 = ["onClick"];

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VIcon = resolveComponent("VIcon");
  const _component_draggable = resolveComponent("draggable");

  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("form", {
      onSubmit: _cache[4] || (_cache[4] = (...args) => ($setup.onSubmit && $setup.onSubmit(...args)))
    }, [
      createElementVNode("label", _hoisted_2, [
        withDirectives(createElementVNode("input", mergeProps({
          type: "checkbox",
          value: "",
          class: "sr-only peer",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.active) = $event))
        }, $setup.activeAttrs), null, 16 /* FULL_PROPS */), [
          [vModelCheckbox, $setup.active]
        ]),
        _hoisted_3,
        _hoisted_4
      ]),
      _hoisted_5,
      withDirectives(createElementVNode("input", mergeProps({
        type: "text",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.title) = $event))
      }, $setup.titleAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.title]
      ]),
      _hoisted_6,
      withDirectives(createElementVNode("input", mergeProps({
        type: "text",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.number) = $event))
      }, $setup.numberAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.number]
      ]),
      _hoisted_7,
      withDirectives(createElementVNode("input", mergeProps({
        type: "date",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.published_at) = $event))
      }, $setup.published_atAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.published_at]
      ]),
      _hoisted_8
    ], 32 /* NEED_HYDRATION */),
    createElementVNode("h3", _hoisted_9, " Liste des chapitres et articles associés au numéro \"" + toDisplayString($setup.title) + "\" ", 1 /* TEXT */),
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.sections, (section) => {
      return (openBlock(), createElementBlock("div", {
        key: section.id
      }, [
        createElementVNode("div", _hoisted_10, [
          createElementVNode("h4", _hoisted_11, toDisplayString(section.title), 1 /* TEXT */),
          createElementVNode("a", {
            class: "",
            href: `/admin/content/VolumeSections/${section.id}`
          }, [
            createVNode(_component_VIcon, {
              name: "edit",
              title: "Modifier le chapitre"
            })
          ], 8 /* PROPS */, _hoisted_12),
          createVNode(_component_VIcon, {
            title: "Supprimer le chapitre",
            class: "cursor-pointer",
            name: "close",
            onClick: $event => ($setup.removeSection(section.id))
          }, null, 8 /* PROPS */, ["onClick"])
        ]),
        createVNode(_component_draggable, {
          modelValue: section.articles,
          "onUpdate:modelValue": $event => ((section.articles) = $event),
          onChange: $setup.onPositionChange,
          onStart: _cache[5] || (_cache[5] = $event => (_ctx.drag = true)),
          onEnd: _cache[6] || (_cache[6] = $event => (_ctx.drag = false)),
          "item-key": "id"
        }, {
          item: withCtx(({ element: article }) => [
            createElementVNode("tr", _hoisted_13, [
              createElementVNode("td", null, [
                createVNode(_component_VIcon, {
                  name: "menu",
                  title: "Glisser-déposer"
                })
              ]),
              createElementVNode("td", _hoisted_14, [
                createElementVNode("span", {
                  class: normalizeClass(["status cursor-pointer", { active: article.active }]),
                  title: $setup.active ? 'Désactiver' : 'Activer',
                  onClick: $event => ($setup.toggleActive(section.id, article.id))
                }, null, 10 /* CLASS, PROPS */, _hoisted_15)
              ]),
              createElementVNode("td", _hoisted_16, [
                createElementVNode("h5", null, toDisplayString(article.title), 1 /* TEXT */)
              ]),
              createElementVNode("td", null, [
                createElementVNode("a", {
                  href: `/admin/content/Articles/${article.id}`
                }, [
                  createVNode(_component_VIcon, {
                    name: "edit",
                    title: "Modifier l'article"
                  })
                ], 8 /* PROPS */, _hoisted_17),
                createVNode(_component_VIcon, {
                  title: "Supprimer l'article",
                  class: "cursor-pointer",
                  name: "close",
                  onClick: $event => ($setup.removeArticle(article.id, section.id))
                }, null, 8 /* PROPS */, ["onClick"])
              ])
            ])
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "onChange"]),
        createElementVNode("button", {
          class: "mt-4",
          onClick: $event => ($setup.addArticle(section.id))
        }, [
          createTextVNode(" Ajouter un article "),
          createVNode(_component_VIcon, { name: "add" })
        ], 8 /* PROPS */, _hoisted_18)
      ]))
    }), 128 /* KEYED_FRAGMENT */)),
    createElementVNode("button", {
      class: "mt-8",
      onClick: _cache[7] || (_cache[7] = (...args) => ($setup.addSection && $setup.addSection(...args)))
    }, [
      createTextVNode(" Ajouter un chapitre "),
      createVNode(_component_VIcon, { name: "add" })
    ])
  ]))
}
var VolumeEdit = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__scopeId',"data-v-51beb72a"],['__file',"VolumeEdit.vue"]]);

const _sfc_main = {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  components: { VolumeEdit, Suspense },

  setup(props) {
    const { id } = props;



    return {id};
  },
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("div", null, "Loading...", -1 /* HOISTED */);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VolumeEdit = resolveComponent("VolumeEdit");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Modifier un volume" }, {
    default: withCtx(() => [
      (openBlock(), createBlock(Suspense, null, {
        default: withCtx(() => [
          createVNode(_component_VolumeEdit, { id: $setup.id }, null, 8 /* PROPS */, ["id"])
        ]),
        fallback: withCtx(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      }))
    ]),
    _: 1 /* STABLE */
  }))
}
var EditComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"edit.vue"]]);

var css = "/*\n! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[type='checkbox'],[type='radio'],[multiple],textarea,select {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [type='checkbox']:focus, [type='radio']:focus, [multiple]:focus, textarea:focus, select:focus {\n  outline: none;\n}\n\n[type='text']::-webkit-search-decoration, [type='email']::-webkit-search-decoration, [type='url']::-webkit-search-decoration, [type='password']::-webkit-search-decoration, [type='number']::-webkit-search-decoration, [type='date']::-webkit-search-decoration, [type='datetime-local']::-webkit-search-decoration, [type='month']::-webkit-search-decoration, [type='search']::-webkit-search-decoration, [type='tel']::-webkit-search-decoration, [type='time']::-webkit-search-decoration, [type='week']::-webkit-search-decoration, [type='checkbox']::-webkit-search-decoration, [type='radio']::-webkit-search-decoration, [multiple]::-webkit-search-decoration, textarea::-webkit-search-decoration, select::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n[type='text']::-webkit-search-cancel-button, [type='email']::-webkit-search-cancel-button, [type='url']::-webkit-search-cancel-button, [type='password']::-webkit-search-cancel-button, [type='number']::-webkit-search-cancel-button, [type='date']::-webkit-search-cancel-button, [type='datetime-local']::-webkit-search-cancel-button, [type='month']::-webkit-search-cancel-button, [type='search']::-webkit-search-cancel-button, [type='tel']::-webkit-search-cancel-button, [type='time']::-webkit-search-cancel-button, [type='week']::-webkit-search-cancel-button, [type='checkbox']::-webkit-search-cancel-button, [type='radio']::-webkit-search-cancel-button, [multiple]::-webkit-search-cancel-button, textarea::-webkit-search-cancel-button, select::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n\n[type='text']::-webkit-search-results-button, [type='email']::-webkit-search-results-button, [type='url']::-webkit-search-results-button, [type='password']::-webkit-search-results-button, [type='number']::-webkit-search-results-button, [type='date']::-webkit-search-results-button, [type='datetime-local']::-webkit-search-results-button, [type='month']::-webkit-search-results-button, [type='search']::-webkit-search-results-button, [type='tel']::-webkit-search-results-button, [type='time']::-webkit-search-results-button, [type='week']::-webkit-search-results-button, [type='checkbox']::-webkit-search-results-button, [type='radio']::-webkit-search-results-button, [multiple]::-webkit-search-results-button, textarea::-webkit-search-results-button, select::-webkit-search-results-button {\n  -webkit-appearance: none;\n}\n\n[type='text']::-webkit-search-results-decoration, [type='email']::-webkit-search-results-decoration, [type='url']::-webkit-search-results-decoration, [type='password']::-webkit-search-results-decoration, [type='number']::-webkit-search-results-decoration, [type='date']::-webkit-search-results-decoration, [type='datetime-local']::-webkit-search-results-decoration, [type='month']::-webkit-search-results-decoration, [type='search']::-webkit-search-results-decoration, [type='tel']::-webkit-search-results-decoration, [type='time']::-webkit-search-results-decoration, [type='week']::-webkit-search-results-decoration, [type='checkbox']::-webkit-search-results-decoration, [type='radio']::-webkit-search-results-decoration, [multiple]::-webkit-search-results-decoration, textarea::-webkit-search-results-decoration, select::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  color: var(--vf-color-placeholder);\n}\n\ninput::placeholder,textarea::placeholder {\n  color: var(--vf-color-placeholder);\n}\n\n[multiple] {\n  background-image: initial;\n  background-position: initial;\n  background-repeat: unset;\n  background-size: initial;\n  -webkit-print-color-adjust: unset;\n          print-color-adjust: unset;\n}\n\n:root,*,::before,::after {\n  --vf-primary: #07bf9b;\n  --vf-primary-darker: #06ac8b;\n  --vf-danger: #ef4444;\n  --vf-danger-lighter: #fee2e2;\n  --vf-success: #22c55e;\n  --vf-success-lighter: #dcfce7;\n  --vf-ring-color: #07bf9b66;\n  --vf-ring-width: 2px;\n  --vf-link-color: var(--vf-primary);\n  --vf-link-decoration: none;\n  --vf-gray-50: #f9fafb;\n  --vf-gray-100: #f3f4f6;\n  --vf-gray-200: #e5e7eb;\n  --vf-gray-300: #d1d5db;\n  --vf-gray-400: #9ca3af;\n  --vf-gray-500: #6b7280;\n  --vf-gray-600: #4b5563;\n  --vf-gray-700: #374151;\n  --vf-gray-800: #1f2937;\n  --vf-gray-900: #111827;\n  --vf-font-size: 1rem;\n  --vf-font-size-sm: 0.875rem;\n  --vf-font-size-lg: 1rem;\n  --vf-font-size-small: 0.875rem;\n  --vf-font-size-small-sm: 0.8125rem;\n  --vf-font-size-small-lg: 0.875rem;\n  --vf-font-size-h1: 2.125rem;\n  --vf-font-size-h1-sm: 2.125rem;\n  --vf-font-size-h1-lg: 2.125rem;\n  --vf-font-size-h2: 1.875rem;\n  --vf-font-size-h2-sm: 1.875rem;\n  --vf-font-size-h2-lg: 1.875rem;\n  --vf-font-size-h3: 1.5rem;\n  --vf-font-size-h3-sm: 1.5rem;\n  --vf-font-size-h3-lg: 1.5rem;\n  --vf-font-size-h4: 1.25rem;\n  --vf-font-size-h4-sm: 1.25rem;\n  --vf-font-size-h4-lg: 1.25rem;\n  --vf-font-size-h1-mobile: 1.5rem;\n  --vf-font-size-h1-mobile-sm: 1.5rem;\n  --vf-font-size-h1-mobile-lg: 1.5rem;\n  --vf-font-size-h2-mobile: 1.25rem;\n  --vf-font-size-h2-mobile-sm: 1.25rem;\n  --vf-font-size-h2-mobile-lg: 1.25rem;\n  --vf-font-size-h3-mobile: 1.125rem;\n  --vf-font-size-h3-mobile-sm: 1.125rem;\n  --vf-font-size-h3-mobile-lg: 1.125rem;\n  --vf-font-size-h4-mobile: 1rem;\n  --vf-font-size-h4-mobile-sm: 1rem;\n  --vf-font-size-h4-mobile-lg: 1rem;\n  --vf-line-height: 1.5rem;\n  --vf-line-height-sm: 1.25rem;\n  --vf-line-height-lg: 1.5rem;\n  --vf-line-height-small: 1.25rem;\n  --vf-line-height-small-sm: 1.125rem;\n  --vf-line-height-small-lg: 1.25rem;\n  --vf-line-height-headings: 1.2;\n  --vf-line-height-headings-sm: 1.2;\n  --vf-line-height-headings-lg: 1.2;\n  --vf-line-height-blockquote: 1.5rem;\n  --vf-line-height-blockquote-sm: 1.25rem;\n  --vf-line-height-blockquote-lg: 1.5rem;\n  --vf-letter-spacing: 0;\n  --vf-letter-spacing-sm: 0;\n  --vf-letter-spacing-lg: 0;\n  --vf-letter-spacing-small: 0;\n  --vf-letter-spacing-small-sm: 0;\n  --vf-letter-spacing-small-lg: 0;\n  --vf-letter-spacing-headings: 0;\n  --vf-letter-spacing-headings-sm: 0;\n  --vf-letter-spacing-headings-lg: 0;\n  --vf-letter-spacing-blockquote: 0;\n  --vf-letter-spacing-blockquote-sm: 0;\n  --vf-letter-spacing-blockquote-lg: 0;\n  --vf-gutter: 1rem;\n  --vf-gutter-sm: 0.5rem;\n  --vf-gutter-lg: 1rem;\n  --vf-min-height-input: 2.375rem;\n  --vf-min-height-input-sm: 2.125rem;\n  --vf-min-height-input-lg: 2.875rem;\n  --vf-py-input: 0.375rem;\n  --vf-py-input-sm: 0.375rem;\n  --vf-py-input-lg: 0.625rem;\n  --vf-px-input: 0.75rem;\n  --vf-px-input-sm: 0.5rem;\n  --vf-px-input-lg: 0.875rem;\n  --vf-py-btn: 0.375rem;\n  --vf-py-btn-sm: 0.375rem;\n  --vf-py-btn-lg: 0.625rem;\n  --vf-px-btn: 0.875rem;\n  --vf-px-btn-sm: 0.75rem;\n  --vf-px-btn-lg: 1.25rem;\n  --vf-py-btn-small: 0.25rem;\n  --vf-py-btn-small-sm: 0.25rem;\n  --vf-py-btn-small-lg: 0.375rem;\n  --vf-px-btn-small: 0.625rem;\n  --vf-px-btn-small-sm: 0.625rem;\n  --vf-px-btn-small-lg: 0.75rem;\n  --vf-py-group-tabs: var(--vf-py-input);\n  --vf-py-group-tabs-sm: var(--vf-py-input-sm);\n  --vf-py-group-tabs-lg: var(--vf-py-input-lg);\n  --vf-px-group-tabs: var(--vf-px-input);\n  --vf-px-group-tabs-sm: var(--vf-px-input-sm);\n  --vf-px-group-tabs-lg: var(--vf-px-input-lg);\n  --vf-py-group-blocks: 0.75rem;\n  --vf-py-group-blocks-sm: 0.625rem;\n  --vf-py-group-blocks-lg: 0.875rem;\n  --vf-px-group-blocks: 1rem;\n  --vf-px-group-blocks-sm: 1rem;\n  --vf-px-group-blocks-lg: 1rem;\n  --vf-py-tag: 0px;\n  --vf-py-tag-sm: var(--vf-py-tag);\n  --vf-py-tag-lg: var(--vf-py-tag);\n  --vf-px-tag: 0.4375rem;\n  --vf-px-tag-sm: var(--vf-px-tag);\n  --vf-px-tag-lg: var(--vf-px-tag);\n  --vf-py-slider-tooltip: 0.125rem;\n  --vf-py-slider-tooltip-sm: 0.0625rem;\n  --vf-py-slider-tooltip-lg: 0.1875rem;\n  --vf-px-slider-tooltip: 0.375rem;\n  --vf-px-slider-tooltip-sm: 0.3125rem;\n  --vf-px-slider-tooltip-lg: 0.5rem;\n  --vf-py-blockquote: 0.25rem;\n  --vf-py-blockquote-sm: 0.25rem;\n  --vf-py-blockquote-lg: 0.25rem;\n  --vf-px-blockquote: 0.75rem;\n  --vf-px-blockquote-sm: 0.75rem;\n  --vf-px-blockquote-lg: 0.75rem;\n  --vf-py-hr: 0.25rem;\n  --vf-space-addon: 0px;\n  --vf-space-addon-sm: var(--vf-space-addon);\n  --vf-space-addon-lg: var(--vf-space-addon);\n  --vf-space-checkbox: 0.375rem;\n  --vf-space-checkbox-sm: var(--vf-space-checkbox);\n  --vf-space-checkbox-lg: var(--vf-space-checkbox);\n  --vf-space-tags: 0.1875rem;\n  --vf-space-tags-sm: var(--vf-space-tags);\n  --vf-space-tags-lg: var(--vf-space-tags);\n  --vf-space-static-tag-1: 1rem;\n  --vf-space-static-tag-2: 2rem;\n  --vf-space-static-tag-3: 3rem;\n  --vf-floating-top: 0px;\n  --vf-floating-top-sm: 0px;\n  --vf-floating-top-lg: 0.6875rem;\n  --vf-bg-input: #ffffff;\n  --vf-bg-input-hover: var(--vf-bg-input);\n  --vf-bg-input-focus: var(--vf-bg-input);\n  --vf-bg-input-danger: var(--vf-bg-input);\n  --vf-bg-input-success: var(--vf-bg-input);\n  --vf-bg-disabled: var(--vf-gray-200);\n  --vf-bg-selected: rgba(17,24,39,0.05);\n  --vf-bg-passive: var(--vf-gray-300);\n  --vf-bg-icon: var(--vf-gray-500);\n  --vf-bg-danger: var(--vf-danger-lighter);\n  --vf-bg-success: var(--vf-success-lighter);\n  --vf-bg-tag: var(--vf-primary);\n  --vf-bg-slider-handle: var(--vf-primary);\n  --vf-bg-toggle-handle: #ffffff;\n  --vf-bg-date-head: var(--vf-gray-100);\n  --vf-bg-addon: transparent;\n  --vf-bg-btn: var(--vf-primary);\n  --vf-bg-btn-danger: var(--vf-danger);\n  --vf-bg-btn-secondary: var(--vf-gray-200);\n  --vf-color-input: var(--vf-gray-800);\n  --vf-color-input-hover: var(--vf-color-input);\n  --vf-color-input-focus: var(--vf-color-input);\n  --vf-color-input-danger: var(--vf-color-input);\n  --vf-color-input-success: var(--vf-color-input);\n  --vf-color-disabled: var(--vf-gray-400);\n  --vf-color-placeholder: var(--vf-gray-300);\n  --vf-color-passive: var(--vf-gray-700);\n  --vf-color-muted: var(--vf-gray-500);\n  --vf-color-floating: var(--vf-color-muted);\n  --vf-color-floating-focus: var(--vf-color-floating);\n  --vf-color-floating-success: var(--vf-color-floating);\n  --vf-color-floating-danger: var(--vf-color-floating);\n  --vf-color-on-primary: #ffffff;\n  --vf-color-danger: var(--vf-danger);\n  --vf-color-success: var(--vf-success);\n  --vf-color-tag: var(--vf-color-on-primary);\n  --vf-color-addon: inherit;\n  --vf-color-date-head: var(--vf-gray-700);\n  --vf-color-btn: var(--vf-color-on-primary);\n  --vf-color-btn-danger: #ffffff;\n  --vf-color-btn-secondary: var(--vf-gray-700);\n  --vf-border-color-input: var(--vf-gray-300);\n  --vf-border-color-input-hover: var(--vf-border-color-input);\n  --vf-border-color-input-focus: var(--vf-primary);\n  --vf-border-color-input-danger: var(--vf-border-color-input);\n  --vf-border-color-input-success: var(--vf-border-color-input);\n  --vf-border-color-checked: var(--vf-primary);\n  --vf-border-color-passive: var(--vf-gray-300);\n  --vf-border-color-slider-tooltip: var(--vf-primary);\n  --vf-border-color-tag: var(--vf-primary);\n  --vf-border-color-btn: var(--vf-primary);\n  --vf-border-color-btn-danger: var(--vf-danger);\n  --vf-border-color-btn-secondary: var(--vf-gray-200);\n  --vf-border-color-blockquote: var(--vf-gray-300);\n  --vf-border-color-hr: var(--vf-gray-300);\n  --vf-border-width-input-t: 1px;\n  --vf-border-width-input-r: 1px;\n  --vf-border-width-input-b: 1px;\n  --vf-border-width-input-l: 1px;\n  --vf-border-width-radio-t: var(--vf-border-width-input-t);\n  --vf-border-width-radio-r: var(--vf-border-width-input-r);\n  --vf-border-width-radio-b: var(--vf-border-width-input-b);\n  --vf-border-width-radio-l: var(--vf-border-width-input-l);\n  --vf-border-width-checkbox-t: var(--vf-border-width-input-t);\n  --vf-border-width-checkbox-r: var(--vf-border-width-input-r);\n  --vf-border-width-checkbox-b: var(--vf-border-width-input-b);\n  --vf-border-width-checkbox-l: var(--vf-border-width-input-l);\n  --vf-border-width-dropdown: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  --vf-border-width-btn: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n  --vf-border-width-toggle: 0.125rem;\n  --vf-border-width-tag: 1px;\n  --vf-border-width-blockquote: 3px;\n  --vf-shadow-input: 0px 0px 0px 0px rgba(0,0,0,0);\n  --vf-shadow-input-hover: var(--vf-shadow-input);\n  --vf-shadow-input-focus: var(--vf-shadow-input);\n  --vf-shadow-handles: 0px 0px 0px 0px rgba(0,0,0,0);\n  --vf-shadow-handles-hover: var(--vf-shadow-input-hover);\n  --vf-shadow-handles-focus: var(--vf-shadow-input-focus);\n  --vf-shadow-btn: var(--vf-shadow-input);\n  --vf-shadow-dropdown: var(--vf-shadow-input);\n  --vf-radius-input: 0.25rem;\n  --vf-radius-input-sm: var(--vf-radius-input);\n  --vf-radius-input-lg: var(--vf-radius-input);\n  --vf-radius-btn: var(--vf-radius-input);\n  --vf-radius-btn-sm: var(--vf-radius-input-sm);\n  --vf-radius-btn-lg: var(--vf-radius-input);\n  --vf-radius-small: var(--vf-radius-input);\n  --vf-radius-small-sm: var(--vf-radius-input-sm);\n  --vf-radius-small-lg: var(--vf-radius-input);\n  --vf-radius-large: var(--vf-radius-input);\n  --vf-radius-large-sm: var(--vf-radius-input-sm);\n  --vf-radius-large-lg: var(--vf-radius-input);\n  --vf-radius-tag: var(--vf-radius-input);\n  --vf-radius-tag-sm: var(--vf-radius-input-sm);\n  --vf-radius-tag-lg: var(--vf-radius-input);\n  --vf-radius-checkbox: var(--vf-radius-input);\n  --vf-radius-checkbox-sm: var(--vf-radius-input-sm);\n  --vf-radius-checkbox-lg: var(--vf-radius-input);\n  --vf-radius-slider: var(--vf-radius-input);\n  --vf-radius-slider-sm: var(--vf-radius-input-sm);\n  --vf-radius-slider-lg: var(--vf-radius-input);\n  --vf-radius-image: var(--vf-radius-input);\n  --vf-radius-image-sm: var(--vf-radius-input-sm);\n  --vf-radius-image-lg: var(--vf-radius-input);\n  --vf-radius-gallery: var(--vf-radius-input);\n  --vf-radius-gallery-sm: var(--vf-radius-input-sm);\n  --vf-radius-gallery-lg: var(--vf-radius-input);\n  --vf-checkbox-size: 1rem;\n  --vf-checkbox-size-sm: 0.875rem;\n  --vf-checkbox-size-lg: 1rem;\n  --vf-gallery-size: 6rem;\n  --vf-gallery-size-sm: 5rem;\n  --vf-gallery-size-lg: 7rem;\n  --vf-toggle-width: 3rem;\n  --vf-toggle-width-sm: 2.75rem;\n  --vf-toggle-width-lg: 3rem;\n  --vf-toggle-height: 1.25rem;\n  --vf-toggle-height-sm: 1rem;\n  --vf-toggle-height-lg: 1.25rem;\n  --vf-slider-height: 0.375rem;\n  --vf-slider-height-sm: 0.3125rem;\n  --vf-slider-height-lg: 0.5rem;\n  --vf-slider-height-vertical: 20rem;\n  --vf-slider-height-vertical-sm: var(--vf-slider-height-vertical);\n  --vf-slider-height-vertical-lg: var(--vf-slider-height-vertical);\n  --vf-slider-handle-size: 1rem;\n  --vf-slider-handle-size-sm: 0.875rem;\n  --vf-slider-handle-size-lg: 1.25rem;\n  --vf-slider-tooltip-distance: 0.5rem;\n  --vf-slider-tooltip-distance-sm: 0.375rem;\n  --vf-slider-tooltip-distance-lg: 0.5rem;\n  --vf-slider-tooltip-arrow-size: 0.3125rem;\n  --vf-slider-tooltip-arrow-size-sm: var(--vf-slider-tooltip-arrow-size);\n  --vf-slider-tooltip-arrow-size-lg: var(--vf-slider-tooltip-arrow-size);\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.pointer-events-auto {\n  pointer-events: auto;\n}\n.visible {\n  visibility: visible;\n}\n.invisible {\n  visibility: hidden;\n}\n.static {\n  position: static;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.-bottom-px {\n  bottom: -1px;\n}\n.-left-px {\n  left: -1px;\n}\n.-right-px {\n  right: -1px;\n}\n.-top-0 {\n  top: -0px;\n}\n.-top-0\\.5 {\n  top: -0.125rem;\n}\n.bottom-0 {\n  bottom: 0px;\n}\n.bottom-0\\.5 {\n  bottom: 0.125rem;\n}\n.bottom-1 {\n  bottom: 0.25rem;\n}\n.bottom-8 {\n  bottom: 2rem;\n}\n.bottom-auto {\n  bottom: auto;\n}\n.left-0 {\n  left: 0px;\n}\n.left-0\\.5 {\n  left: 0.125rem;\n}\n.left-1 {\n  left: 0.25rem;\n}\n.left-1\\/2 {\n  left: 50%;\n}\n.left-5 {\n  left: 1.25rem;\n}\n.left-full {\n  left: 100%;\n}\n.right-0 {\n  right: 0px;\n}\n.right-0\\.5 {\n  right: 0.125rem;\n}\n.right-1 {\n  right: 0.25rem;\n}\n.right-5 {\n  right: 1.25rem;\n}\n.right-full {\n  right: 100%;\n}\n.top-0 {\n  top: 0px;\n}\n.top-0\\.5 {\n  top: 0.125rem;\n}\n.top-1\\/2 {\n  top: 50%;\n}\n.top-6 {\n  top: 1.5rem;\n}\n.top-px {\n  top: 1px;\n}\n.z-0 {\n  z-index: 0;\n}\n.z-1 {\n  z-index: 1;\n}\n.z-999 {\n  z-index: 999;\n}\n.-order-1 {\n  order: -1;\n}\n.order-1 {\n  order: 1;\n}\n.order-2 {\n  order: 2;\n}\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-span-10 {\n  grid-column: span 10 / span 10;\n}\n.col-span-11 {\n  grid-column: span 11 / span 11;\n}\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n.col-span-7 {\n  grid-column: span 7 / span 7;\n}\n.col-span-8 {\n  grid-column: span 8 / span 8;\n}\n.col-span-9 {\n  grid-column: span 9 / span 9;\n}\n.float-right {\n  float: right;\n}\n.float-left {\n  float: left;\n}\n.m-0 {\n  margin: 0px;\n}\n.mx-0 {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.mx-0\\.5 {\n  margin-left: 0.125rem;\n  margin-right: 0.125rem;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.\\!ml-0 {\n  margin-left: 0px !important;\n}\n.\\!mr-0 {\n  margin-right: 0px !important;\n}\n.-mt-0 {\n  margin-top: -0px;\n}\n.-mt-0\\.5 {\n  margin-top: -0.125rem;\n}\n.-mt-px {\n  margin-top: -1px;\n}\n.mb-px {\n  margin-bottom: 1px;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.ml-1\\.5 {\n  margin-left: 0.375rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.ml-2\\.5 {\n  margin-left: 0.625rem;\n}\n.ml-px {\n  margin-left: 1px;\n}\n.mr-px {\n  margin-right: 1px;\n}\n.ms-3 {\n  margin-inline-start: 0.75rem;\n}\n.mt-0 {\n  margin-top: 0px;\n}\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-px {\n  margin-top: 1px;\n}\n.box-border {\n  box-sizing: border-box;\n}\n.box-content {\n  box-sizing: content-box;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-0 {\n  height: 0px;\n}\n.h-0\\.75 {\n  height: 0.1875rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-3\\.5 {\n  height: 0.875rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-px {\n  height: 1px;\n}\n.max-h-60 {\n  max-height: 15rem;\n}\n.w-0 {\n  width: 0px;\n}\n.w-1\\/2 {\n  width: 50%;\n}\n.w-11 {\n  width: 2.75rem;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-2\\.5 {\n  width: 0.625rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-3\\.5 {\n  width: 0.875rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-9 {\n  width: 2.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.min-w-5 {\n  min-width: 1.25rem;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-x-full {\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.-translate-y-full {\n  --tw-translate-y: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-full {\n  --tw-translate-y: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-default {\n  cursor: default;\n}\n.cursor-ew-resize {\n  cursor: ew-resize;\n}\n.cursor-grab {\n  cursor: grab;\n}\n.cursor-grabbing {\n  cursor: grabbing;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.touch-none {\n  touch-action: none;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.list-none {\n  list-style-type: none;\n}\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-x-auto {\n  overflow-x: auto;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.break-all {\n  word-break: break-all;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.\\!rounded-b-none {\n  border-bottom-right-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n}\n.\\!rounded-t {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important;\n}\n.\\!rounded-t-none {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n.border {\n  border-width: 1px;\n}\n.border-0 {\n  border-width: 0px;\n}\n.\\!border-b-0 {\n  border-bottom-width: 0px !important;\n}\n.\\!border-r-0 {\n  border-right-width: 0px !important;\n}\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.border-color {\n  --tw-border-opacity: 1;\n  border-color: rgb(16 16 16 / var(--tw-border-opacity));\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.border-opacity-15 {\n  --tw-border-opacity: 0.15;\n}\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.bg-current {\n  background-color: currentColor;\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n.bg-opacity-90 {\n  --tw-bg-opacity: 0.9;\n}\n.bg-center {\n  background-position: center;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-0 {\n  padding: 0px;\n}\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n.p-1 {\n  padding: 0.25rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-3\\.5 {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-px {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-3\\.5 {\n  padding-top: 0.875rem;\n  padding-bottom: 0.875rem;\n}\n.py-px {\n  padding-top: 1px;\n  padding-bottom: 1px;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-0\\.5sm {\n  font-size: 0.8125rem;\n  line-height: 1.125rem;\n}\n.text-0\\.5xs {\n  font-size: 0.6875rem;\n  line-height: 0.875rem;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.italic {\n  font-style: italic;\n}\n.not-italic {\n  font-style: normal;\n}\n.leading-none {\n  line-height: 1;\n}\n.leading-px {\n  line-height: 1px;\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-secondary {\n  --tw-text-opacity: 1;\n  color: rgb(213 185 133 / var(--tw-text-opacity));\n}\n.text-transparent {\n  color: transparent;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-50 {\n  opacity: 0.5;\n}\n.opacity-60 {\n  opacity: 0.6;\n}\n.opacity-90 {\n  opacity: 0.9;\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.brightness-100 {\n  --tw-brightness: brightness(1);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.brightness-90 {\n  --tw-brightness: brightness(.9);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.brightness-95 {\n  --tw-brightness: brightness(.95);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-input {\n  transition-property: box-shadow, color, background-color, border-color;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-shadow {\n  transition-property: box-shadow;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n.duration-300 {\n  transition-duration: 300ms;\n}\n.duration-500 {\n  transition-duration: 500ms;\n}\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ease-linear {\n  transition-timing-function: linear;\n}\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.form-text {\n  font-size: var(--vf-font-size);\n  line-height: var(--vf-line-height);\n  letter-spacing: var(--vf-letter-spacing);\n}\n.form-text-small {\n  font-size: var(--vf-font-size-small);\n  line-height: var(--vf-line-height-small);\n  letter-spacing: var(--vf-letter-spacing-small);\n}\n.form-text-h1-mobile {\n  font-size: var(--vf-font-size-h1-mobile);\n  line-height: var(--vf-line-height-headings);\n  letter-spacing: var(--vf-letter-spacing-headings);\n}\n.form-text-h2-mobile {\n  font-size: var(--vf-font-size-h2-mobile);\n  line-height: var(--vf-line-height-headings);\n  letter-spacing: var(--vf-letter-spacing-headings);\n}\n.form-text-h3-mobile {\n  font-size: var(--vf-font-size-h3-mobile);\n  line-height: var(--vf-line-height-headings);\n  letter-spacing: var(--vf-letter-spacing-headings);\n}\n.form-text-h4-mobile {\n  font-size: var(--vf-font-size-h4-mobile);\n  line-height: var(--vf-line-height-headings);\n  letter-spacing: var(--vf-letter-spacing-headings);\n}\n.form-text-blockquote {\n  font-size: var(--vf-font-size-blockquote);\n  line-height: var(--vf-line-height-blockquote);\n  letter-spacing: var(--vf-letter-spacing-blockquote);\n}\n.form-gap-gutter {\n  gap: var(--vf-gutter);\n}\n.form-gap-x-gutter {\n  -moz-column-gap: var(--vf-gutter);\n       column-gap: var(--vf-gutter);\n}\n.form-gap-y-gutter {\n  row-gap: var(--vf-gutter);\n}\n.form-gap-0\\.5gutter {\n  gap: calc(var(--vf-gutter) * 0.5);\n}\n.form-gap-y-0\\.5gutter {\n  row-gap: calc(var(--vf-gutter) * 0.5);\n}\n.form-radius-input {\n  border-radius: var(--vf-radius-input);\n}\n.form-radius-input-t {\n  border-radius: var(--vf-radius-input);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-input-r {\n  border-radius: var(--vf-radius-input);\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.form-radius-input-b {\n  border-radius: var(--vf-radius-input);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-l {\n  border-radius: var(--vf-radius-input);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-btn {\n  border-radius: var(--vf-radius-btn);\n}\n.form-radius-small {\n  border-radius: var(--vf-radius-small);\n}\n.form-radius-large {\n  border-radius: var(--vf-radius-large);\n}\n.form-radius-large-t {\n  border-radius: var(--vf-radius-large);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-large-b {\n  border-radius: var(--vf-radius-large);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-tag {\n  border-radius: var(--vf-radius-tag);\n}\n.form-radius-checkbox {\n  border-radius: var(--vf-radius-checkbox);\n}\n.form-radius-slider {\n  border-radius: var(--vf-radius-slider);\n}\n.form-radius-image {\n  border-radius: var(--vf-radius-image);\n}\n.form-radius-gallery {\n  border-radius: var(--vf-radius-gallery);\n}\n.form-my-slider {\n  margin-top: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2);\n  margin-bottom: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2);\n}\n.form-mt-floating {\n  margin-top: var(--vf-floating-top);\n}\n.form-pt-0 {\n  padding-top: 0px;\n}\n.form-text-type .form-pt-0 {\n  padding-top: 0px;\n}\n.form-pr-select {\n  padding-right: calc(var(--vf-px-input) * 2.5 + 20px);\n}\n.form-pr-select-no-clear {\n  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n.form-pr-select-no-caret {\n  padding-right: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n.form-py-0\\.5input {\n  padding-bottom: calc(var(--vf-py-input) * 0.5);\n  padding-top: calc(var(--vf-py-input) * 0.5);\n}\n.form-top-input-border {\n  top: calc(var(--vf-border-width-input-t) + var(--vf-py-input));\n}\n.form-left-input {\n  left: var(--vf-px-input);\n}\n.form-py-tag {\n  padding-bottom: var(--vf-py-tag);\n  padding-top: var(--vf-py-tag);\n}\n.form-py-slider-tooltip {\n  padding-bottom: var(--vf-py-slider-tooltip);\n  padding-top: var(--vf-py-slider-tooltip);\n}\n.form-px-slider-tooltip {\n  padding-left: var(--vf-px-slider-tooltip);\n  padding-right: var(--vf-px-slider-tooltip);\n}\n.form-p-btn {\n  padding: var(--vf-py-btn) var(--vf-px-btn);\n}\n.form-p-btn-small {\n  padding: var(--vf-py-btn-small) var(--vf-px-btn-small);\n}\n.form-p-group-tabs {\n  padding: var(--vf-py-group-tabs) var(--vf-px-group-tabs);\n}\n.form-p-group-blocks {\n  padding: var(--vf-py-group-blocks) var(--vf-px-group-blocks);\n}\n.form-pl-space-addon {\n  padding-left: var(--vf-space-addon);\n}\n.form-pr-space-addon {\n  padding-right: var(--vf-space-addon);\n}\n.form-p-blockquote {\n  padding: var(--vf-py-blockquote) var(--vf-px-blockquote);\n}\n.form-py-hr {\n  padding: var(--vf-py-hr) 0px;\n}\n.form-mt-checkbox {\n  margin-top: calc((var(--vf-line-height) - var(--vf-checkbox-size)) / 2);\n}\n.\\!form-mr-space-checkbox {\n  margin-right: var(--vf-space-checkbox) !important;\n}\n.form-mr-space-checkbox {\n  margin-right: var(--vf-space-checkbox);\n}\n.\\!form-ml-space-checkbox {\n  margin-left: var(--vf-space-checkbox) !important;\n}\n.form-ml-space-checkbox {\n  margin-left: var(--vf-space-checkbox);\n}\n.form-mt-space-tags {\n  margin-top: var(--vf-space-tags);\n}\n.form-mr-space-tags {\n  margin-right: var(--vf-space-tags);\n}\n.form-mb-space-tags {\n  margin-bottom: var(--vf-space-tags);\n}\n.form-bottom-slider-tooltip-top {\n  bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n.form-top-slider-tooltip-bottom {\n  top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n.form-right-slider-tooltip-left {\n  right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n.form-left-slider-tooltip-right {\n  left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));\n}\n.form-mt-gutter {\n  margin-top: calc(var(--vf-gutter) * 1);\n}\n.form-mb-gutter {\n  margin-bottom: calc(var(--vf-gutter) * 1);\n}\n.form-pr-gutter {\n  padding-right: var(--vf-gutter);\n}\n.form-pr-0 {\n  padding-right: 0px;\n}\n.form-w-checkbox {\n  width: var(--vf-checkbox-size);\n}\n.form-w-gallery {\n  width: var(--vf-gallery-size);\n}\n.form-w-toggle {\n  width: var(--vf-toggle-width);\n}\n.form-w-toggle-label {\n  width: calc(var(--vf-toggle-width) - var(--vf-toggle-height));\n}\n.form-w-slider-vertical {\n  width: var(--vf-slider-height);\n}\n.form-w-input-height {\n  width: var(--vf-min-height-input);\n}\n.form-h-checkbox {\n  height: var(--vf-checkbox-size);\n}\n.form-h-gallery {\n  height: var(--vf-gallery-size);\n}\n.form-h-toggle {\n  height: var(--vf-toggle-height);\n}\n.form-h-slider-horizontal {\n  height: var(--vf-slider-height);\n}\n.form-h-slider-vertical {\n  height: var(--vf-slider-height-vertical);\n}\n.form-h-input-height {\n  height: var(--vf-min-height-input);\n}\n.form-h-input-height-inner {\n  height: calc(var(--vf-min-height-input) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height-inner {\n  min-height: calc(var(--vf-min-height-input) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height {\n  min-height: var(--vf-min-height-input);\n}\n.form-left-input-height {\n  left: var(--vf-min-height-input);\n}\n.form-size-toggle-handle {\n  width: var(--vf-toggle-height);\n  height: var(--vf-toggle-height);\n}\n.form-size-slider-handle {\n  width: var(--vf-slider-handle-size);\n  height: var(--vf-slider-handle-size);\n}\n.form-bg-spinner-white {\n  position: relative;\n  color: transparent;\n}\n.form-bg-spinner-white::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: calc(var(--vf-min-height-input) * 0.4);\n  height: calc(var(--vf-min-height-input) * 0.4);\n  margin-left: calc(var(--vf-min-height-input) * (-0.2));\n  margin-top: calc(var(--vf-min-height-input) * (-0.2));\n  animation: form-spin 1s linear infinite;\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: #FFFFFF;\n}\n.form-bg-spinner-on-primary {\n  position: relative;\n  color: transparent;\n}\n.form-bg-spinner-on-primary::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: calc(var(--vf-min-height-input) * 0.4);\n  height: calc(var(--vf-min-height-input) * 0.4);\n  margin-left: calc(var(--vf-min-height-input) * (-0.2));\n  margin-top: calc(var(--vf-min-height-input) * (-0.2));\n  animation: form-spin 1s linear infinite;\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n}\n.form-bg-spinner-btn-secondary {\n  position: relative;\n  color: transparent;\n}\n.form-bg-spinner-btn-secondary::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: calc(var(--vf-min-height-input) * 0.4);\n  height: calc(var(--vf-min-height-input) * 0.4);\n  margin-left: calc(var(--vf-min-height-input) * (-0.2));\n  margin-top: calc(var(--vf-min-height-input) * (-0.2));\n  animation: form-spin 1s linear infinite;\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-btn-secondary);\n}\n.slider-vertical .v\\:arrow-right:before {\n  content: \"\";\n  position: absolute;\n  right: calc(var(--vf-slider-tooltip-arrow-size) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-left-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-vertical .v\\:arrow-left:before {\n  content: \"\";\n  position: absolute;\n  left: calc(var(--vf-slider-tooltip-arrow-size) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-right-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-horizontal .h\\:arrow-bottom:before {\n  content: \"\";\n  position: absolute;\n  bottom: calc(var(--vf-slider-tooltip-arrow-size) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%);\n}\n.slider-horizontal .h\\:arrow-top:before {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--vf-slider-tooltip-arrow-size) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size) solid transparent;\n  border-bottom-color: inherit;\n  transform: translate(-50%);\n}\n.form-text-sm {\n  font-size: var(--vf-font-size-sm);\n  line-height: var(--vf-line-height-sm);\n  letter-spacing: var(--vf-letter-spacing-sm);\n}\n.form-text-small-sm {\n  font-size: var(--vf-font-size-small-sm);\n  line-height: var(--vf-line-height-small-sm);\n  letter-spacing: var(--vf-letter-spacing-small-sm);\n}\n.form-text-h1-mobile-sm {\n  font-size: var(--vf-font-size-h1-mobile-sm);\n  line-height: var(--vf-line-height-headings-sm);\n  letter-spacing: var(--vf-letter-spacing-headings-sm);\n}\n.form-text-h2-mobile-sm {\n  font-size: var(--vf-font-size-h2-mobile-sm);\n  line-height: var(--vf-line-height-headings-sm);\n  letter-spacing: var(--vf-letter-spacing-headings-sm);\n}\n.form-text-h3-mobile-sm {\n  font-size: var(--vf-font-size-h3-mobile-sm);\n  line-height: var(--vf-line-height-headings-sm);\n  letter-spacing: var(--vf-letter-spacing-headings-sm);\n}\n.form-text-h4-mobile-sm {\n  font-size: var(--vf-font-size-h4-mobile-sm);\n  line-height: var(--vf-line-height-headings-sm);\n  letter-spacing: var(--vf-letter-spacing-headings-sm);\n}\n.form-text-blockquote-sm {\n  font-size: var(--vf-font-size-blockquote-sm);\n  line-height: var(--vf-line-height-blockquote-sm);\n  letter-spacing: var(--vf-letter-spacing-blockquote-sm);\n}\n.form-gap-gutter-sm {\n  gap: var(--vf-gutter-sm);\n}\n.form-gap-x-gutter-sm {\n  -moz-column-gap: var(--vf-gutter-sm);\n       column-gap: var(--vf-gutter-sm);\n}\n.form-gap-y-gutter-sm {\n  row-gap: var(--vf-gutter-sm);\n}\n.form-gap-0\\.5gutter-sm {\n  gap: calc(var(--vf-gutter-sm) * 0.5);\n}\n.form-gap-y-0\\.5gutter-sm {\n  row-gap: calc(var(--vf-gutter-sm) * 0.5);\n}\n.form-radius-input-sm {\n  border-radius: var(--vf-radius-input-sm);\n}\n.form-radius-input-t-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-input-r-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.form-radius-input-b-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-l-sm {\n  border-radius: var(--vf-radius-input-sm);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-btn-sm {\n  border-radius: var(--vf-radius-btn-sm);\n}\n.form-radius-small-sm {\n  border-radius: var(--vf-radius-small-sm);\n}\n.form-radius-large-sm {\n  border-radius: var(--vf-radius-large-sm);\n}\n.form-radius-large-t-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-large-b-sm {\n  border-radius: var(--vf-radius-large-sm);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-tag-sm {\n  border-radius: var(--vf-radius-tag-sm);\n}\n.form-radius-checkbox-sm {\n  border-radius: var(--vf-radius-checkbox-sm);\n}\n.form-radius-slider-sm {\n  border-radius: var(--vf-radius-slider-sm);\n}\n.form-radius-image-sm {\n  border-radius: var(--vf-radius-image-sm);\n}\n.form-radius-gallery-sm {\n  border-radius: var(--vf-radius-gallery-sm);\n}\n.form-my-slider-sm {\n  margin-top: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2);\n  margin-bottom: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2);\n}\n.form-mt-floating-sm {\n  margin-top: var(--vf-floating-top-sm);\n}\n.form-pr-select-sm {\n  padding-right: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n}\n.form-pr-select-no-clear-sm {\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n.form-pr-select-no-caret-sm {\n  padding-right: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n.form-top-input-border-sm {\n  top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-sm));\n}\n.form-left-input-sm {\n  left: var(--vf-px-input-sm);\n}\n.form-py-tag-sm {\n  padding-bottom: var(--vf-py-tag-sm);\n  padding-top: var(--vf-py-tag-sm);\n}\n.form-py-slider-tooltip-sm {\n  padding-bottom: var(--vf-py-slider-tooltip-sm);\n  padding-top: var(--vf-py-slider-tooltip-sm);\n}\n.form-px-slider-tooltip-sm {\n  padding-left: var(--vf-px-slider-tooltip-sm);\n  padding-right: var(--vf-px-slider-tooltip-sm);\n}\n.form-p-btn-sm {\n  padding: var(--vf-py-btn-sm) var(--vf-px-btn-sm);\n}\n.form-p-btn-small-sm {\n  padding: var(--vf-py-btn-small-sm) var(--vf-px-btn-small-sm);\n}\n.form-p-group-tabs-sm {\n  padding: var(--vf-py-group-tabs-sm) var(--vf-px-group-tabs-sm);\n}\n.form-p-group-blocks-sm {\n  padding: var(--vf-py-group-blocks-sm) var(--vf-px-group-blocks-sm);\n}\n.form-pl-space-addon-sm {\n  padding-left: var(--vf-space-addon-sm);\n}\n.form-pr-space-addon-sm {\n  padding-right: var(--vf-space-addon-sm);\n}\n.form-p-blockquote-sm {\n  padding: var(--vf-py-blockquote-sm) var(--vf-px-blockquote-sm);\n}\n.form-mt-checkbox-sm {\n  margin-top: calc((var(--vf-line-height-sm) - var(--vf-checkbox-size-sm)) / 2);\n}\n.\\!form-mr-space-checkbox-sm {\n  margin-right: var(--vf-space-checkbox-sm) !important;\n}\n.form-mr-space-checkbox-sm {\n  margin-right: var(--vf-space-checkbox-sm);\n}\n.\\!form-ml-space-checkbox-sm {\n  margin-left: var(--vf-space-checkbox-sm) !important;\n}\n.form-ml-space-checkbox-sm {\n  margin-left: var(--vf-space-checkbox-sm);\n}\n.form-mt-space-tags-sm {\n  margin-top: var(--vf-space-tags-sm);\n}\n.form-mr-space-tags-sm {\n  margin-right: var(--vf-space-tags-sm);\n}\n.form-mb-space-tags-sm {\n  margin-bottom: var(--vf-space-tags-sm);\n}\n.form-bottom-slider-tooltip-top-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.form-top-slider-tooltip-bottom-sm {\n  top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.form-right-slider-tooltip-left-sm {\n  right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.form-left-slider-tooltip-right-sm {\n  left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.form-mt-gutter-sm {\n  margin-top: calc(var(--vf-gutter-sm) * 1);\n}\n.form-mb-gutter-sm {\n  margin-bottom: calc(var(--vf-gutter-sm) * 1);\n}\n.form-pr-gutter-sm {\n  padding-right: var(--vf-gutter-sm);\n}\n.form-w-checkbox-sm {\n  width: var(--vf-checkbox-size-sm);\n}\n.form-w-gallery-sm {\n  width: var(--vf-gallery-size-sm);\n}\n.form-w-toggle-sm {\n  width: var(--vf-toggle-width-sm);\n}\n.form-w-toggle-label-sm {\n  width: calc(var(--vf-toggle-width-sm) - var(--vf-toggle-height-sm));\n}\n.form-w-slider-vertical-sm {\n  width: var(--vf-slider-height-sm);\n}\n.form-w-input-height-sm {\n  width: var(--vf-min-height-input-sm);\n}\n.form-h-checkbox-sm {\n  height: var(--vf-checkbox-size-sm);\n}\n.form-h-gallery-sm {\n  height: var(--vf-gallery-size-sm);\n}\n.form-h-toggle-sm {\n  height: var(--vf-toggle-height-sm);\n}\n.form-h-slider-horizontal-sm {\n  height: var(--vf-slider-height-sm);\n}\n.form-h-slider-vertical-sm {\n  height: var(--vf-slider-height-vertical-sm);\n}\n.form-h-input-height-sm {\n  height: var(--vf-min-height-input-sm);\n}\n.form-h-input-height-inner-sm {\n  height: calc(var(--vf-min-height-input-sm) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height-inner-sm {\n  min-height: calc(var(--vf-min-height-input-sm) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height-sm {\n  min-height: var(--vf-min-height-input-sm);\n}\n.form-left-input-height-sm {\n  left: var(--vf-min-height-input-sm);\n}\n.form-size-toggle-handle-sm {\n  width: var(--vf-toggle-height-sm);\n  height: var(--vf-toggle-height-sm);\n}\n.form-size-slider-handle-sm {\n  width: var(--vf-slider-handle-size-sm);\n  height: var(--vf-slider-handle-size-sm);\n}\n.slider-vertical .v\\:arrow-right-sm:before {\n  content: \"\";\n  position: absolute;\n  right: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-left-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-vertical .v\\:arrow-left-sm:before {\n  content: \"\";\n  position: absolute;\n  left: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-right-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-horizontal .h\\:arrow-bottom-sm:before {\n  content: \"\";\n  position: absolute;\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%);\n}\n.slider-horizontal .h\\:arrow-top-sm:before {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;\n  border-bottom-color: inherit;\n  transform: translate(-50%);\n}\n.form-text-lg {\n  font-size: var(--vf-font-size-lg);\n  line-height: var(--vf-line-height-lg);\n  letter-spacing: var(--vf-letter-spacing-lg);\n}\n.form-text-small-lg {\n  font-size: var(--vf-font-size-small-lg);\n  line-height: var(--vf-line-height-small-lg);\n  letter-spacing: var(--vf-letter-spacing-small-lg);\n}\n.form-text-h1-mobile-lg {\n  font-size: var(--vf-font-size-h1-mobile-lg);\n  line-height: var(--vf-line-height-headings-lg);\n  letter-spacing: var(--vf-letter-spacing-headings-lg);\n}\n.form-text-h2-mobile-lg {\n  font-size: var(--vf-font-size-h2-mobile-lg);\n  line-height: var(--vf-line-height-headings-lg);\n  letter-spacing: var(--vf-letter-spacing-headings-lg);\n}\n.form-text-h3-mobile-lg {\n  font-size: var(--vf-font-size-h3-mobile-lg);\n  line-height: var(--vf-line-height-headings-lg);\n  letter-spacing: var(--vf-letter-spacing-headings-lg);\n}\n.form-text-h4-mobile-lg {\n  font-size: var(--vf-font-size-h4-mobile-lg);\n  line-height: var(--vf-line-height-headings-lg);\n  letter-spacing: var(--vf-letter-spacing-headings-lg);\n}\n.form-text-blockquote-lg {\n  font-size: var(--vf-font-size-blockquote-lg);\n  line-height: var(--vf-line-height-blockquote-lg);\n  letter-spacing: var(--vf-letter-spacing-blockquote-lg);\n}\n.form-gap-gutter-lg {\n  gap: var(--vf-gutter-lg);\n}\n.form-gap-x-gutter-lg {\n  -moz-column-gap: var(--vf-gutter-lg);\n       column-gap: var(--vf-gutter-lg);\n}\n.form-gap-y-gutter-lg {\n  row-gap: var(--vf-gutter-lg);\n}\n.form-gap-0\\.5gutter-lg {\n  gap: calc(var(--vf-gutter-lg) * 0.5);\n}\n.form-gap-y-0\\.5gutter-lg {\n  row-gap: calc(var(--vf-gutter-lg) * 0.5);\n}\n.form-radius-input-lg {\n  border-radius: var(--vf-radius-input-lg);\n}\n.form-radius-input-t-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-input-r-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n.form-radius-input-b-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-l-lg {\n  border-radius: var(--vf-radius-input-lg);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-btn-lg {\n  border-radius: var(--vf-radius-btn-lg);\n}\n.form-radius-small-lg {\n  border-radius: var(--vf-radius-small-lg);\n}\n.form-radius-large-lg {\n  border-radius: var(--vf-radius-large-lg);\n}\n.form-radius-large-t-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-radius-large-b-lg {\n  border-radius: var(--vf-radius-large-lg);\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-radius-input-tag-lg {\n  border-radius: var(--vf-radius-tag-lg);\n}\n.form-radius-checkbox-lg {\n  border-radius: var(--vf-radius-checkbox-lg);\n}\n.form-radius-slider-lg {\n  border-radius: var(--vf-radius-slider-lg);\n}\n.form-radius-image-lg {\n  border-radius: var(--vf-radius-image-lg);\n}\n.form-radius-gallery-lg {\n  border-radius: var(--vf-radius-gallery-lg);\n}\n.form-my-slider-lg {\n  margin-top: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2);\n  margin-bottom: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2);\n}\n.form-mt-floating-lg {\n  margin-top: var(--vf-floating-top-lg);\n}\n.form-pr-select-no-clear-lg {\n  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n.form-pr-select-no-caret-lg {\n  padding-right: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n.form-top-input-border-lg {\n  top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-lg));\n}\n.form-left-input-lg {\n  left: var(--vf-px-input-lg);\n}\n.form-py-tag-lg {\n  padding-bottom: var(--vf-py-tag-lg);\n  padding-top: var(--vf-py-tag-lg);\n}\n.form-py-slider-tooltip-lg {\n  padding-bottom: var(--vf-py-slider-tooltip-lg);\n  padding-top: var(--vf-py-slider-tooltip-lg);\n}\n.form-px-slider-tooltip-lg {\n  padding-left: var(--vf-px-slider-tooltip-lg);\n  padding-right: var(--vf-px-slider-tooltip-lg);\n}\n.form-p-btn-lg {\n  padding: var(--vf-py-btn-lg) var(--vf-px-btn-lg);\n}\n.form-p-btn-small-lg {\n  padding: var(--vf-py-btn-small-lg) var(--vf-px-btn-small-lg);\n}\n.form-p-group-tabs-lg {\n  padding: var(--vf-py-group-tabs-lg) var(--vf-px-group-tabs-lg);\n}\n.form-p-group-blocks-lg {\n  padding: var(--vf-py-group-blocks-lg) var(--vf-px-group-blocks-lg);\n}\n.form-pl-space-addon-lg {\n  padding-left: var(--vf-space-addon-lg);\n}\n.form-pr-space-addon-lg {\n  padding-right: var(--vf-space-addon-lg);\n}\n.form-p-blockquote-lg {\n  padding: var(--vf-py-blockquote-lg) var(--vf-px-blockquote-lg);\n}\n.form-mt-checkbox-lg {\n  margin-top: calc((var(--vf-line-height-lg) - var(--vf-checkbox-size-lg)) / 2);\n}\n.\\!form-mr-space-checkbox-lg {\n  margin-right: var(--vf-space-checkbox-lg) !important;\n}\n.form-mr-space-checkbox-lg {\n  margin-right: var(--vf-space-checkbox-lg);\n}\n.\\!form-ml-space-checkbox-lg {\n  margin-left: var(--vf-space-checkbox-lg) !important;\n}\n.form-ml-space-checkbox-lg {\n  margin-left: var(--vf-space-checkbox-lg);\n}\n.form-mt-space-tags-lg {\n  margin-top: var(--vf-space-tags-lg);\n}\n.form-mr-space-tags-lg {\n  margin-right: var(--vf-space-tags-lg);\n}\n.form-mb-space-tags-lg {\n  margin-bottom: var(--vf-space-tags-lg);\n}\n.form-bottom-slider-tooltip-top-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.form-top-slider-tooltip-bottom-lg {\n  top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.form-right-slider-tooltip-left-lg {\n  right: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.form-left-slider-tooltip-right-lg {\n  left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.form-mt-gutter-lg {\n  margin-top: calc(var(--vf-gutter-lg) * 1);\n}\n.form-mb-gutter-lg {\n  margin-bottom: calc(var(--vf-gutter-lg) * 1);\n}\n.form-pr-gutter-lg {\n  padding-right: var(--vf-gutter-lg);\n}\n.form-w-checkbox-lg {\n  width: var(--vf-checkbox-size-lg);\n}\n.form-w-gallery-lg {\n  width: var(--vf-gallery-size-lg);\n}\n.form-w-toggle-lg {\n  width: var(--vf-toggle-width-lg);\n}\n.form-w-toggle-label-lg {\n  width: calc(var(--vf-toggle-width-lg) - var(--vf-toggle-height-lg));\n}\n.form-w-slider-vertical-lg {\n  width: var(--vf-slider-height-lg);\n}\n.form-w-input-height-lg {\n  width: var(--vf-min-height-input-lg);\n}\n.form-h-checkbox-lg {\n  height: var(--vf-checkbox-size-lg);\n}\n.form-h-gallery-lg {\n  height: var(--vf-gallery-size-lg);\n}\n.form-h-toggle-lg {\n  height: var(--vf-toggle-height-lg);\n}\n.form-h-slider-horizontal-lg {\n  height: var(--vf-slider-height-lg);\n}\n.form-h-slider-vertical-lg {\n  height: var(--vf-slider-height-vertical-lg);\n}\n.form-h-input-height-lg {\n  height: var(--vf-min-height-input-lg);\n}\n.form-h-input-height-inner-lg {\n  height: calc(var(--vf-min-height-input-lg) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height-inner-lg {\n  min-height: calc(var(--vf-min-height-input-lg) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)));\n}\n.form-min-h-input-height-lg {\n  min-height: var(--vf-min-height-input-lg);\n}\n.form-left-input-height-lg {\n  left: var(--vf-min-height-input-lg);\n}\n.form-size-toggle-handle-lg {\n  width: var(--vf-toggle-height-lg);\n  height: var(--vf-toggle-height-lg);\n}\n.form-size-slider-handle-lg {\n  width: var(--vf-slider-handle-size-lg);\n  height: var(--vf-slider-handle-size-lg);\n}\n.slider-vertical .v\\:arrow-right-lg:before {\n  content: \"\";\n  position: absolute;\n  right: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-left-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-vertical .v\\:arrow-left-lg:before {\n  content: \"\";\n  position: absolute;\n  left: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-right-color: inherit;\n  transform: translateY(-50%);\n}\n.slider-horizontal .h\\:arrow-bottom-lg:before {\n  content: \"\";\n  position: absolute;\n  bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%);\n}\n.slider-horizontal .h\\:arrow-top-lg:before {\n  content: \"\";\n  position: absolute;\n  top: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;\n  border-bottom-color: inherit;\n  transform: translate(-50%);\n}\n@keyframes form-spin {\n\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.form-color-input {\n  color: var(--vf-color-input);\n}\n.form-color-input-danger {\n  color: var(--vf-color-input-danger);\n}\n.form-color-input-success {\n  color: var(--vf-color-input-success);\n}\n.form-color-muted {\n  color: var(--vf-color-muted);\n}\n.form-color-floating {\n  color: var(--vf-color-floating);\n}\n.form-color-floating-focus {\n  color: var(--vf-color-floating-focus);\n}\n.form-color-floating-success {\n  color: var(--vf-color-floating-success);\n}\n.form-color-floating-danger {\n  color: var(--vf-color-floating-danger);\n}\n.form-color-placeholder {\n  color: var(--vf-color-placeholder);\n}\n.form-color-disabled {\n  color: var(--vf-color-disabled);\n}\n.form-color-danger {\n  color: var(--vf-color-danger);\n}\n.form-color-success {\n  color: var(--vf-color-success);\n}\n.form-color-tag {\n  color: var(--vf-color-tag);\n}\n.form-color-addon {\n  color: var(--vf-color-addon);\n}\n.form-color-btn {\n  color: var(--vf-color-btn);\n}\n.form-color-btn-secondary {\n  color: var(--vf-color-btn-secondary);\n}\n.form-color-btn-danger {\n  color: var(--vf-color-btn-danger);\n}\n.form-color-transparent {\n  color: transparent !important;\n}\n.form-color-link {\n  color: var(--vf-link-color);\n}\n.form-decoration-link {\n  -webkit-text-decoration: var(--vf-link-decoration);\n          text-decoration: var(--vf-link-decoration);\n}\n.form-bg-input {\n  background-color: var(--vf-bg-input);\n}\n.form-bg-input-success {\n  background-color: var(--vf-bg-input-success);\n}\n.form-bg-input-danger {\n  background-color: var(--vf-bg-input-danger);\n}\n.form-bg-disabled {\n  background-color: var(--vf-bg-disabled);\n}\n.form-bg-selected {\n  background-color: var(--vf-bg-selected);\n}\n.form-bg-passive {\n  background-color: var(--vf-bg-passive);\n}\n.form-bg-passive-color {\n  background-color: var(--vf-color-passive);\n}\n.form-bg-icon {\n  background-color: var(--vf-bg-icon);\n}\n.form-bg-slider-handle {\n  background-color: var(--vf-bg-slider-handle);\n}\n.form-bg-toggle-handle {\n  background-color: var(--vf-bg-toggle-handle);\n}\n.form-bg-danger {\n  background-color: var(--vf-bg-danger);\n}\n.form-bg-danger-color {\n  background-color: var(--vf-color-danger);\n}\n.form-bg-success {\n  background-color: var(--vf-bg-success);\n}\n.form-bg-success-color {\n  background-color: var(--vf-color-success);\n}\n.form-bg-tag {\n  background-color: var(--vf-bg-tag);\n}\n.form-bg-addon {\n  background-color: var(--vf-bg-addon);\n}\n.form-bg-btn {\n  background-color: var(--vf-bg-btn);\n}\n.form-bg-btn-secondary {\n  background-color: var(--vf-bg-btn-secondary);\n}\n.form-bg-btn-danger {\n  background-color: var(--vf-bg-btn-danger);\n}\n.form-border-color-input-success {\n  border-color: var(--vf-border-color-input-success);\n}\n.form-border-color-input-danger {\n  border-color: var(--vf-border-color-input-danger);\n}\n.form-border-color-danger {\n  border-color: var(--vf-border-color-danger);\n}\n.form-border-color-btn {\n  border-color: var(--vf-border-color-btn);\n}\n.form-border-color-tag {\n  border-color: var(--vf-border-color-tag);\n}\n.form-border-color-slider-tooltip {\n  border-color: var(--vf-border-color-slider-tooltip);\n}\n.form-border-color-btn-secondary {\n  border-color: var(--vf-border-color-btn-secondary);\n}\n.form-border-color-btn-danger {\n  border-color: var(--vf-border-color-btn-danger);\n}\n.form-border-color-blockquote {\n  border-color: var(--vf-border-color-blockquote);\n}\n.form-border-color-hr {\n  border-color: var(--vf-border-color-hr);\n}\n.form-border-width-btn {\n  border-width: var(--vf-border-width-btn);\n  border-style: solid;\n}\n.form-border-width-toggle {\n  border-width: var(--vf-border-width-toggle);\n  border-style: solid;\n}\n.form-border-width-tag {\n  border-width: var(--vf-border-width-tag);\n  border-style: solid;\n}\n.form-border-width-blockquote {\n  border-left-width: var(--vf-border-width-blockquote);\n  border-style: solid;\n}\n.form-shadow-input {\n  box-shadow: var(--vf-shadow-input);\n}\n.form-shadow-btn {\n  box-shadow: var(--vf-shadow-btn);\n}\n.form-shadow-dropdown {\n  box-shadow: var(--vf-shadow-dropdown);\n}\n.form-shadow-handles {\n  box-shadow: var(--vf-shadow-handles);\n}\n.form-mt-tag-1 {\n  margin-top: var(--vf-space-static-tag-1);\n}\n.form-mt-tag-2 {\n  margin-top: var(--vf-space-static-tag-2);\n}\n.form-mt-tag-3 {\n  margin-top: var(--vf-space-static-tag-3);\n}\n.form-mb-tag-1 {\n  margin-bottom: var(--vf-space-static-tag-1);\n}\n.form-mb-tag-2 {\n  margin-bottom: var(--vf-space-static-tag-2);\n}\n.form-mb-tag-3 {\n  margin-bottom: var(--vf-space-static-tag-3);\n}\n.form-hide-empty-img:not([src]) {\n  opacity: 0;\n}\n.form-hide-empty-img[src=\"\"] {\n  opacity: 0;\n}\n.form-hide-empty-img[src=\"data:\"] {\n  opacity: 0;\n}\n.form-autofill-default:-webkit-autofill, .form-autofill-default:-webkit-autofill:hover, .form-autofill-default:-webkit-autofill:focus, .form-autofill-default:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 99px var(--vf-bg-input) inset !important;\n}\n.form-autofill-default:-webkit-autofill {\n  -webkit-text-fill-color: var(--vf-color-input) !important;\n}\n.form-autofill-focus:-webkit-autofill, .form-autofill-focus:-webkit-autofill:hover, .form-autofill-focus:-webkit-autofill:focus, .form-autofill-focus:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 99px var(--vf-bg-input-focus) inset !important;\n}\n.form-autofill-focus:-webkit-autofill {\n  -webkit-text-fill-color: var(--vf-color-input-focus) !important;\n}\n.form-autofill-success:-webkit-autofill, .form-autofill-success:-webkit-autofill:hover, .form-autofill-success:-webkit-autofill:focus, .form-autofill-success:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 99px var(--vf-bg-input-success) inset !important;\n}\n.form-autofill-success:-webkit-autofill {\n  -webkit-text-fill-color: var(--vf-color-input-success) !important;\n}\n.form-autofill-danger:-webkit-autofill, .form-autofill-danger:-webkit-autofill:hover, .form-autofill-danger:-webkit-autofill:focus, .form-autofill-danger:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 99px var(--vf-bg-input-danger) inset !important;\n}\n.form-autofill-danger:-webkit-autofill {\n  -webkit-text-fill-color: var(--vf-color-input-danger) !important;\n}\n.form-assistive-text {\n  position: absolute;\n  margin: -1px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n.form-bg-info::before {\n  content: \"\";\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  background-color: var(--vf-bg-passive);\n  width: 0.875rem;\n  height: 0.875rem;\n  display: inline-block;\n}\n.form-steps {\n  width: 100%;\n  position: relative;\n}\n.form-steps:before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-bg-passive);\n  position: absolute;\n  top: 0.375rem;\n  left: 0.125rem;\n  right: 0.125rem;\n  height: 0.25rem;\n}\n.form-step {\n  display: block;\n  position: relative;\n  white-space: nowrap;\n  flex: 1 1;\n  text-align: center;\n  padding: 1.25rem 0.625rem 0;\n}\n.form-step a {\n  text-decoration: none !important;\n}\n.form-step a:hover, .form-step a:focus, .form-step a:active {\n  text-decoration: none !important;\n}\n.form-step a:before {\n  content: \" \";\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  position: absolute;\n  background: var(--vf-primary);\n  border-radius: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 0px;\n}\n.form-step a:after {\n  content: \" \";\n  display: inline-block;\n  width: 0.5rem;\n  height: 0.5rem;\n  position: absolute;\n  background: #ffffff;\n  border-radius: 50%;\n  left: calc(50% - 0.25rem);\n  transform: scale(0);\n  top: 0.25rem;\n  transition: transform .3s ease-in-out;\n}\n.form-step:first-of-type {\n  padding-left: 0;\n  text-align: left;\n}\n.form-step:first-of-type:before {\n  display: none;\n}\n.form-step:first-of-type:after {\n  left: 0;\n}\n.form-step:first-of-type a:before {\n  left: 0;\n  transform: none;\n}\n.form-step:first-of-type a:after {\n  left: 0.25rem;\n  transform: scale(0);\n}\n.form-step:last-of-type {\n  padding-right: 0;\n  text-align: right;\n}\n.form-step:last-of-type:after {\n  display: none;\n}\n.form-step:last-of-type:before {\n  right: 0;\n}\n.form-step:last-of-type a:before {\n  right: 0;\n  left: initial;\n  transform: none;\n}\n.form-step:last-of-type a:after {\n  left: initial;\n  transform: scale(0);\n  right: 0.25rem;\n}\n.form-step.form-step-disabled:before {\n  background: var(--vf-bg-passive);\n  left: -100%;\n}\n.form-step.form-step-disabled a {\n  color: var(--vf-color-passive);\n}\n.form-step.form-step-disabled a:before {\n  background: var(--vf-bg-passive);\n}\n.form-step.form-step-completed + .form-step:not(.form-step-completed):before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-primary);\n  position: absolute;\n  top: 0.375rem;\n  left: 0px;\n  right: 50%;\n  height: 0.25rem;\n}\n.form-step.form-step-completed + .form-step:last-of-type:before {\n  right: 0px;\n}\n.form-step.form-step-completed:before {\n  content: \" \";\n  display: inline-block;\n  background: var(--vf-primary);\n  position: absolute;\n  top: 0.375rem;\n  left: 0px;\n  right: 0px;\n  height: 0.25rem;\n}\n.form-step.form-step-completed a:after {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3e%3c/path%3e%3c/svg%3e\");\n  background-color: var(--vf-color-on-primary);\n  -webkit-mask-position: 0 0;\n          mask-position: 0 0;\n  -webkit-mask-size: 0.5rem 0.5rem;\n          mask-size: 0.5rem 0.5rem;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  border-radius: 0;\n  transform: scale(1);\n}\n.form-step.form-step-active a:after {\n  -webkit-mask-image: none;\n          mask-image: none;\n  background: var(--vf-color-on-primary);\n  top: 0.25rem;\n  transform: scale(1);\n  border-radius: 50%;\n}\n.form-step.form-step-has-errors a {\n  color: var(--vf-bg-btn-danger);\n}\n.form-step.form-step-has-errors a:before {\n  background-color: var(--vf-bg-btn-danger);\n}\n.form-step.form-step-has-errors a:after {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-size: 0.5rem 0.5rem;\n          mask-size: 0.5rem 0.5rem;\n  -webkit-mask-position: 0 0;\n          mask-position: 0 0;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-btn-danger);\n  width: 0.5rem;\n  height: 0.5rem;\n  top: 0.25rem;\n  border-radius: 0;\n}\n.form-step.form-step-has-errors.form-step-active a:after {\n  -webkit-mask-image: none;\n          mask-image: none;\n  background: var(--vf-color-on-primary);\n  top: 0.25rem;\n  transform: scale(1);\n  border-radius: 50%;\n}\n.form-step.form-step-pending a:after {\n  animation: 1s linear infinite step-loading;\n  background: var(--vf-color-btn-danger);\n  top: 0.25rem;\n  border-radius: 50%;\n}\n@keyframes step-loading {\n\n  0% {\n    transform: scale(0.5);\n  }\n\n  20% {\n    transform: scale(1.2);\n  }\n\n  100% {\n    transform: scale(0.5);\n  }\n}\n.cursor-grab {\n  cursor: grab;\n}\n.user-select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.touch-none {\n  touch-action: none;\n}\n.tap-highlight-transparent {\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.touch-callout-none {\n  -webkit-touch-callout: none;\n}\n.transform-origin-0 {\n  transform-origin: 0 0;\n}\n.transform-style-flat {\n  transform-style: flat;\n}\n.cursor-ew-resize {\n  cursor: ew-resize;\n}\n.slider-vertical .v\\:cursor-ns-resize {\n  cursor: ns-resize;\n}\n.mask-bg {\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n}\n.mask-size-2\\.5 {\n  -webkit-mask-size: 0.625rem 0.625rem;\n          mask-size: 0.625rem 0.625rem;\n}\n.mask-size-2\\.8 {\n  -webkit-mask-size: 0.7rem 0.7rem;\n          mask-size: 0.7rem 0.7rem;\n}\n.mask-size-3 {\n  -webkit-mask-size: 0.75rem 0.75rem;\n          mask-size: 0.75rem 0.75rem;\n}\n.form-static-tag-hr-wrapper hr {\n  border-color: inherit;\n}\n.form-static-tag-img img {\n  display: inline-block;\n}\n.mask-form-check-solid {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-spinner {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-caret {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-exclamation-solid {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 192 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-remove {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-remove-light {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-sort-handle {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 11 9' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.0418527%2c0.894571939 L0.309709821%2c0.894571939 C0.235791888%2c0.894571939 0.17578125%2c0.834156736 0.17578125%2c0.759740479 L0.17578125%2c0.220414636 C0.17578125%2c0.145998379 0.235791888%2c0.0855831754 0.309709821%2c0.0855831754 L10.0418527%2c0.0855831754 C10.1157706%2c0.0855831754 10.1757812%2c0.145998379 10.1757812%2c0.220414636 L10.1757812%2c0.759740479 C10.1757812%2c0.834156736 10.1157706%2c0.894571939 10.0418527%2c0.894571939 Z M10.0418527%2c4.8049452 L0.309709821%2c4.8049452 C0.235791888%2c4.8049452 0.17578125%2c4.74453 0.17578125%2c4.67011374 L0.17578125%2c4.1307879 C0.17578125%2c4.05637164 0.235791888%2c3.99595644 0.309709821%2c3.99595644 L10.0418527%2c3.99595644 C10.1157706%2c3.99595644 10.1757812%2c4.05637164 10.1757812%2c4.1307879 L10.1757812%2c4.67011374 C10.1757812%2c4.74453 10.1157706%2c4.8049452 10.0418527%2c4.8049452 Z M10.0418527%2c8.80953919 L0.309709821%2c8.80953919 C0.235791888%2c8.80953919 0.17578125%2c8.74912399 0.17578125%2c8.67470773 L0.17578125%2c8.13538189 C0.17578125%2c8.06096563 0.235791888%2c8.00055043 0.309709821%2c8.00055043 L10.0418527%2c8.00055043 C10.1157706%2c8.00055043 10.1757812%2c8.06096563 10.1757812%2c8.13538189 L10.1757812%2c8.67470773 C10.1757812%2c8.74912399 10.1157706%2c8.80953919 10.0418527%2c8.80953919 Z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 11 9' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.0418527%2c0.894571939 L0.309709821%2c0.894571939 C0.235791888%2c0.894571939 0.17578125%2c0.834156736 0.17578125%2c0.759740479 L0.17578125%2c0.220414636 C0.17578125%2c0.145998379 0.235791888%2c0.0855831754 0.309709821%2c0.0855831754 L10.0418527%2c0.0855831754 C10.1157706%2c0.0855831754 10.1757812%2c0.145998379 10.1757812%2c0.220414636 L10.1757812%2c0.759740479 C10.1757812%2c0.834156736 10.1157706%2c0.894571939 10.0418527%2c0.894571939 Z M10.0418527%2c4.8049452 L0.309709821%2c4.8049452 C0.235791888%2c4.8049452 0.17578125%2c4.74453 0.17578125%2c4.67011374 L0.17578125%2c4.1307879 C0.17578125%2c4.05637164 0.235791888%2c3.99595644 0.309709821%2c3.99595644 L10.0418527%2c3.99595644 C10.1157706%2c3.99595644 10.1757812%2c4.05637164 10.1757812%2c4.1307879 L10.1757812%2c4.67011374 C10.1757812%2c4.74453 10.1157706%2c4.8049452 10.0418527%2c4.8049452 Z M10.0418527%2c8.80953919 L0.309709821%2c8.80953919 C0.235791888%2c8.80953919 0.17578125%2c8.74912399 0.17578125%2c8.67470773 L0.17578125%2c8.13538189 C0.17578125%2c8.06096563 0.235791888%2c8.00055043 0.309709821%2c8.00055043 L10.0418527%2c8.00055043 C10.1157706%2c8.00055043 10.1757812%2c8.06096563 10.1757812%2c8.13538189 L10.1757812%2c8.67470773 C10.1757812%2c8.74912399 10.1157706%2c8.80953919 10.0418527%2c8.80953919 Z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-arrows {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M337.782 434.704l-73.297 73.782c-4.686 4.686-12.284 4.686-16.971 0l-73.296-73.782c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.07c4.686-4.686 12.284-4.686 16.971 0L239 451.887h1V272H60.113v1l41.224 40.741c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.07c-4.686 4.686-12.284 4.686-16.97 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l73.782-73.297c4.686-4.686 12.284-4.686 16.971 0l7.071 7.071c4.686 4.686 4.686 12.284 0 16.971L60.113 239v1H240V60.113h-1l-40.741 41.224c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.686-4.686-4.687-12.284 0-16.97l73.297-73.782c4.686-4.686 12.284-4.686 16.971 0l73.297 73.782c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.071c-4.686 4.686-12.284 4.686-16.971 0L273 60.113h-1V240h179.887v-1l-41.224-40.741c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.686 12.284-4.686 16.97 0l73.782 73.297c4.687 4.686 4.686 12.284 0 16.971l-73.782 73.297c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L451.887 273v-1H272v179.887h1l40.741-41.224c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.686 4.685 4.686 12.283 0 16.97z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M337.782 434.704l-73.297 73.782c-4.686 4.686-12.284 4.686-16.971 0l-73.296-73.782c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.07c4.686-4.686 12.284-4.686 16.971 0L239 451.887h1V272H60.113v1l41.224 40.741c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.07c-4.686 4.686-12.284 4.686-16.97 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l73.782-73.297c4.686-4.686 12.284-4.686 16.971 0l7.071 7.071c4.686 4.686 4.686 12.284 0 16.971L60.113 239v1H240V60.113h-1l-40.741 41.224c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.686-4.686-4.687-12.284 0-16.97l73.297-73.782c4.686-4.686 12.284-4.686 16.971 0l73.297 73.782c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.071c-4.686 4.686-12.284 4.686-16.971 0L273 60.113h-1V240h179.887v-1l-41.224-40.741c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.686 12.284-4.686 16.97 0l73.782 73.297c4.687 4.686 4.686 12.284 0 16.971l-73.782 73.297c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L451.887 273v-1H272v179.887h1l40.741-41.224c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.686 4.685 4.686 12.283 0 16.97z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.mask-form-inbox-in {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 576 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M560.8 329.8l-94.6-88.7c-2.4-2.3-6.2-2.1-8.5.3L444.1 256c-2.3 2.4-2.1 6.2.3 8.5l59.3 55.6H388.2l-32 64H219.8l-32-64H72.4l59.3-55.6c2.4-2.3 2.5-6.1.3-8.5l-13.7-14.6c-2.3-2.4-6.1-2.5-8.5-.3l-94.6 88.7c-9.7 9-15.2 21.7-15.2 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-99.2c0-13.3-5.5-26-15.2-35zM544 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h120l32 64h176l32-64h120c8.8 0 16 7.2 16 16v96zM416 128h-64V24c0-13.2-10.8-24-24-24h-80c-13.2 0-24 10.8-24 24v104h-64c-28.4 0-42.8 34.5-22.6 54.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c20-20.1 5.8-54.6-22.7-54.6zM288 288L160 160h96V32h64v128h96L288 288z'%3e%3c/path%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 576 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M560.8 329.8l-94.6-88.7c-2.4-2.3-6.2-2.1-8.5.3L444.1 256c-2.3 2.4-2.1 6.2.3 8.5l59.3 55.6H388.2l-32 64H219.8l-32-64H72.4l59.3-55.6c2.4-2.3 2.5-6.1.3-8.5l-13.7-14.6c-2.3-2.4-6.1-2.5-8.5-.3l-94.6 88.7c-9.7 9-15.2 21.7-15.2 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-99.2c0-13.3-5.5-26-15.2-35zM544 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h120l32 64h176l32-64h120c8.8 0 16 7.2 16 16v96zM416 128h-64V24c0-13.2-10.8-24-24-24h-80c-13.2 0-24 10.8-24 24v104h-64c-28.4 0-42.8 34.5-22.6 54.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c20-20.1 5.8-54.6-22.7-54.6zM288 288L160 160h96V32h64v128h96L288 288z'%3e%3c/path%3e%3c/svg%3e\");\n}\n.form-bg-primary-darker {\n  background-color: var(--vf-primary-darker);\n}\n.form-hidden {\n  display: none;\n}\n.form-bg-primary {\n  background-color: var(--vf-primary);\n}\n.form-border-width-input {\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n}\n.form-border-width-dropdown {\n  border-width: var(--vf-border-width-dropdown);\n}\n.form-border-width-checkbox {\n  border-width: var(--vf-border-width-checkbox-t) var(--vf-border-width-checkbox-r) var(--vf-border-width-checkbox-b) var(--vf-border-width-checkbox-l);\n}\n.form-border-width-radio {\n  border-width: var(--vf-border-width-radio-t) var(--vf-border-width-radio-r) var(--vf-border-width-radio-b) var(--vf-border-width-radio-l);\n}\n.border-0 {\n  border: 0;\n}\n.form-border-color-primary {\n  border-color: var(--vf-primary);\n}\n.form-border-color-input {\n  border-color: var(--vf-border-color-input);\n}\n.form-border-color-passive {\n  border-color: var(--vf-border-color-passive);\n}\n.form-color-input-focus {\n  color: var(--vf-color-input-focus);\n}\n.form-bg-input-focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.form-color-input-focus {\n  color: var(--vf-color-input-focus);\n}\n.form-bg-input-focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.form-bg-primary-darker {\n  background-color: var(--vf-primary-darker);\n}\n.form-bg-primary {\n  background-color: var(--vf-primary);\n}\n.form-border-width-input {\n  border-width: var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l);\n}\n.form-border-width-dropdown {\n  border-width: var(--vf-border-width-dropdown);\n}\n.form-border-width-checkbox {\n  border-width: var(--vf-border-width-checkbox-t) var(--vf-border-width-checkbox-r) var(--vf-border-width-checkbox-b) var(--vf-border-width-checkbox-l);\n}\n.form-border-width-radio {\n  border-width: var(--vf-border-width-radio-t) var(--vf-border-width-radio-r) var(--vf-border-width-radio-b) var(--vf-border-width-radio-l);\n}\n.border-0 {\n  border: 0;\n}\n.form-border-color-primary {\n  border-color: var(--vf-primary);\n}\n.form-border-color-input {\n  border-color: var(--vf-border-color-input);\n}\n.form-border-color-passive {\n  border-color: var(--vf-border-color-passive);\n}\n.form-bg-primary-darker {\n  background-color: var(--vf-primary-darker);\n}\n.cursor-grabbing {\n  cursor: grabbing;\n}\n.\\!form-color-on-primary {\n  color: var(--vf-color-on-primary) !important;\n}\n.form-color-on-primary {\n  color: var(--vf-color-on-primary);\n}\n.form-pb-gutter\\/3 {\n  padding-bottom: calc(var(--vf-gutter) / 3);\n}\n.form-pb-gutter\\/3-sm {\n  padding-bottom: calc(var(--vf-gutter-sm) / 3);\n}\n.form-pb-gutter\\/3-lg {\n  padding-bottom: calc(var(--vf-gutter-lg) / 3);\n}\n.form-p-input {\n  padding: var(--vf-py-input) var(--vf-px-input);\n}\n.form-p-input-border {\n  padding: calc(var(--vf-border-width-input-t) + var(--vf-py-input)) calc(var(--vf-border-width-input-r) + var(--vf-px-input)) calc(var(--vf-border-width-input-b) + var(--vf-py-input)) calc(var(--vf-border-width-input-l) + var(--vf-px-input));\n}\n.form-py-input {\n  padding-top: var(--vf-py-input);\n  padding-bottom: var(--vf-py-input);\n}\n.form-py-input-border {\n  padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input));\n  padding-bottom: calc(var(--vf-border-width-input-b) + var(--vf-py-input));\n}\n.form-px-input {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n}\n.form-pl-input {\n  padding-left: var(--vf-px-input);\n}\n.form-pr-input {\n  padding-right: var(--vf-px-input);\n}\n.form-mr-input {\n  margin-right: var(--vf-px-input);\n}\n.form-pl-tag {\n  padding-left: var(--vf-px-tag);\n}\n.form-pr-tag {\n  padding-right: var(--vf-px-tag);\n}\n.form-pl-input-y {\n  padding-left: var(--vf-py-input);\n}\n.form-ml-space-tags {\n  margin-left: var(--vf-space-tags);\n}\n.form-p-input-sm {\n  padding: var(--vf-py-input-sm) var(--vf-px-input-sm);\n}\n.form-p-input-border-sm {\n  padding: calc(var(--vf-border-width-input-t) + var(--vf-py-input-sm)) calc(var(--vf-border-width-input-r) + var(--vf-px-input-sm)) calc(var(--vf-border-width-input-b) + var(--vf-py-input-sm)) calc(var(--vf-border-width-input-l) + var(--vf-px-input-sm));\n}\n.form-py-input-sm {\n  padding-top: var(--vf-py-input-sm);\n  padding-bottom: var(--vf-py-input-sm);\n}\n.form-py-input-border-sm {\n  padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-sm));\n  padding-bottom: calc(var(--vf-border-width-input-b) + var(--vf-py-input-sm));\n}\n.form-px-input-sm {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n}\n.form-pl-input-sm {\n  padding-left: var(--vf-px-input-sm);\n}\n.form-pr-input-sm {\n  padding-right: var(--vf-px-input-sm);\n}\n.form-mr-input-sm {\n  margin-right: var(--vf-px-input-sm);\n}\n.form-pl-tag-sm {\n  padding-left: var(--vf-px-tag-sm);\n}\n.form-pr-tag-sm {\n  padding-right: var(--vf-px-tag-sm);\n}\n.form-pl-input-y-sm {\n  padding-left: var(--vf-py-input-sm);\n}\n.form-ml-space-tags-sm {\n  margin-left: var(--vf-space-tags-sm);\n}\n.form-p-input-lg {\n  padding: var(--vf-py-input-lg) var(--vf-px-input-lg);\n}\n.form-p-input-border-lg {\n  padding: calc(var(--vf-border-width-input-t) + var(--vf-py-input-lg)) calc(var(--vf-border-width-input-r) + var(--vf-px-input-lg)) calc(var(--vf-border-width-input-b) + var(--vf-py-input-lg)) calc(var(--vf-border-width-input-l) + var(--vf-px-input-lg));\n}\n.form-py-input-lg {\n  padding-top: var(--vf-py-input-lg);\n  padding-bottom: var(--vf-py-input-lg);\n}\n.form-py-input-border-lg {\n  padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-lg));\n  padding-bottom: calc(var(--vf-border-width-input-b) + var(--vf-py-input-lg));\n}\n.form-px-input-lg {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n}\n.form-pl-input-lg {\n  padding-left: var(--vf-px-input-lg);\n}\n.form-pr-input-lg {\n  padding-right: var(--vf-px-input-lg);\n}\n.form-mr-input-lg {\n  margin-right: var(--vf-px-input-lg);\n}\n.form-pl-tag-lg {\n  padding-left: var(--vf-px-tag-lg);\n}\n.form-pr-tag-lg {\n  padding-right: var(--vf-px-tag-lg);\n}\n.form-pl-input-y-lg {\n  padding-left: var(--vf-py-input-lg);\n}\n.form-ml-space-tags-lg {\n  margin-left: var(--vf-space-tags-lg);\n}\n.form-pt-0 {\n  padding-top: 0px;\n}\n.form-pb-gutter\\/3 {\n  padding-bottom: calc(var(--vf-gutter) / 3);\n}\n.form-pr-gutter {\n  padding-right: var(--vf-gutter);\n}\n.form-pr-0 {\n  padding-right: 0px;\n}\n.form-pb-gutter\\/3-sm {\n  padding-bottom: calc(var(--vf-gutter-sm) / 3);\n}\n.form-pr-gutter-sm {\n  padding-right: var(--vf-gutter-sm);\n}\n.form-pb-gutter\\/3-lg {\n  padding-bottom: calc(var(--vf-gutter-lg) / 3);\n}\n.form-pr-gutter-lg {\n  padding-right: var(--vf-gutter-lg);\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:start-\\[2px\\]::after {\n  content: var(--tw-content);\n  inset-inline-start: 2px;\n}\n.after\\:top-\\[2px\\]::after {\n  content: var(--tw-content);\n  top: 2px;\n}\n.after\\:h-5::after {\n  content: var(--tw-content);\n  height: 1.25rem;\n}\n.after\\:w-5::after {\n  content: var(--tw-content);\n  width: 1.25rem;\n}\n.after\\:rounded-full::after {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\n.after\\:border::after {\n  content: var(--tw-content);\n  border-width: 1px;\n}\n.after\\:border-gray-300::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.after\\:bg-white::after {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.after\\:transition-all::after {\n  content: var(--tw-content);\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.after\\:content-\\[\\'\\'\\]::after {\n  --tw-content: '';\n  content: var(--tw-content);\n}\n.checked\\:form-bg-primary:checked {\n  background-color: var(--vf-primary);\n}\n.checked\\:form-border-color-checked:checked {\n  border-color: var(--vf-border-color-checked);\n}\n.checked\\:form-bg-icon-check:checked::after {\n  content: \"\";\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n  display: block;\n  position: relative;\n  width: calc(100% + var(--vf-border-width-checkbox-l) + var(--vf-border-width-checkbox-r));\n  height: calc(100% + var(--vf-border-width-checkbox-t) + var(--vf-border-width-checkbox-b));\n  left: calc(var(--vf-border-width-checkbox-l) * (-1));\n  top: calc(var(--vf-border-width-checkbox-t) * (-1));\n}\n.checked\\:form-bg-icon-radio:checked::after {\n  content: \"\";\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nbody[dir=\"rtl\"] .checked\\:form-bg-icon-check:checked::after {\n  left: auto;\n  right: calc(var(--vf-border-width-checkbox-l) * (-1));\n}\n.checked\\:form-bg-primary:checked {\n  background-color: var(--vf-primary);\n}\n.checked\\:form-border-color-checked:checked {\n  border-color: var(--vf-border-color-checked);\n}\n.checked\\:form-bg-icon-check:checked::after {\n  content: \"\";\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n  display: block;\n  position: relative;\n  width: calc(100% + var(--vf-border-width-checkbox-l) + var(--vf-border-width-checkbox-r));\n  height: calc(100% + var(--vf-border-width-checkbox-t) + var(--vf-border-width-checkbox-b));\n  left: calc(var(--vf-border-width-checkbox-l) * (-1));\n  top: calc(var(--vf-border-width-checkbox-t) * (-1));\n}\n.checked\\:form-bg-icon-radio:checked::after {\n  content: \"\";\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e\");\n          mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3.5'/%3e%3c/svg%3e\");\n  -webkit-mask-position: center center;\n          mask-position: center center;\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background-color: var(--vf-color-on-primary);\n  display: block;\n  width: 100%;\n  height: 100%;\n}\nbody[dir=\"rtl\"] .checked\\:form-bg-icon-check:checked::after {\n  left: auto;\n  right: calc(var(--vf-border-width-checkbox-l) * (-1));\n}\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:bg-black:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n.hover\\:bg-opacity-10:hover {\n  --tw-bg-opacity: 0.1;\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.hover\\:brightness-90:hover {\n  --tw-brightness: brightness(.9);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.hover\\:form-color-input-hover:hover {\n  color: var(--vf-color-input-hover);\n}\n.hover\\:form-bg-input-hover:hover {\n  background-color: var(--vf-bg-input-hover);\n}\n.hover\\:form-border-color-input-hover:hover {\n  border-color: var(--vf-border-color-input-hover);\n}\n.hover\\:form-shadow-input-hover:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.hover\\:form-shadow-handles-hover:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.hover\\:form-color-input-hover:hover {\n  color: var(--vf-color-input-hover);\n}\n.hover\\:form-bg-input-hover:hover {\n  background-color: var(--vf-bg-input-hover);\n}\n.hover\\:form-border-color-input-hover:hover {\n  border-color: var(--vf-border-color-input-hover);\n}\n.hover\\:form-shadow-input-hover:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.hover\\:form-shadow-handles-hover:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.hover\\:form-color-input-hover:hover {\n  color: var(--vf-color-input-hover);\n}\n.hover\\:form-bg-input-hover:hover {\n  background-color: var(--vf-bg-input-hover);\n}\n.hover\\:form-border-color-input-hover:hover {\n  border-color: var(--vf-border-color-input-hover);\n}\n.hover\\:form-shadow-input-hover:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.hover\\:form-shadow-handles-hover:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focus\\:opacity-100:focus {\n  opacity: 1;\n}\n.focus\\:form-ring:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focus\\:form-shadow-handles-focus:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.focus\\:form-ring:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focus\\:form-shadow-handles-focus:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.active\\:cursor-grabbing:active {\n  cursor: grabbing;\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.group:hover .group-hover\\:form-color-input-hover {\n  color: var(--vf-color-input-hover);\n}\n.group:hover .group-hover\\:form-hidden {\n  display: none;\n}\n.group:hover .group-hover\\:form-inline-block {\n  display: inline;\n}\n.group:hover .group-hover\\:form-visible {\n  visibility: visible;\n}\n.group:hover .group-hover\\:form-color-input-hover {\n  color: var(--vf-color-input-hover);\n}\n.group:hover .group-hover\\:form-visible {\n  visibility: visible;\n}\n.peer:checked ~ .peer-checked\\:bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {\n  content: var(--tw-content);\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.peer:checked ~ .peer-checked\\:after\\:border-white::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.peer:focus ~ .peer-focus\\:outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.peer:focus ~ .peer-focus\\:ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.peer:focus ~ .peer-focus\\:ring-blue-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n.slider-horizontal .h\\:left-1\\/2 {\n  left: 50%;\n}\n.slider-horizontal .h\\:h-0 {\n  height: 0px;\n}\n.slider-horizontal .h\\:-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.slider-horizontal .h\\:form-top-slider-handle-horizontal {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * (-1));\n}\n.slider-horizontal .h\\:form-right-slider-handle-horizontal {\n  right: calc(var(--vf-slider-handle-size) / 2 * (-1));\n}\n.slider-horizontal .h\\:form-top-slider-handle-horizontal-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * (-1));\n}\n.slider-horizontal .h\\:form-right-slider-handle-horizontal-sm {\n  right: calc(var(--vf-slider-handle-size-sm) / 2 * (-1));\n}\n.slider-horizontal .h\\:form-top-slider-handle-horizontal-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * (-1));\n}\n.slider-horizontal .h\\:form-right-slider-handle-horizontal-lg {\n  right: calc(var(--vf-slider-handle-size-lg) / 2 * (-1));\n}\n.slider-vertical .v\\:-top-full {\n  top: -100%;\n}\n.slider-vertical .v\\:top-1\\/2 {\n  top: 50%;\n}\n.slider-vertical .v\\:w-0 {\n  width: 0px;\n}\n.slider-vertical .v\\:-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.slider-vertical .v\\:cursor-ns-resize {\n  cursor: ns-resize;\n}\n.slider-vertical .v\\:form-bottom-slider-handle-vertical {\n  bottom: calc(var(--vf-slider-handle-size) / 2 * (-1));\n}\n.slider-vertical .v\\:form-right-slider-handle-vertical {\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * (-1));\n}\n.slider-vertical .v\\:form-bottom-slider-handle-vertical-sm {\n  bottom: calc(var(--vf-slider-handle-size-sm) / 2 * (-1));\n}\n.slider-vertical .v\\:form-right-slider-handle-vertical-sm {\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * (-1));\n}\n.slider-vertical .v\\:form-bottom-slider-handle-vertical-lg {\n  bottom: calc(var(--vf-slider-handle-size-lg) / 2 * (-1));\n}\n.slider-vertical .v\\:form-right-slider-handle-vertical-lg {\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * (-1));\n}\n.slider-horizontal .slider-origin > .merge-h\\:left-auto {\n  left: auto;\n}\n.slider-horizontal .slider-origin > .merge-h\\:translate-x-1\\/2 {\n  --tw-translate-x: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-bottom-slider-tooltip-top-merged {\n  bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-top-slider-tooltip-bottom-merged {\n  top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-bottom-slider-tooltip-top-merged-sm {\n  bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-top-slider-tooltip-bottom-merged-sm {\n  top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-bottom-slider-tooltip-top-merged-lg {\n  bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n.slider-horizontal .slider-origin > .merge-h\\:form-top-slider-tooltip-bottom-merged-lg {\n  top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.slider-vertical .slider-origin > .merge-v\\:top-auto {\n  top: auto;\n}\n.slider-vertical .slider-origin > .merge-v\\:translate-y-1\\/2 {\n  --tw-translate-y: 50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-right-slider-tooltip-left-merged {\n  right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-left-slider-tooltip-right-merged {\n  left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-right-slider-tooltip-left-merged-sm {\n  right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-left-slider-tooltip-right-merged-sm {\n  left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-right-slider-tooltip-left-merged-lg {\n  right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));\n}\n.slider-vertical .slider-origin > .merge-v\\:form-left-slider-tooltip-right-merged-lg {\n  left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));\n}\n.slider-state-tap .tap\\:transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.slider-state-tap .tap\\:duration-300 {\n  transition-duration: 300ms;\n}\n[disabled] .disabled\\:pointer-events-none {\n  pointer-events: none;\n}\n[disabled] .disabled\\:cursor-not-allowed {\n  cursor: not-allowed;\n}\n[disabled] .disabled\\:opacity-50 {\n  opacity: 0.5;\n}\n[disabled] .disabled\\:opacity-60 {\n  opacity: 0.6;\n}\n.checked-focused\\:form-bg-primary:checked:focus {\n  background-color: var(--vf-primary);\n}\n.checked-hover\\:form-bg-primary:checked:hover {\n  background-color: var(--vf-primary);\n}\n.checked-hover\\:form-border-color-checked:checked:hover {\n  border-color: var(--vf-border-color-checked);\n}\n.checked-hover\\:form-bg-primary:checked:hover {\n  background-color: var(--vf-primary);\n}\n.checked-hover\\:form-border-color-checked:checked:hover {\n  border-color: var(--vf-border-color-checked);\n}\n.slider-tooltip-focus:not(.slider-focused) .tt-focus\\:hidden {\n  display: none !important;\n}\n.slider-tooltip-focus.slider-focused .tt-focused\\:block\\:not\\(_____\\.slider-tooltip-hidden\\) {\n  display: block !important;\n}\n.slider-tooltip-drag:not(.slider-state-drag) .tt-drag\\:hidden {\n  display: none !important;\n}\n.slider-tooltip-drag.slider-state-drag .tt-dragging\\:block\\:not\\(_____\\.slider-tooltip-hidden\\) {\n  display: block !important;\n}\n.label-floating ~ .with-floating\\:form-p-input-floating {\n  padding-top: calc(var(--vf-py-input) + (var(--vf-floating-top) / 2));\n  padding-bottom: calc(var(--vf-py-input) - (var(--vf-floating-top) / 2));\n}\n.label-floating ~ .with-floating\\:form-p-tags-floating {\n  padding-left: var(--vf-px-input);\n  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;\n}\n.label-floating ~ .with-floating\\:form-p-input-floating-sm {\n  padding-top: calc(var(--vf-py-input-sm) + (var(--vf-floating-top-sm) / 2));\n  padding-bottom: calc(var(--vf-py-input-sm) - (var(--vf-floating-top-sm) / 2));\n}\n.label-floating ~ .with-floating\\:form-p-tags-floating-sm {\n  padding-left: var(--vf-px-input-sm);\n  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;\n}\n.label-floating ~ .with-floating\\:form-p-input-floating-lg {\n  padding-top: calc(var(--vf-py-input-lg) + (var(--vf-floating-top-lg) / 2));\n  padding-bottom: calc(var(--vf-py-input-lg) - (var(--vf-floating-top-lg) / 2));\n}\n.label-floating ~ .with-floating\\:form-p-tags-floating-lg {\n  padding-left: var(--vf-px-input-lg);\n  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;\n}\n.label-floating ~ div .with-floating\\:form-p-input-floating {\n  padding-top: calc(var(--vf-py-input) + (var(--vf-floating-top) / 2));\n  padding-bottom: calc(var(--vf-py-input) - (var(--vf-floating-top) / 2));\n}\n.label-floating ~ div .with-floating\\:form-p-tags-floating {\n  padding-left: var(--vf-px-input);\n  margin: calc(var(--vf-space-tags) + var(--vf-floating-top) + 0.34375rem - 1px) 0 0;\n}\n.label-floating ~ div .with-floating\\:form-p-input-floating-sm {\n  padding-top: calc(var(--vf-py-input-sm) + (var(--vf-floating-top-sm) / 2));\n  padding-bottom: calc(var(--vf-py-input-sm) - (var(--vf-floating-top-sm) / 2));\n}\n.label-floating ~ div .with-floating\\:form-p-tags-floating-sm {\n  padding-left: var(--vf-px-input-sm);\n  margin: calc(var(--vf-space-tags-sm) + var(--vf-floating-top-sm) + 0.34375rem - 1px) 0 0;\n}\n.label-floating ~ div .with-floating\\:form-p-input-floating-lg {\n  padding-top: calc(var(--vf-py-input-lg) + (var(--vf-floating-top-lg) / 2));\n  padding-bottom: calc(var(--vf-py-input-lg) - (var(--vf-floating-top-lg) / 2));\n}\n.label-floating ~ div .with-floating\\:form-p-tags-floating-lg {\n  padding-left: var(--vf-px-input-lg);\n  margin: calc(var(--vf-space-tags-lg) + var(--vf-floating-top-lg) + 0.34375rem - 1px) 0 0;\n}\n.focused\\:form-color-input-focus.form-focus {\n  color: var(--vf-color-input-focus);\n}\n.focused\\:form-bg-input-focus.form-focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.focused\\:form-border-color-input-focus.form-focus {\n  border-color: var(--vf-border-color-input-focus);\n}\n.focused\\:form-ring.form-focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focused\\:form-shadow-input-focus.form-focus {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-focus);\n}\n.focused\\:form-shadow-handles-focus.form-focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.focused\\:form-color-input-focus.form-focus {\n  color: var(--vf-color-input-focus);\n}\n.focused\\:form-bg-input-focus.form-focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.focused\\:form-border-color-input-focus.form-focus {\n  border-color: var(--vf-border-color-input-focus);\n}\n.focused\\:form-ring.form-focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focused\\:form-shadow-input-focus.form-focus {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-focus);\n}\n.focused\\:form-shadow-handles-focus.form-focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.focused\\:form-color-input-focus:focus {\n  color: var(--vf-color-input-focus);\n}\n.focused\\:form-bg-input-focus:focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.focused\\:form-border-color-input-focus:focus {\n  border-color: var(--vf-border-color-input-focus);\n}\n.focused\\:form-ring:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focused\\:form-shadow-input-focus:focus {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-focus);\n}\n.focused\\:form-shadow-handles-focus:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.focused\\:form-color-input-focus:focus {\n  color: var(--vf-color-input-focus);\n}\n.focused\\:form-bg-input-focus:focus {\n  background-color: var(--vf-bg-input-focus);\n}\n.focused\\:form-border-color-input-focus:focus {\n  border-color: var(--vf-border-color-input-focus);\n}\n.focused\\:form-ring:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color);\n}\n.focused\\:form-shadow-input-focus:focus {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-focus);\n}\n.focused\\:form-shadow-handles-focus:focus {\n  box-shadow: var(--vf-shadow-handles-focus);\n}\n.focused-hover\\:form-shadow-input-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focused-hover\\:form-shadow-input-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focused-hover\\:form-shadow-input-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover.form-focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focused-hover\\:form-shadow-input-hover:focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover:focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focused-hover\\:form-shadow-input-hover:focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover:focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.focused-hover\\:form-shadow-input-hover:focus:hover {\n  box-shadow: var(--vf-shadow-input), var(--vf-shadow-input-hover);\n}\n.focused-hover\\:form-shadow-handles-hover:focus:hover {\n  box-shadow: var(--vf-shadow-handles-hover);\n}\n.form-list-group:hover > .list-group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.form-info-group:hover .info-group-hover\\:opacity-100 {\n  opacity: 1;\n}\n.form-info-group:hover .info-group-hover\\:form-visible {\n  visibility: visible;\n}\n.form-input-group .in-input-group\\:-form-top-border-width-input-t {\n  top: calc(var(--vf-border-width-input-t) * (-1));\n}\n.sortable-ghost.ghost\\:opacity-60 {\n  opacity: 0.6;\n}\n.form-text-type .text-type\\:form-pt-input-border {\n  padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n}\n.form-text-type .text-type\\:form-pt-input-border-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n}\n.form-text-type .text-type\\:form-pt-input-border-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n}\n.form-text-type .text-type\\:form-pt-input-border {}\n.form-text-type .text-type\\:form-pt-input-border-sm {}\n.form-text-type .text-type\\:form-pt-input-border-lg {}\n.form-text-type .text-type\\:form-pt-input-border {\n  padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n}\n.form-text-type .text-type\\:form-pt-input-border-sm {\n  padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n}\n.form-text-type .text-type\\:form-pt-input-border-lg {\n  padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n}\n@media (min-width: 640px) {\n\n  .sm\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .sm\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .sm\\:col-span-11 {\n    grid-column: span 11 / span 11;\n  }\n\n  .sm\\:col-span-12 {\n    grid-column: span 12 / span 12;\n  }\n\n  .sm\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .sm\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .sm\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .sm\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .sm\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .sm\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .sm\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .sm\\:col-span-9 {\n    grid-column: span 9 / span 9;\n  }\n\n  .sm\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .sm\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .form-text-type .sm\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .sm\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .sm\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .sm\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .sm\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .sm\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .sm\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .sm\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .sm\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .sm\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .sm\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .sm\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .sm\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .sm\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .sm\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border {}\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-sm {}\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-lg {}\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .sm\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .md\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .md\\:col-span-11 {\n    grid-column: span 11 / span 11;\n  }\n\n  .md\\:col-span-12 {\n    grid-column: span 12 / span 12;\n  }\n\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .md\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .md\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .md\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .md\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .md\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .md\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .md\\:col-span-9 {\n    grid-column: span 9 / span 9;\n  }\n\n  .md\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .md\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .form-text-type .md\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .md\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .md\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .md\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .md\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .md\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .md\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .md\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .md\\:form-text-h1 {\n    font-size: var(--vf-font-size-h1);\n    line-height: var(--vf-line-height-headings);\n    letter-spacing: var(--vf-letter-spacing-headings);\n  }\n\n  .md\\:form-text-h2 {\n    font-size: var(--vf-font-size-h2);\n    line-height: var(--vf-line-height-headings);\n    letter-spacing: var(--vf-letter-spacing-headings);\n  }\n\n  .md\\:form-text-h3 {\n    font-size: var(--vf-font-size-h3);\n    line-height: var(--vf-line-height-headings);\n    letter-spacing: var(--vf-letter-spacing-headings);\n  }\n\n  .md\\:form-text-h4 {\n    font-size: var(--vf-font-size-h4);\n    line-height: var(--vf-line-height-headings);\n    letter-spacing: var(--vf-letter-spacing-headings);\n  }\n\n  .md\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .md\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .md\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .md\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .md\\:form-text-h1-sm {\n    font-size: var(--vf-font-size-h1-sm);\n    line-height: var(--vf-line-height-headings-sm);\n    letter-spacing: var(--vf-letter-spacing-headings-sm);\n  }\n\n  .md\\:form-text-h2-sm {\n    font-size: var(--vf-font-size-h2-sm);\n    line-height: var(--vf-line-height-headings-sm);\n    letter-spacing: var(--vf-letter-spacing-headings-sm);\n  }\n\n  .md\\:form-text-h3-sm {\n    font-size: var(--vf-font-size-h3-sm);\n    line-height: var(--vf-line-height-headings-sm);\n    letter-spacing: var(--vf-letter-spacing-headings-sm);\n  }\n\n  .md\\:form-text-h4-sm {\n    font-size: var(--vf-font-size-h4-sm);\n    line-height: var(--vf-line-height-headings-sm);\n    letter-spacing: var(--vf-letter-spacing-headings-sm);\n  }\n\n  .md\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .md\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .md\\:form-text-h1-lg {\n    font-size: var(--vf-font-size-h1-lg);\n    line-height: var(--vf-line-height-headings-lg);\n    letter-spacing: var(--vf-letter-spacing-headings-lg);\n  }\n\n  .md\\:form-text-h2-lg {\n    font-size: var(--vf-font-size-h2-lg);\n    line-height: var(--vf-line-height-headings-lg);\n    letter-spacing: var(--vf-letter-spacing-headings-lg);\n  }\n\n  .md\\:form-text-h3-lg {\n    font-size: var(--vf-font-size-h3-lg);\n    line-height: var(--vf-line-height-headings-lg);\n    letter-spacing: var(--vf-letter-spacing-headings-lg);\n  }\n\n  .md\\:form-text-h4-lg {\n    font-size: var(--vf-font-size-h4-lg);\n    line-height: var(--vf-line-height-headings-lg);\n    letter-spacing: var(--vf-letter-spacing-headings-lg);\n  }\n\n  .md\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .md\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border {}\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-sm {}\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-lg {}\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .md\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .lg\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .lg\\:col-span-11 {\n    grid-column: span 11 / span 11;\n  }\n\n  .lg\\:col-span-12 {\n    grid-column: span 12 / span 12;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .lg\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .lg\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .lg\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .lg\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .lg\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .lg\\:col-span-9 {\n    grid-column: span 9 / span 9;\n  }\n\n  .lg\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .lg\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .form-text-type .lg\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .lg\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .lg\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .lg\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .lg\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .lg\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .lg\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .lg\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .lg\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .lg\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .lg\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .lg\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .lg\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .lg\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .lg\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .lg\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border {}\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-sm {}\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-lg {}\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .lg\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n}\n@media (min-width: 1280px) {\n\n  .xl\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .xl\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .xl\\:col-span-11 {\n    grid-column: span 11 / span 11;\n  }\n\n  .xl\\:col-span-12 {\n    grid-column: span 12 / span 12;\n  }\n\n  .xl\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .xl\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .xl\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .xl\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .xl\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .xl\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .xl\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .xl\\:col-span-9 {\n    grid-column: span 9 / span 9;\n  }\n\n  .xl\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .form-text-type .xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .xl\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .xl\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .xl\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .xl\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .xl\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .xl\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .xl\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .xl\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .xl\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .xl\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .xl\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .xl\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .xl\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .xl\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border {}\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-sm {}\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-lg {}\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .xl\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n}\n@media (min-width: 1536px) {\n\n  .\\32xl\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n\n  .\\32xl\\:col-span-10 {\n    grid-column: span 10 / span 10;\n  }\n\n  .\\32xl\\:col-span-11 {\n    grid-column: span 11 / span 11;\n  }\n\n  .\\32xl\\:col-span-12 {\n    grid-column: span 12 / span 12;\n  }\n\n  .\\32xl\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .\\32xl\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n\n  .\\32xl\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n\n  .\\32xl\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n\n  .\\32xl\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n\n  .\\32xl\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n\n  .\\32xl\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .\\32xl\\:col-span-9 {\n    grid-column: span 9 / span 9;\n  }\n\n  .\\32xl\\:pb-0 {\n    padding-bottom: 0px;\n  }\n\n  .\\32xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .form-text-type .\\32xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .\\32xl\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .\\32xl\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .\\32xl\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .\\32xl\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .\\32xl\\:form-pt-0 {\n    padding-top: 0px;\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3 {\n    padding-bottom: calc(var(--vf-gutter) / 3);\n  }\n\n  .\\32xl\\:form-pr-gutter {\n    padding-right: var(--vf-gutter);\n  }\n\n  .\\32xl\\:form-pr-0 {\n    padding-right: 0px;\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3-sm {\n    padding-bottom: calc(var(--vf-gutter-sm) / 3);\n  }\n\n  .\\32xl\\:form-pr-gutter-sm {\n    padding-right: var(--vf-gutter-sm);\n  }\n\n  .\\32xl\\:form-pb-gutter\\/3-lg {\n    padding-bottom: calc(var(--vf-gutter-lg) / 3);\n  }\n\n  .\\32xl\\:form-pr-gutter-lg {\n    padding-right: var(--vf-gutter-lg);\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border {}\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-sm {}\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-lg {}\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border {\n    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-sm {\n    padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));\n  }\n\n  .form-text-type .\\32xl\\:text-type\\:form-pt-input-border-lg {\n    padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));\n  }\n}\n.rtl\\:left-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  left: 0px;\n}\n.rtl\\:left-auto:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  left: auto;\n}\n.rtl\\:right-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  right: 0px;\n}\n.rtl\\:right-auto:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  right: auto;\n}\n.rtl\\:-order-1:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  order: -1;\n}\n.rtl\\:order-none:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  order: 0;\n}\n.rtl\\:\\!mr-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-right: 0px !important;\n}\n.rtl\\:ml-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: 0px;\n}\n.rtl\\:mr-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-right: 0px;\n}\n.rtl\\:justify-start:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  justify-content: flex-start;\n}\n.rtl\\:justify-end:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  justify-content: flex-end;\n}\n.rtl\\:pl-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: 0px;\n}\n.rtl\\:pl-3:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: 0.75rem;\n}\n.rtl\\:pl-3\\.5:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: 0.875rem;\n}\n.rtl\\:pr-0:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: 0px;\n}\n.rtl\\:form-right-input:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  right: var(--vf-px-input);\n}\n.rtl\\:form-mr-space-checkbox:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-right: var(--vf-space-checkbox);\n}\n.rtl\\:form-ml-space-checkbox:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-checkbox);\n}\n.rtl\\:form-right-input-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  right: var(--vf-px-input-sm);\n}\n.rtl\\:form-mr-space-checkbox-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-right: var(--vf-space-checkbox-sm);\n}\n.rtl\\:form-ml-space-checkbox-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-checkbox-sm);\n}\n.rtl\\:form-right-input-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  right: var(--vf-px-input-lg);\n}\n.rtl\\:form-mr-space-checkbox-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-right: var(--vf-space-checkbox-lg);\n}\n.rtl\\:form-ml-space-checkbox-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-checkbox-lg);\n}\n.rtl\\:form-pl-input:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-input);\n}\n.rtl\\:form-pr-input:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-input);\n}\n.rtl\\:form-ml-input:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-px-input);\n}\n.rtl\\:form-pl-select:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input) * 2.5 + 20px);\n}\n.rtl\\:form-pl-select-no-caret:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n.rtl\\:form-pl-select-no-clear:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input) * 1.5 + 10px);\n}\n.rtl\\:form-pl-tag:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-tag);\n}\n.rtl\\:form-pr-tag:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-tag);\n}\n.rtl\\:form-pr-input-y:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-py-input);\n}\n.rtl\\:form-ml-space-tags:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-tags);\n}\n.rtl\\:form-pl-input-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-input-sm);\n}\n.rtl\\:form-pr-input-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-input-sm);\n}\n.rtl\\:form-ml-input-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-px-input-sm);\n}\n.rtl\\:form-pl-select-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input-sm) * 2.5 + 20px);\n}\n.rtl\\:form-pl-select-no-caret-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n.rtl\\:form-pl-select-no-clear-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input-sm) * 1.5 + 10px);\n}\n.rtl\\:form-pl-tag-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-tag-sm);\n}\n.rtl\\:form-pr-tag-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-tag-sm);\n}\n.rtl\\:form-pr-input-y-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-py-input-sm);\n}\n.rtl\\:form-ml-space-tags-sm:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-tags-sm);\n}\n.rtl\\:form-pl-input-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-input-lg);\n}\n.rtl\\:form-pr-input-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-input-lg);\n}\n.rtl\\:form-ml-input-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-px-input-lg);\n}\n.rtl\\:form-pl-select-no-caret-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n.rtl\\:form-pl-select-no-clear-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: calc(var(--vf-px-input-lg) * 1.5 + 10px);\n}\n.rtl\\:form-pl-tag-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-left: var(--vf-px-tag-lg);\n}\n.rtl\\:form-pr-tag-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-px-tag-lg);\n}\n.rtl\\:form-pr-input-y-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  padding-right: var(--vf-py-input-lg);\n}\n.rtl\\:form-ml-space-tags-lg:where([dir=\"rtl\"], [dir=\"rtl\"] *) {\n  margin-left: var(--vf-space-tags-lg);\n}\n.peer:checked ~ .rtl\\:peer-checked\\:after\\:-translate-x-full:where([dir=\"rtl\"], [dir=\"rtl\"] *)::after {\n  content: var(--tw-content);\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@media (prefers-color-scheme: dark) {\n\n  .dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n\n  .dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n\n  .dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n\n  .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n  }\n}\n";
n(css,{});

var e0 = {
	id: 'volume-editor',
	name: 'Editeur de volume',
	icon: 'book',
	routes: [
		{
      name: 'index',
			path: '',
			component: ModuleComponent,
		},
		{
      name: 'edit',
			path: 'edit/:id',
			component: EditComponent,
      props: true,
		},
	],
};

const interfaces = [];const displays = [];const layouts = [];const modules = [e0];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
