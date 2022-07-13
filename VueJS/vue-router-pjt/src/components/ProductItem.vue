<template>
    <tr>
        <td>{{ item.product_name }}</td>
        <td>{{ getPrice }}</td>
        <td>{{ item.category }}</td>
        <td>{{ getDeliveryPrice}}</td>
    </tr>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        getPrice() {
            return this.numberComma(this.item.price);
        },
        getDeliveryPrice() {
            return this.numberComma(this.item.delivery_price);
        }
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style>
     table { font-family: arial, sans-serif; border-collapse: collapse; width:100%; }
    th, td { border:1px solid #ddd; text-align: left; padding:8px;}
</style>