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
	<v-card class="mx-auto">
		<v-img class="align-end text-white" height="150" :src="attraction.firstImage" cover>
			<v-card-title>{{ attraction.title }}</v-card-title>
		</v-img>

		<v-card-subtitle class="pt-4">
			<span style="color: #50d4e5">{{ attraction.contentTypeId }}</span>
			<span style="color: #88929c">{{ attraction.addr1 }}</span>
		</v-card-subtitle>

		<v-card-text style="height: 100px">
			<div style="overflow: hidden; text-overflow: ellipsis">
				{{ attraction.description }}
			</div>
		</v-card-text>

		<v-card-actions>
			<v-btn :prepend-icon="mdiHeart" color="#ff4081" :text="attraction.like"></v-btn>
			<v-btn :prepend-icon="mdiStar" color="#fcba03" :text="attraction.rating"></v-btn>
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
