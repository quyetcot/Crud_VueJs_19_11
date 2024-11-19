<script>
export default {};
</script>
<template>
  <div>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
      <router-link class="my-0 mr-md-auto font-weight-normal" to="/"
        >Vue Mini Project</router-link
      >
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/products">Product management</router-link>
        <router-link to="/users">User management</router-link>
      </nav>
      <a class="btn btn-outline-primary" routerlink="cart">Administrator</a>
    </div>

    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">User Infomation</h3>
      <router-link to="/users">Back</router-link>
    </div>

    <div class="container">
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            > Name</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >Email</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >User description</label
          >
          <div class="col-sm-9">
            <textarea class="form-control" rows="3"></textarea>
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
