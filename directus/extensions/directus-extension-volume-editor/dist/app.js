import { useItems } from '@directus/extensions-sdk';
import { ref, resolveComponent, openBlock, createElementBlock, Fragment, renderList, createBlock, withCtx, createVNode, createTextVNode, toDisplayString, Suspense, createElementVNode, reactive, computed, unref, nextTick, onMounted, isRef, watch, provide, toValue, readonly, watchEffect, shallowRef, withDirectives, mergeProps, vModelText } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$3 = {
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

function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
            createTextVNode(toDisplayString(item.title) + " ", 1 /* TEXT */),
            createVNode(_component_VIcon, {
              small: true,
              name: "circle",
              filled: item.active ? 'true' : 'false'
            }, null, 8 /* PROPS */, ["filled"])
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])
      ]),
      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */))
  }), 128 /* KEYED_FRAGMENT */))
}
var VolumeList = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render$3],['__file',"VolumeList.vue"]]);

const _sfc_main$2 = {
  components: { VolumeList, Suspense },
  setup() { },
};

const _hoisted_1$2 = /*#__PURE__*/createElementVNode("h2", null, "Liste des volumes", -1 /* HOISTED */);
const _hoisted_2$1 = /*#__PURE__*/createElementVNode("div", null, "Loading...", -1 /* HOISTED */);

function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VolumeList = resolveComponent("VolumeList");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Liste des volumes" }, {
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
      "published_at",
      "sections.title",
      "sections.id",
      "sections.position",
      "sections.articles.title",
      "sections.articles.authors.author_id.fullname",
    ];
    const { getItems, items } = useItems(collectionRef, query);

    await getItems();

    return items?.value[0];
  }
  return { getVolume };
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

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = "\nform {\n    display: flex;\n    flex-direction: column\n}\ninput {\n    width: 50%;\n    border-radius: 0.375rem;\n    border-width: 1px;\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n    padding: 0.5rem;\n    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.chapter_title {\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n    padding: 0.25rem;\n    font-size: 1.5rem;\n    line-height: 2rem;\n    font-weight: 600;\n    font-style: italic;\n    --tw-text-opacity: 1;\n    color: rgb(213 185 133 / var(--tw-text-opacity))\n}\n";
n(css$1,{});

const _sfc_main$1 = {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  async setup(props) {
    const { id } = props;
    const { getVolume } = useVolumes();
    const data = await getVolume(id);

    const { handleSubmit, defineField } = useForm({
      initialValues: { ...data, published_at: data.published_at.split("T")[0] },
    });

    const onSubmit = handleSubmit((values) => {
      console.log(JSON.stringify(values, null, 2));
    });

    const [title, titleAttrs] = defineField("title");
    const [number, numberAttrs] = defineField("number");
    const [published_at, published_atAttrs] = defineField("published_at");
    const [active, activeAttrs] = defineField("active");

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
    };
  },
};

const _hoisted_1$1 = /*#__PURE__*/createElementVNode("label", { class: "relative inline-flex items-center cursor-pointer" }, [
  /*#__PURE__*/createElementVNode("input", {
    type: "checkbox",
    value: "",
    class: "sr-only peer"
  }),
  /*#__PURE__*/createElementVNode("div", { class: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" }),
  /*#__PURE__*/createElementVNode("span", { class: "ms-3 font-medium text-gray-900 dark:text-gray-300" }, "En ligne")
], -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createElementVNode("label", null, "Titre du volume ", -1 /* HOISTED */);
const _hoisted_3 = /*#__PURE__*/createElementVNode("label", null, "Numéro du volume ", -1 /* HOISTED */);
const _hoisted_4 = /*#__PURE__*/createElementVNode("label", null, "Date de publication ", -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/createElementVNode("button", null, "Submit", -1 /* HOISTED */);
const _hoisted_6 = { class: "chapter_title" };

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("form", {
      onSubmit: _cache[3] || (_cache[3] = (...args) => ($setup.onSubmit && $setup.onSubmit(...args)))
    }, [
      _hoisted_1$1,
      _hoisted_2,
      withDirectives(createElementVNode("input", mergeProps({
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.title) = $event))
      }, $setup.titleAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.title]
      ]),
      _hoisted_3,
      withDirectives(createElementVNode("input", mergeProps({
        type: "text",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.number) = $event))
      }, $setup.numberAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.number]
      ]),
      _hoisted_4,
      withDirectives(createElementVNode("input", mergeProps({
        type: "date",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.published_at) = $event))
      }, $setup.published_atAttrs), null, 16 /* FULL_PROPS */), [
        [vModelText, $setup.published_at]
      ]),
      _hoisted_5
    ], 32 /* NEED_HYDRATION */),
    createElementVNode("h3", _hoisted_6, "Liste des chapitres et articles associés au numéro \"" + toDisplayString($setup.data.title) + "\"", 1 /* TEXT */)
  ], 64 /* STABLE_FRAGMENT */))
}
var VolumeEdit = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__file',"VolumeEdit.vue"]]);

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
