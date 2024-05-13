import { defineStore } from "pinia";
import { reactive } from "vue";

// data{
//     plan_id: "서버에서 처리함"
//     user_id: 유저명(비회원은 저장 불가)
//     title : title
//     update_date : now()
//     plan_detail: [
//         {
//             plan_id: 서버에서 처리
//             plan_day: 여행날짜(n일차?)
//             plan_index : 여행 순서(시작, 끝 시간으로 대체 가능)
//             content_id : 여행지
//             start_time : time
//             end_time : time
//             memo : String
//         }
//     ]
// }

export const usePlanningStore = defineStore("planning", () => {
  const plan = reactive({
    data: {
      user: {
        id: "",
        nickname: "",
      },
      plan: [],
    },
  });

  const addPlan = () => {};

  const deletePlan = () => {};

  return { plan, addPlan, deletePlan };
});
