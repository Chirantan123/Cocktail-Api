<template>
  <div>
  <!--<p>{{getDetails}}</p> -->
  <div class="loading" v-if="getDetails.length === 0">
  <p>Loading....</p>
  <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif">
  </div>
  <div class="container">
  <div v-for="drink in getDetails.drinks" :key="drink.id">
  <img class="drink-image" v-bind:src="drink.strDrinkThumb"/>
  </div>
  <div class="instruction" v-for="drink in getDetails.drinks" :key="drink.id">
  <h1>{{drink.strDrink}}</h1>
  <p id="description">{{drink.strInstructions}}</p>
  <div v-for="(value,key) in drink" :key="key.id">
  <p class="check" v-if="key.substring(0,13) === 'strIngredient' && value!=null">
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
.check {
  color: #102A42;
  font-size: 27px;
  font-family: "Open Sans","sans-serif";
  margin-bottom: 1px;
}
.drink-image {
  border:20px solid white;
  border-radius: 15px;
  height: 600px;
  width: 800px;
}
.instruction {
    font-size: 30px;
    padding-left: 50px;
}
.checkbox {
  margin-right: 20px;
  /*color: black;*/
}
input[type=checkbox] {
    transform: scale(2);
    -ms-transform: scale(2);
    -webkit-transform: scale(2);
}
@media screen and (max-width: 900px) {
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
#description {
  color: #617D98;
}
h1 {
  font-family: sans-serif;
  letter-spacing: 5px;
  color:#102A42;
}
</style>
