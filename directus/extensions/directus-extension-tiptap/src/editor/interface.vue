<template>
	<input :value="value" @input="handleChange($event.target.value)" />
	<div>coucou</div>
</template>

<script>
export default {
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
</script>
