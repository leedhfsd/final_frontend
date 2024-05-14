<script setup>
	import { ref } from "vue";
	const items = ref([
		{ title: "Click Me" },
		{ title: "Click Me 1" },
		{ title: "Click Me 2" },
		{ title: "Click Me 3" },
	]);
</script>

<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="2">
					<v-sheet rounded="lg">
						<v-list rounded="lg">
							<v-list-item v-for="n in 5" :key="n" :title="`List Item ${n}`" link></v-list-item>

							<v-divider class="my-2"></v-divider>

							<v-list-item color="grey-lighten-4" title="Refresh" link></v-list-item>
						</v-list>
					</v-sheet>
				</v-col>

				<v-col>
					<v-sheet min-height="70vh" rounded="lg">
						<!--  -->
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<style lang="scss" scoped></style>
