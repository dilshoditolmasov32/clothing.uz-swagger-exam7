import http from "./config";

const categoreis = {
  get: () => http.get("/categories", {params:{page:1, limit:5}}),
  create: (data) => http.post("/category", data),
  delete: (id) => http.delete(`/category/${id}`),  
  update: (data) => http.put("/category", data),
  
};

export default categoreis;