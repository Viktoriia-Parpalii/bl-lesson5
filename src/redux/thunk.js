import { createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from "../services/api";

export const baseCurrencyThunk = createAsyncThunk(
  "getBaseCurrency",
  async (crd, thunkApi) => {
    try {
      const res = await userInfo(crd);
      console.log(
        "res.results[0].annotations.currency.ico_code: ",
        res.results[0].annotations.currency.ico_code
      );
      return res.results[0].annotations.currency.ico_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
