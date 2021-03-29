<template>
  <div>
    <div v-if="getList.length === 0">
    <div class="heading">
    <p>Loading....</p>
    <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'procesing',
  computed: {
    ...mapGetters(['getList', 'getDetails'])
  },
  mounted () {
    console.log(this.getList.length)
  }
}
</script>

<style-scoped>
.heading {
    display: inline-block;
    height: 50px;
    width: 50px;
    padding: 5px;
    margin-left: 50%;
}
</style>
