import http from "./config";

const product = {
  get: (params) => http.get("/products", {params}),
  create: (data) => http.post("/product", data),
  delete: (id) => http.delete(`/product/${id}`),  
  update: (data) => http.put("/product", data),
};

export default product;