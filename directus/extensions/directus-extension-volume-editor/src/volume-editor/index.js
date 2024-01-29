import ModuleComponent from './module.vue';
import EditComponent from './edit.vue';
import "../index.css";

export default {
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
