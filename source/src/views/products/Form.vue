<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  components:{
    Navbar
  },
  data() {
    return {
      errors: {
        name: "",
        price: "",
        description: "",
      },
      products: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    validated() {
      let isValid = true;
      this.errors = {
        name: "",
        price: "",
        description: "",
      };
      if (!this.products.name) {
        this.errors.name = "Vui lòng nhập tên sản phẩm.";
        isValid = false;
      }
      if (!this.products.price) {
        this.errors.price = "Vui lòng nhập giá sản phẩm.";
        isValid = false;
      } else if (Number(this.products.price) <= 0) {
        this.errors.price = "Giá sản phẩm không hợp lệ.";
        isValid = false;
      }
      if (!this.products.description) {
        this.errors.description = "Vui lòng nhập mô tả sản phẩm.";
        isValid = false;
      }
      return isValid;
    },
    save() {
      if (this.validated()) {
        axios
          .post("http://localhost:8000/api/products", this.products)
          .then( (response) => {
            console.log(response);
            this.products.name = "";
            this.products.price = "";
            this.products.description = "";
            this.$router.push({name:'product.list'})
          })
          .catch( (error)=> {
            console.log(error);
          });
      }
    },
  },
};
</script>
<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">Product Infomation</h3>
      <router-link to="/products" class="btn btn-secondary">Back</router-link>
    </div>
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Product name</label
          >
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              v-model="products.name"
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
              v-model="products.price"
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
              v-model="products.description"
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
