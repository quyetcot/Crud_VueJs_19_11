<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  components:{
    Navbar
  },
  data() {
    return {
      products: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    getProducts() {
      axios
        .get("http://localhost:8000/api/products")
        .then((response) => {
          console.log(response.data);
          this.products = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    deleteProduct(id) {
     if(confirm('Are you sure???')){
      axios
        .delete(`http://localhost:8000/api/products/${id}`)
        .then(() => {
          this.getProducts();
          alert('Bạn đã xóa thành công !!!')

        })
        .catch((error) => {
          console.error(error);
        });
     }
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<template>
  <div>
    <Navbar/>
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h2 class="display-4">Products Management</h2>
      <p><router-link to="products/create" class="btn btn-primary">Add New</router-link></p>
    </div>
    <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody v-for="(product, index) in products" :key="product.id">
            <tr>
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td>
                <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
              <router-link :to="`/products/edit/${product.id}`" class="btn btn-warning" >Update</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
