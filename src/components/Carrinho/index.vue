<template>
  <div>
    <div>
      <button class="button-title" @click="abaixoBool = !abaixoBool" >{{ abaixoBool ? 'COM FRETE' : 'SEM FRETE' }}</button>
    </div>
    <store-list v-if="abaixoBool" :list-items="abaixo" />
    <store-list v-else :list-items="acima" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StoreList from '../StoreList'
export default {
  components: { 
    StoreList
  },
  data() {
    return {
      abaixoBool: false
    }
  },
  computed: {
    ...mapGetters('produtos',['abaixo', 'acima']),
  }
}
</script>
<style>
.button-title {
    border-radius: 8px;
    background-color: rgb(3, 3, 194);
    border: none;
    font-weight: 700;
    color: white;
    padding: 2rem 2rem;
    font-size: 2rem;
    margin: 1rem ;
    cursor: pointer;
}
</style>