<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Les viandes</h1>
         <h3>L'agneau</h3>
         <img src="http://beauvallet.fr/wp-content/uploads/2016/07/GIGOT-AGNEAU-CUIT-e1469176835367.jpg" alt="agneau"
         style="width:500px;height:300px;" />
         <h3>Le porc</h3>
         <img src="http://qccdn.ar-cdn.com/recipes/port960/173dd249-51f7-49b1-ad8f-3fc4f89aa445.jpg" alt="agneau"
         style="width:500px;height:300px;" />
         <h1>Les poissons</h1>
         <h3>Les perches</h3>
         <img src="https://realdeals.ch/media/catalog/product/cache/6/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2015_11_09_restaurant_du_prieur__salade_verte_filet_de_perche_.jpg" alt="perche"
         style="width:500px;height:300px;" />
         <h3>Le saumon</h3>
          <img src="https://d1doqjmisr497k.cloudfront.net/-/media/ducrosfr-2016/recipes/2000/saumon_a_l_origan_cuit_en_papillote_2000.ashx?vd=20160607T035231Z&hash=C90121A11EA1BB82406152E4C3A8584BF9F6B871" alt=""
         style="width:500px;height:300px;" />
         <h3>La truite</h3>
          <img src="https://www.rachellebery.ca/wp-content/uploads/2018/02/Truite-four-560x370-BS008657-PUB-76307.jpg" alt=""
         style="width:500px;height:300px;" />
         <h1>Le sucré</h1>
         <h3>Le chocolat</h3>
          <img src="https://img.myswitzerland.com/mys/n64549/images/buehne/chocolat.jpg" alt=""
         style="width:500px;height:300px;" />
         <h3>Les crêpes</h3>
          <img src="https://image.afcdn.com/recipe/20140103/349_w1024h768c1cx1608cy1028.jpg" alt=""
         style="width:500px;height:300px;" />
         <h2>Salé</h2>
    <ul>
      <li>
        <a href="/plat">
          Tous les repas salés
        </a>
      </li>
      <li>
        <a
          href="/Poissons"
        >
          Poissons
        </a>
      </li>
      <li>
        <a
          href="/Viande"
        >
          Viande
        </a>
      </li>
      <li>
        <a
          href="/Pâtes"
        >
          Pâtes
        </a>
      </li>
      <br>
      <li>
        <a
          href="/Salt"
        >
           Autres repas salés
        </a>
      </li>
    </ul>
    <h2>Sucré</h2>
    <ul>
      <li>
        <a
          href="/Patisseries"
        >
          Tous les repas sucrés
        </a>
      </li>
      <li>
        <a
          href="/Chocolat"
        >
          Chocolat
        </a>
      </li>
      <li>
        <a
          href="/Gâteaux"
        >
          Gâteaux
        </a>
      </li>
      <li>
        <a
          href="Sweet"
        >
          Autres repas sucrés
        </a>
      </li>
      <li>
        <a
          href="HelloWorld"
        >
         Retour à la page d'acceuil
        </a>
      </li>
         </ul>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenue sur le site qui donne faim !!!!!!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
