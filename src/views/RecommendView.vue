<script setup>
	import { ref } from "vue";
	const title = ref([
		{ title: "가장 인기 있는 장소" },
		{ title: "최고의 요리 명소" },
		{ title: "이러한 자연경관은 어떠세요?" },
		{ title: "나를 위한 최고의 숙소" },
	]);

	const items = ref([
		{
			title: ["Card 1", "Card 2", "Card 3", "Card 4"],
			text: [
				"This is the first card.",
				"This is the second card.",
				"This is the third card.",
				"This is the fourth card.",
			],
		},
		{
			title: ["Card 5", "Card 6", "Card 7", "Card 8"],
			text: [
				"This is the fifth card.",
				"This is the sixth card.",
				"This is the seventh card.",
				"This is the eighth card.",
			],
		},
		{
			title: ["Card 9", "Card 10", "Card 11", "Card 12"],
			text: [
				"This is the ninth card.",
				"This is the tenth card.",
				"This is the eleventh card.",
				"This is the twelfth card.",
			],
		},
	]);
</script>

<template>
	<!-- <v-container>
		<v-row>
			<template v-for="item in items" :key="item.title">
				<v-col class="mt-2" cols="12">
					<strong class="text-h5">{{ item.title }}</strong>
				</v-col>

				<v-col v-for="j in 4" :key="`${n}${j}`" cols="4" md="3">
					<v-sheet height="250"></v-sheet>
				</v-col>
			</template>
		</v-row>
	</v-container> -->
	<v-container>
		<v-carousel v-for="(item, index) in items" :key="index" hide-delimiters>
			<v-carousel-item>
				<v-row>
					<v-col v-for="j in 4" :key="`${index}-${j}`" cols="3">
						<v-card>
							<v-card-title>{{ item.title[j - 1] }}</v-card-title>
							<v-card-text>{{ item.text[j - 1] }}</v-card-text>
						</v-card>
					</v-col>
				</v-row>
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>

<style scoped></style>
