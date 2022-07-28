<template>
  <main class="mt-3">
    <div class="container">
      <h2 class="text-center mb-5">제품 사진 등록</h2>
      <div class="mb-5 row">
        <div class="col row">
          <label class="col-4 alert-secondary ">제품ID</label>
          <div class="col-8">{{ productDetail.id }}</div>
        </div>

        <div class="col row">
          <label class="col-4 alert-secondary ">제품명</label>
          <div class="col-8">{{ productDetail.product_name }}</div>
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">미리보기</label>
        <div class="col-md-9">
          <div class="col-md-9">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="item in productImage.filter(c => c.type === 1)">
                <div class="position-relative">
                  <img :src="`/static/img/${item.product_id}/${item.type}/${item.path}`" class="img-fluid">
                  <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item)">X</div>
                </div>
              </div>
            </div>
            <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 1)">
            <div class="alert alert-secondary" role="alert"> <!-- 이미지들의 용도를 구분하기 위해 1,2,3 -->
              <ul>
                <li>이미지 사이즈 : 350 * 350</li>
                <li>파일 사이즈 : 1MB 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품 상세 이미지</label>
        <div class="col-md-9">
          <div class="col-md-9">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="item in productImage.filter(c => c.type === 2)">
                <div class="position-relative">
                  <img :src="`/static/img/${item.product_id}/${item.type}/${item.path}`" class="img-fluid">
                  <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item)">X</div>
                </div>
              </div>
            </div>

            <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 2)">
            <div class="alert alert-secondary" role="alert">
              <ul>
                <li>최대 5개 가능</li>
                <li>이미지 사이즈 : 700 * 700</li>
                <li>파일 사이즈 : 1MB 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품 설명 이미지</label>
        <div class="col-md-9">
          <div class="col-md-9">
            <div class="row">
              <div class="col-lg-3 col-md-4 col-sm-2" :key="item.id" v-for="item in productImage.filter(c => c.type === 3)">
                <div class="position-relative">
                  <img :src="`/static/img/${item.product_id}/${item.type}/${item.path}`" class="img-fluid">
                  <div class="position-absolute top-0 end-0" style="cursor:pointer;" @click="deleteImage(item)">X</div>
                </div>
              </div>
            </div>

            <input type="file" class="form-control" accept="image/png, image/jpeg" @change="uploadFile($event.target.files, 3)">
            <div class="alert alert-secondary" role="alert">
              <ul>
                <li>파일 사이즈 : 5MB 이하</li>
                <li>파일 확장자 : png, jpg만 가능</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="mb-3 row m-auto">
        <router-link to="/sales">
          <button type="button" class="btn btn-lg btn-dark">등록</button>
        </router-link>
      </div>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productName: '',
      productDetail: {},
      productImage: [],
    }
  },

  created() {
    this.productDetail = this.$store.state.sallerSelectedProduct;
    this.getProductImage();
  },
  methods: {
    async getProductImage() {
      this.productImage = await this.$get(`/api/productImageList/${this.productDetail.id}`);
    },
    async uploadFile(files, type) { // (files = 업로드할 이미지, type = 구분을 위해 부여했던 숫자 )
      console.log(files);
      const image = await this.$base64(files[0]);
      const formData = { image }; // 문자열로 바꾼 이미지를 객체 안에 넣음.
      const { error } = await this.$post(`/api/upload/${this.productDetail.id}/${type}`, formData);
      console.log(error);
    },
    async deleteImage({id,product_id, type, path}) {
      const result = await this.$delete(`/api/productImageDelete/${id}/${product_id}/${type}/${path}`);
      console.log(result);
    },
  },
  updated() {
    this.getProductImage();
  }
}
</script>

<style>

</style>