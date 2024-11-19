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
      <h2 class="display-4">User Management</h2>
      <p><router-link to="users/create">Add New</router-link></p>
    </div>

    <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User name</th>
              <th scope="col">Email</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
