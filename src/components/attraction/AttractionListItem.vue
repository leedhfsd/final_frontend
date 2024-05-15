<script setup>
	import { defineProps } from "vue";
	import { mdiHeart, mdiStarOutline, mdiStar, mdiStarHalfFull } from "@mdi/js";

	const props = defineProps({
		attraction: {
			type: Object,
			required: true,
			id: {
				type: Number,
			},
			title: {
				type: String,
			},
			description: {
				type: String,
			},
			contentTypeId: {
				type: Number,
			},
			firstImage: {
				type: String,
			},
			addr1: {
				type: String,
			},
			like: {
				type: String,
			},
			rating: {
				type: String,
			},
		},
	});
</script>

<template>
	<v-card>
		<v-img :src="props.attraction.firstImage" height="200px">
			<v-btn icon small class="position-absolute top-0 right-0">
				<v-icon :icon="mdiHeart"></v-icon>
			</v-btn>
		</v-img>
		<v-card-title>{{ props.attraction.title }}</v-card-title>
		<v-card-subtitle class="pb-0">
			{{ props.attraction.description }}
		</v-card-subtitle>
		<v-card-text class="d-flex align-center">
			<v-rating
				:value="parseFloat(props.attraction.rating)"
				:empty-icon="mdiStarOutline"
				:full-icon="mdiStar"
				:half-icon="mdiStarHalfFull"
				color="primary"
				density="compact"
				size="15"
				half-increments
				readonly
			></v-rating>
			<span class="text-body-2 ml-2">{{ props.attraction.rating }}</span>
		</v-card-text>
		<v-card-text>
			{{ props.attraction.addr1 }}
		</v-card-text>
	</v-card>
</template>

<style scoped>
	.v-card {
		position: relative;
	}
	.v-btn {
		background-color: white;
	}
</style>
