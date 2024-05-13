import { defineStore } from "pinia";
import { ref } from "vue";

export const useAttractionStore = defineStore("attraction", () => {
  let id = 0;
  const attractions = ref([
    {
      id: id++,
      title: "성산 일출봉",
      type: 15,
      img: "https://cdn.myro.co.kr/prod/image/advertisement/place/b79984ff-2ec9-49b3-803c-e48ed42e63aa_20240502-234756",
      location: "대한민국 서귀포시 성산 일출봉",
      like: 1234,
      rating: 4.7,
    },
    {
      id: id++,
      title: "대기정",
      type: 15,
      img: "https://cdn.myro.co.kr/prod/image/place/Jeju/343_3dddf18c-f4d3-4698-a81c-2fdf48af5a41",
      location: " 대한민국 제주특별자치도 제주시 특별자치도, 항골남길 46",
      like: 1234,
      rating: 4.7,
    },
    {
      id: id++,
      title: "성산 일출봉",
      type: 15,
      img: "https://cdn.myro.co.kr/prod/image/place/Jeju/343_3dddf18c-f4d3-4698-a81c-2fdf48af5a41",
      location: "대한민국 제주특별자치도 제주시",
      like: 1234,
      rating: 4.7,
    },
    {
      id: id++,
      title: "성산 일출봉",
      type: 15,
      img: "https://cdn.myro.co.kr/prod/image/place/Jeju/343_3dddf18c-f4d3-4698-a81c-2fdf48af5a41",
      location: "대한민국 서귀포시 성산 일출봉",
      like: 1234,
      rating: 4.7,
    },
  ]);

  return { attractions };
});
