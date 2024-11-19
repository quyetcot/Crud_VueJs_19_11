<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      errors: {
        name: "",
        price: "",
        description: "",
      },
      product: {
        name: "",
        price: "",
        description: "",
      },
      id : null
    };
  },
  created(){
    this.id = this.$route.params.id;
    this.getProduct();
  },
  methods: {
    validated() {
      let isValid = true;
      this.errors = {
        name: "",
        price: "",
        description: "",
      };
      if (!this.product.name) {
        this.errors.name = "Vui lòng nhập tên sản phẩm.";
        isValid = false;
      }
      if (!this.product.price) {
        this.errors.price = "Vui lòng nhập giá sản phẩm.";
        isValid = false;
      } else if (Number(this.product.price) <= 0) {
        this.errors.price = "Giá sản phẩm không hợp lệ.";
        isValid = false;
      }
      if (!this.product.description) {
        this.errors.description = "Vui lòng nhập mô tả sản phẩm.";
        isValid = false;
      }
      return isValid;
    },
    getProduct(){
      axios
        .get(`http://localhost:8000/api/products/${this.id}`)
        .then((response) => {
       
          this.product = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        });
    },
    update() {
      if (this.validated()) {
        axios
          .put(`http://localhost:8000/api/products/${this.id}`, this.product)
          .then((response) => {
            console.log(response);
            this.product.name = "";
            this.product.price = "";
            this.product.description = "";
            this.$router.push({ name: "product.list" });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<template>
  <div>
    <Navbar />

    <div class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h3 class="display-5">Update Product Infomation</h3>
        <router-link to="/products" class="btn btn-secondary">Back</router-link>
      </div>
      <form @submit.prevent="update()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product name</label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="product.name"
              v-bind:class="{ 'is-invalid': errors.name }"
              @blur="validated()"
            />
            <div class="invalid-feedback" v-if="errors.name">
              {{ errors.name }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product price</label
          >
          <div class="col-sm-9">
            <input
              type="number"
              class="form-control"
              v-model="product.price"
              v-bind:class="{ 'is-invalid': errors.price }"
              @blur="validated()"
            />
            <div class="invalid-feedback" v-if="errors.price">
              {{ errors.price }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product description</label
          >
          <div class="col-sm-9">
            <textarea
              class="form-control"
              rows="3"
              v-model="product.description"
              v-bind:class="{ 'is-invalid': errors.description }"
              @blur="validated()"
            ></textarea>
            <div class="invalid-feedback" v-if="errors.description">
              {{ errors.description }}
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9 text-left">
            <button type="submit" class="btn btn-primary">Save</button> &nbsp;
            <button type="reset" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
