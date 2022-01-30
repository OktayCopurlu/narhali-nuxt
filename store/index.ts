export const state: any = (): { page: string } => {
  return { page: " " };
};
export const mutations = {
  SET_PAGE(state: { page: any }, value: any) {
    state.page = value;
  },
};
