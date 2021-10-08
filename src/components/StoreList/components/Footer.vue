<template>
    <div>
        <div class="footer">
            <b>Total</b>
            <b>R$ {{ $filters.maskMoney(totalPrice) }}</b>
        </div>
        <div v-if="frete" class="success-message">
            <div class="message">
                Parabéns, sua compra tem frete gratís !
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        total: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            frete: false
        }
    },
    computed: {
        totalPrice() {
            var price = 0
            this.total.forEach(t => {
                price = price + t.price
            })
            this.verifyFrete(this.$filters.maskMoney(price))
            return price
        }
    },
    methods: {
        verifyFrete(price) {
            if(parseInt(price) > 10) this.frete = true
            else this.frete = false
        }
    }
}
</script>

<style>
.footer {
    padding: 5rem 3rem 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    flex-flow: row;
    font-size: 2rem;
}
.success-message {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;
    padding: 0 3rem 0 3rem;
}
.message {
    width: 100%;
    background-color: rgba(8, 255, 20, 0.685);
    color: green;
    font-weight: 700;
    font-size: 2rem;
    border-radius: 8px;
    margin: 3rem 0 0 0;
}
</style>