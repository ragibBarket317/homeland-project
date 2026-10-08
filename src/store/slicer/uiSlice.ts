import { createSlice } from "@reduxjs/toolkit";

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMobileMenuOpen: false,
    isHeroVideoPlaying: !reduceMotion,
  },
  reducers: {
    toggleMobileMenu(state) {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu(state) {
      state.isMobileMenuOpen = false;
    },
    toggleHeroVideo(state) {
      state.isHeroVideoPlaying = !state.isHeroVideoPlaying;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, toggleHeroVideo } = uiSlice.actions;
export default uiSlice.reducer;
