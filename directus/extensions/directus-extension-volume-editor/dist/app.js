import { resolveComponent, openBlock, createBlock, withCtx, createTextVNode } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Editeur de volume" }, {
    default: withCtx(() => [
      createTextVNode("Content goes here... Or maybe not")
    ]),
    _: 1 /* STABLE */
  }))
}
var ModuleComponent = /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"module.vue"]]);

var e0 = {
	id: 'volume-editor',
	name: 'Editeur de volume',
	icon: 'book',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
};

const interfaces = [];const displays = [];const layouts = [];const modules = [e0];const panels = [];const themes = [];const operations = [];

export { displays, interfaces, layouts, modules, operations, panels, themes };
