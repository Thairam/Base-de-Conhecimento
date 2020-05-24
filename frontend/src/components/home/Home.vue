<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <Stat
        id="category"
        title="Categorias"
        :value="stat.categories"
        icon="fa fa-folder"
        color="#ffffff"
      />
      <Stat id="articles" title="Artigos" :value="stat.articles" icon="fa fa-file" color="#ffffff" />
      <Stat id="users" title="Usuários" :value="stat.users" icon="fa fa-user" color="#ffffff" />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function() {
    return {
      stat: {}
    };
  },
  methods: {
    getStats() {
      axios.get(`${baseApiUrl}/stats`).then(res => (this.stat = res.data));
    }
  },
  mounted() {
    this.getStats();
  }
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#category {
  background-image: linear-gradient(to left, #e02364, #a22650);
}

#articles {
  background-image: linear-gradient(to left, #326ddf, #214b9c);
}

#users {
  background-image: linear-gradient(to left, #7dc931, #14a143);
}
</style>