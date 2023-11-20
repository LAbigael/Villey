import { openBlock, createElementBlock, Fragment, createElementVNode } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
	props: {
		value: {
			type: String,
			default: null,
		},
	},
	emits: ['input'],
	setup(props, { emit }) {
		return { handleChange };

		function handleChange(value) {
			emit('input', value);
		}
	},
};

const _hoisted_1 = ["value"];
const _hoisted_2 = /*#__PURE__*/createElementVNode("div", null, "coucou", -1 /* HOISTED */);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("input", {
      value: $props.value,
      onInput: _cache[0] || (_cache[0] = $event => ($setup.handleChange($event.target.value)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1),
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
}
var InterfaceComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"interface.vue"]]);

var e0 = {
	id: 'tiptap',
	name: 'Tiptap',
	icon: 'box',
	description: 'WYSIWYG editor for Directus',
	component: InterfaceComponent,
	options: null,
	types: ['json'],
};

const interfaces = [e0];const displays = [];const layouts = [];const modules = [];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
