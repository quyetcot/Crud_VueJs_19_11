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

  </div>
</template>
