<template>
  <div>
  <h1 class="heading">Cocktails API</h1>
  <div>
     <input class="Search" @input="search()" type="text" id = "searchbar" placeholder="Search Your Favorite Cocktail">
  </div>
  <div>
  <processing />
  <h1 class="heading" id="error"></h1>
  </div>
  <div class="box">
    <div  class="drink blur" v-for="drink in getList.drinks" :key="drink.id">
    <img  @click="get(drink.idDrink)" class="drink-img" id="img" :src="drink.strDrinkThumb"/>
    <label @click="get(drink.idDrink)" class ="label" :for="drink.strDrink" :id="drink.strDrink">{{drink.strDrink}}</label>
  </div>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import processing from '@/components/processing.vue'
export default {
  name: 'homepage',
  data () {
    return {
      list: [],
      details: [],
      img: []
    }
  },
  components: {
    processing: processing
  },
  methods: {
    /* getCocktailDetails (id) {
      console.log('Called')
      localStorage.setItem('id', id)
      this.path=list.strDrinkThumb
      this.$store.dispatch('setCocktailAction')
    } */
    get (id) {
      console.log('Called details')
      this.$store.dispatch('setDetailsAction', id)
      console.log('Here')
      this.$router.push('/cocktailDetails')
      // console.log(this.getDetails)
    },
    search () {
      console.log('Called search')
      var input = document.getElementById('searchbar').value
      console.log(input)
      console.log(input.length)
      input = input.toLowerCase()
      var x = document.getElementsByClassName('label')
      var y = document.getElementsByClassName('drink-img')
      var i
      var state = 0
      for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          console.log('Does Not include')
          console.log(x[i].innerHTML.toLowerCase())
          console.log(input)
          console.log(y[i].src)
          x[i].style.display = 'none'
          y[i].style.display = 'none'
        } else {
          state = 1
          x[i].style.display = 'list-item'
          y[i].style.display = 'list-item'
        }
      }
      console.log(state)
      if (input.length !== 0) {
        // Display the text sorry no items match your search
        if (state === 0) {
          document.getElementById('error').innerHTML = 'Sorry, No Drinks Matched Your Search'
        } else {
          document.getElementById('error').innerHTML = ''
        }
      } else {
        document.getElementById('error').innerHTML = ''
      }
    }
  },
  computed: {
    ...mapGetters(['getList', 'getDetails'])
  },
  mounted () {
    console.log('Called')
    this.$store.dispatch('setCocktailAction')
    // localStorage.setItem('id', id)
    console.log(this.getList)
    // this.path=list.strDrinkThumb
    // document.getElementById('img').src=this.path
  }
}
</script>

<style>
body {
    background-color: #F1F5F8;
}
.heading {
  text-align: center;
  margin-top: 100px;
  font-size: 50px;
}
.Search {
    margin-left: 40%;
    margin-right: 40%;
    /* width: auto; */
    width: 500px;
    height: 30px;
    padding: 10px;
    font-size: 20px;
}
.box {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px;
    flex-flow: wrap;
}
.drink {
  width: 22%;
  position: relative;
  margin-bottom: 60px;
  border: 20px solid white;
  border-radius: 15px;
}
.label {
  display: 'list-item';
  position: absolute;
  height: 30px;
  width: 180px;
  color: white;
  bottom: 0px;
  right: 0px;
  transform: scaleY(2.5) scaleX(1.5);
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  background-color: black;
  text-transform: uppercase;
  z-index: 1;
}
.blur:hover {
  opacity: 0.5;
  transition: 1s;
}
.drink-img{
  display: 'list-item';
  position: relative;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 800px) {
  .drink, .drink-img , .label , .heading, .Search, .box {
    width: 100%;
  }
}
/* .box.box1 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 60px;
    margin:10px;
} */
 /*.bottom {
    margin-left:500px;
    float:right;
    display:block;
    height:50px;
    width:100px;
    text-align: center;
    background-color: white;
}*/
</style>
