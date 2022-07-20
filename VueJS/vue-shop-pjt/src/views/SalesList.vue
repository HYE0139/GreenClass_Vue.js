<template>
  <main class="mt-3">
    <div class="container">
      <div class="float-end mb-1">
        <router-link class="nav-link" to="/create">
          <button type="button" class="btn btn-dark">제품등록</button>
        </router-link>
      </div>

      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>배송비</th>
            <th>추가 배송비</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, idx) in productList" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.product_name}}</td>
            <td>{{item.product_price}}</td>
            <td>{{item.delivery_price}}</td>
            <td>{{item.add_delivery_price}}</td>
            <td>
              <!--
              <router-link :to="{ path: '/image_insert', query: {product_id: item.id} }">
                <button type="button" class="btn btn-info me-1"><i class="fa-solid fa-image"></i></button>
              </router-link>-->
              <button type="button" class="btn btn-info me-1" @click="goToImageInsert(idx)"><i class="fa-solid fa-image"></i></button>
              <router-link :to="{ path: '/Update', query: {product_id: item.id} }">
                <button type="button" class="btn btn-warning me-1"><i class="fa-solid fa-pen"></i></button>
              </router-link>
              <button type="button" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
    data() {
      return {
          productList: [],
      }
    },
    created() {
      this.getProductList();
    },
    methods: {
      async getProductList() {
        const productList = await this.$get('/api/productList2', []);
        this.productList = productList;
      },
      goToImageInsert(idx) {
        this.$store.commit('sallerSelectedProduct', this.productList[idx]);
        this.$router.push( {path: '/image_insert'} );
      },
    }
}
</script>

<style>
  i{ color:#fff; }
  td {vertical-align:middle;}
</style>