<script setup>
	import { ref } from "vue";
	import AttractionListItem from "@/components/attraction/AttractionListItem.vue";
	import { useAttractionStore } from "@/stores/attraction";

	const store = useAttractionStore();
	const heading = ref([
		{ title: "가장 인기 있는 장소" },
		{ title: "최고의 요리 명소" },
		{ title: "이러한 자연경관은 어떠세요?" },
		{ title: "나를 위한 최고의 숙소" },
	]);
	const attractions = store.attractions;
</script>

<template>
	<v-container>
		<v-carousel v-for="(item, index) in 4" :key="index" hide-delimiters>
			<strong class="text-h5 mb-3">{{ heading[index].title }}</strong>
			<v-carousel-item>
				<v-row>
					<v-col v-for="j in 4" :key="`${index}-${j}`" cols="3">
						<attraction-list-item :attraction="attractions[index]" />
					</v-col>
				</v-row>
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>

<style scoped></style>
