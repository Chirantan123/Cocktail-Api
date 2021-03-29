<template>
  <div>
  <!--<p>{{getDetails}}</p> -->
  <div class="container">
  <div class="loading" v-if="getDetails.length === 0">
  <p>Loading....</p>
  <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">
  </div>
  <div class="drink" v-for="drink in getDetails.drinks" :key="drink.id">
  <img class="drink-image"  id="img" v-bind:src="drink.strDrinkThumb"/>
  <div class="instruction">
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
    justify-content: space-evenly;
    flex-flow: wrap;
}
.drink {
   position: absolute;
}
/*.heading {
    position: relative;
    top:0;
    right: 30%;
    margin-left:60px;
    font-size: 50px;
}*/
.drink-image {
  position: absolute;
  top: 80px;
  right: 60%;
  height: 600px;
  width: 800px;
  border:20px solid white;
  border-radius: 20px;
}
.instruction {
    position: relative;
    top:60px;
    font-size: 30px;
    margin-left:250px;
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
.loading {
  display: inline-block;
  font-size: 40px;
  height: 50px;
  width: 50px;
  padding: 5px;
}
</style>
