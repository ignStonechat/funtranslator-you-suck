import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

interface TranslateState {
    loading: boolean;
    translatedText: string;
};

const initialState: TranslateState = {
    loading: false,
    translatedText: ''
}


export const translateByInput = createAsyncThunk(
    'translate/translateByInput',
    async (text: any, thunkAPI) => {
        // if (text == '') {
        //     return { translatedText: '' }
        // }

        // const response = await fetch('https://api.funtranslations.com/translate/yoda?text=' + text);
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json()
        // const translated: string = await data.contents.translated
        const translated: string = await data.fact
        
        return { translatedText: translated }
    }
)

const translateSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(translateByInput.fulfilled, (state, action) => {
            state.translatedText = action.payload.translatedText
            document.getElementById('translate-output-box')!.style.display = 'block';
            document.getElementById('translate-output-overlay')!.style.display = 'none';
        })
        builder.addCase(translateByInput.pending, (state) => {
            state.loading = true;
            document.getElementById('translate-output-box')!.style.display = 'none';
            document.getElementById('translate-output-overlay')!.style.display = 'block';
            
        })
    }
})

export const actions = translateSlice.actions

const store = configureStore({
    reducer: translateSlice.reducer
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default store;