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
            <td>
              <img v-if="item.path !== null" :src="`/static/img/${item.id}/1/${item.path}`" style="height:50px; width:auto;">
            </td>
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
              <button type="button" class="btn btn-warning me-1" @click="goToUpdateProduct(idx)"><i class="fa-solid fa-pen"></i></button>
              <button type="button" class="btn btn-danger" @click="deleteProduct(item.id, idx)"><i class="fa-solid fa-trash-can"></i></button>
              
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
      goToUpdateProduct(idx) {
        this.$store.commit('sallerSelectedProduct', this.productList[idx]);
        this.$router.push( {path: '/Detail'} );
      },
      async deleteProduct(productId, idx) {
        const res = await this.$delete(`/api/productDelete/${productId}`, {});
        if(res.result === 1) {
          this.productList.splice(idx, 1);
        }
      }
    },
    
}
</script>

<style>
  i{ color:#fff; }
  td {vertical-align:middle;}
</style>