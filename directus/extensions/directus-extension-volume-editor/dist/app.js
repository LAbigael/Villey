import { useItems } from '@directus/extensions-sdk';
import { ref, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, Suspense, resolveComponent, createBlock, withCtx, createVNode } from 'vue';

var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main$1 = {
  async setup() {
    console.log("VolumeList setup");
    const collectionRef = ref("Volumes");

    const query = {
      fields: ref(["*"]),
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
    console.log(data);

    return {
      data,
    };
  },
};

const _hoisted_1$1 = /*#__PURE__*/createElementVNode("div", null, "Les volumes", -1 /* HOISTED */);

function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1$1,
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.data, (item) => {
      return (openBlock(), createElementBlock("div", {
        key: item.id
      }, [
        createElementVNode("div", null, toDisplayString(item.title), 1 /* TEXT */)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ], 64 /* STABLE_FRAGMENT */))
}
var VolumeList = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render$1],['__file',"VolumeList.vue"]]);

const _sfc_main = {
  components: { VolumeList, Suspense },
  setup() { },
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("div", null, "Content goes here... not", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createElementVNode("div", null, "Loading...", -1 /* HOISTED */);

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VolumeList = resolveComponent("VolumeList");
  const _component_private_view = resolveComponent("private-view");

  return (openBlock(), createBlock(_component_private_view, { title: "Editeur de volume" }, {
    default: withCtx(() => [
      _hoisted_1,
      (openBlock(), createBlock(Suspense, null, {
        default: withCtx(() => [
          createVNode(_component_VolumeList)
        ]),
        fallback: withCtx(() => [
          _hoisted_2
        ]),
        _: 1 /* STABLE */
      })),
      createVNode(_component_VolumeList)
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
