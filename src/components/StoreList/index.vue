<template>
  <div class="store-list">
        <div class="title-car">
            Meu carrinho
        </div>
        <div class="list-body" v-for="(item, index) in returnItens" :key="index">
            <div class="source-image">
                <img :src="item.imageUrl" width="150" height="150">
            </div>
            <div class="price-name">
                <div>
                    <b>{{ item.name }}</b>
                </div>
                <div style="display: flex">
                    <b>{{ $filters.maskMoney(item.price) }}</b>
                </div>
            </div>
        </div>
        <div class="footer-total">
            <Footer :total="returnItens" />
        </div>
        <div class="button-footer">
            <button class="button" type="submit">Finalizar</button>
        </div>
    </div>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
    components: {
        Footer
    },
    props: {
        listItems: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {}
    },
    computed: {
        returnItens() {
            var items = []
            items.push(...this.listItems.items)
            return items
        }
    },
}
</script>
<style>
.title-car {
    padding: 1rem 0 1rem 0;
    color: black;
    font-size: 3rem;
    width: 100%;
    border-bottom: 3px solid #d4d3d3;
}
.store-list {
    margin: 1.5rem;
    padding: 3rem;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.2);
}
.list-body {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row;
    margin-bottom: 1rem;
}
.price-name {
    margin-top: 17%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
}
.source-image {
    margin: 3rem 2rem 0 3rem;
    border: 2px solid #d4d3d3;
}
.footer-total {
    height: 15rem;
    width: 100%;
    border-top: 3px solid #d4d3d3;
    border-bottom: 3px solid #d4d3d3;
}
.button-footer {
    width: 100%;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.button {
    width: 100%;
    border-radius: 8px;
    background-color: rgb(3, 3, 194);
    border: none;
    font-weight: 700;
    color: white;
    padding: 2rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 2rem;
    margin: 1rem ;
    cursor: pointer;
}
</style>