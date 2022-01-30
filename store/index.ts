export const state: any = (): { page: string } => {
  return { page: "magazalarimiz" };
};


export const mutations = {
  SET_PAGE(state: { page: any }, value: any) {
    state.page = value;
  },
};

// import { reactive } from "@nuxtjs/composition-api";

// export const state: any = reactive({
//   page: "magazalarimiz",
// });
