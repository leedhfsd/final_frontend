<script setup>
	import { mdiHeart, mdiStar } from "@mdi/js";
	defineProps({
		attraction: {
			type: Object,
			reuqired: true,
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
				type: Number,
			},
			rating: {
				type: Number,
			},
		},
	});
</script>

<template>
	<v-card class="mx-auto" max-width="344">
		<v-img class="align-end text-white" height="200" :src="attraction.firstImage" cover> </v-img>
		<v-card-title
			><strong>{{ attraction.title }}</strong></v-card-title
		>
		<v-card-subtitle class="pt-4">
			<span style="color: #50d4e5; margin-right: 12px">{{ attraction.contentTypeId }}</span>
			<span>{{ attraction.addr1 }}</span>
		</v-card-subtitle>

		<v-card-text style="height: 75px">
			<div style="overflow: hidden; text-overflow: ellipsis">
				{{ attraction.description }}
			</div>
		</v-card-text>

		<v-card-actions>
			<v-btn :prepend-icon="mdiHeart" color="#ff4081" :text="attraction.like"></v-btn>
			<v-btn :prepend-icon="mdiStar" color="#0096C7" :text="attraction.rating"></v-btn>
		</v-card-actions>
	</v-card>
</template>

<style scoped>
	div {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>
