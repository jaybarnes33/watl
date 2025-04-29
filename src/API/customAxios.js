import React from "react";
import axios from "axios";
import { BaseAPIURL } from "./base";

export const customAxios = axios.create({
    baseURL: BaseAPIURL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
})