import http from "./config";

const worker = {
  get: (params) => http.get("/workers", {params}),
  create: (data) => http.post("/worker", data),
  delete: (id) => http.delete(`/worker/${id}`),  
  update: (data) => http.put("/worker", data),
  
};

export default worker;