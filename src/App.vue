<template>
  <div>
    <h3 class="titulo"> {{ title }} </h3>
    <div class="container-posts">
      <ul class="lista box-postagens">
        <li v-for="postagem in postagens">
          <post :titulo="postagem.title" :conteudo="postagem.data" :id="postagem.id" :userId="postagem.userId"></post>
        </li>
      </ul>
    </div>
    <h3 class="titulo">Rodapé</h3>
  </div>
</template>

<script>
import Post from './components/shared/post/Post.vue';
export default {
  components: {
    post: Post
  },

  data() {
    return {
      title: "Postagens - Consumindo API",
      postagens: []
    }    
  },

  created(){
    let url = "https://jsonplaceholder.typicode.com/todos";
    let promise = this.$http.get(url)
      .then(resp => resp.json())
      .then(posts => this.postagens = posts);
      console.log(promise);
  }
}
</script>

<style scoped>
.titulo { font-size: 20px; text-shadow: 2px 2px 5px red; text-align: center; }
.container-posts { max-height: 600px; overflow-y: auto; width: 100%; }
.lista { list-style: none; }
.box-postagens { height: 400px; }
</style>
