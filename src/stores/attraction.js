import { defineStore } from "pinia";
import { ref } from "vue";

export const useAttractionStore = defineStore("attraction", () => {
	let id = 0;
	const attractions = ref([
		{
			id: id++,
			title: "성산 일출봉",
			description: "금강산 찾아가자 일만일출봉 보다 성산 일출봉",
			contentTypeId: 15,
			firstImage:
				"https://cdn.myro.co.kr/prod/image/advertisement/place/b79984ff-2ec9-49b3-803c-e48ed42e63aa_20240502-234756",
			addr1: "대한민국 서귀포시 성산 일출봉",
			like: 1234,
			rating: 4.7,
		},
		{
			id: id++,
			title: "대기정",
			description: "대기정은 무조건 대기를 해야하는 유명 맛집!.",
			contentTypeId: 15,
			firstImage: "https://cdn.myro.co.kr/prod/image/place/Jeju/343_3dddf18c-f4d3-4698-a81c-2fdf48af5a41",
			addr1: " 대한민국 제주특별자치도 제주시 특별자치도, 항골남길 46",
			like: 1400,
			rating: 4.3,
		},
		{
			id: id++,
			title: "김유정역",
			description: "김유정 역입니다.",
			contentTypeId: 15,
			firstImage: "https://cdn.myro.co.kr/prod/image/place/Chuncheon/7285_159571dd-02df-4501-ba8d-43702f05e620",
			addr1: "대한민국 춘천시",
			like: 941,
			rating: 4.6,
		},
		{
			id: id++,
			title: "남이섬",
			description:
				"울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.울창한 숲 속에 갤러리, 박물관, 무대가 있으며 늘 축제가 펼쳐지는 그림 같은 생태 관광지입니다.",
			contentTypeId: 15,
			firstImage: "https://cdn.myro.co.kr/prod/image/place/Chuncheon/7284_2344e17f-4f67-4906-965f-6510f6435ae5",
			addr1: "대대한민국 강원도 춘천시 남산면 남이섬길 1",
			like: 150,
			rating: 4.9,
		},
	]);

	return { attractions };
});
