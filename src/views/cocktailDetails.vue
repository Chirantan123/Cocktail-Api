<template>
  <div>
  <!--<p>{{getDetails}}</p> -->
  <div class="loading" v-if="getDetails.length === 0">
  <p>Loading....</p>
  <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">
  </div>
  <div class="container">
  <div class="drink-image" v-for="drink in getDetails.drinks" :key="drink.id">
  <img id="img" v-bind:src="drink.strDrinkThumb"/>
  </div>
  <div class="instruction" v-for="drink in getDetails.drinks" :key="drink.id">
  <h1>{{drink.strDrink}}</h1>
  <p>{{drink.strInstructions}}</p>
  <div v-for="(value,key) in drink" :key="key.id">
  <p v-if="key.substring(0,13) === 'strIngredient' && value!=null">
  <input class="checkbox" type="checkbox" id="ingredient" checked>
   {{value}}
  </p>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cocktailDetails',
  data () {
    return {
    }
  },
  mounted () {
    // var i
    console.log('Inside mounted of cockdetails')
  },
  computed: {
    ...mapGetters(['getDetails'])
  }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    margin-left: 120px;
}
.drink-image {
  border:20px solid white;
  border-radius: 15px;
  height: 700px;
  width: 700px;
}
.instruction {
    font-size: 30px;
    padding-left: 50px;
}
.checkbox {
  margin-right: 20px;
}
input[type=checkbox] {
    transform: scale(2);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
    margin-bottom: 30px;
}
@media screen and (max-width: 800px) {
  .container, .drink-img, .instruction, .checkbox {
    width: 100%;
  }
}
.loading {
  display: flex;
  flex-direction: column;
  margin-left: 45%;
  font-size: 40px;
  height: 100px;
  width: 100px;
}
</style>
