<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Salé</h2>
    <ul>
      <li>
        <a
          href="/plat"
          target="_blank"
        >
          Tous les repas salés
        </a>
      </li>
      <li>
        <a
          href="/Poissons"
          target="_blank"
        >
          Poissons
        </a>
      </li>
      <li>
        <a
          href="/Viande"
          target="_blank"
        >
          Viande
        </a>
      </li>
      <li>
        <a
          href="/Pâtes"
          target="_blank"
        >
          Pâtes
        </a>
      </li>
      <br>
      <li>
        <a
          href="/Salt"
          target="_blank"
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
          target="_blank"
        >
          Tous les repas sucrés
        </a>
      </li>
      <li>
        <a
          href="/Chocolat"
          target="_blank"
        >
          Chocolat
        </a>
      </li>
      <li>
        <a
          href="/Gâteau"
          target="_blank"
        >
          Gâteaux
        </a>
      </li>
      <li>
        <a
          href="Sweet"
          target="_blank"
        >
          Autres repas sucrés
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
