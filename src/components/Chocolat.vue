<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
         <h3>Le chocolat</h3>
          <img src="https://img.myswitzerland.com/mys/n64549/images/buehne/chocolat.jpg" alt=""
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
