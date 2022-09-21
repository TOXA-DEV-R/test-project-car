/** @format */

import axios from "axios";

const baseUrl = "https://cartestwebapp.herokuapp.com";

const api = axios.create({
  baseURL: baseUrl,
});

export const getModels = async () => {
  const { data } = await api.get(`/category/marka?limit=4&page=1`);
  return data;
};

export const getModelTypes = async (categoryId) => {
  const { data } = await api.get(
    `/car?limit=10&page=1&categoryId=${categoryId}`
  );
  return data;
};

export const getModelType = async (categoryId) => {
  const { data } = await api.get(
    `/car?limit=1&page=1&categoryId=${categoryId}`
  );
  return data;
};
