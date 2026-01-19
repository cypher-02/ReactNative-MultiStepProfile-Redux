import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Profile, ProfileState } from '../types/profile';

const initialState: ProfileState = {
  profiles: [],
  draft: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateDraft(state, action: PayloadAction<Partial<Profile>>) {
      state.draft = { ...state.draft, ...action.payload };
    },
    saveProfile(state) {
      state.profiles.push({
        ...(state.draft as Profile),
        id: Date.now().toString(),
      });
      state.draft = {};
    },
    deleteProfile(state, action: PayloadAction<string>) {
      state.profiles = state.profiles.filter(p => p.id !== action.payload);
    },
  },
});

export const { updateDraft, saveProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
