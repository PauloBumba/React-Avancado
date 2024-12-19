import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Theme {
  background: "light" | "dark";
  cor: "black" | "white";
}

interface UseState {
  theme: Theme;
}

const initialState: UseState = {
  theme: {
    background: "light",
    cor: "black",
  },
};


export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {

    toggleTheme: (state) => {
      if (state.theme.background === "light") {
        state.theme = {
          background: "dark",
          cor: "white",
        };
      } else {
        state.theme = {
          background: "light",
          cor: "black",
        };
      }
    },
   
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

// Exporta as ações e o reducer
export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
