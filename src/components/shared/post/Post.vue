<template>
    <div class="container">
        <div class="postagem row">
            <div class="col-md-2">
                <img :src="imagem" class="img-fluid">
            </div>
            <div class="col-md-10">
                <div class="row">
                    <h3 class="postagem-titulo col-md-12"> {{ titulo }} </h3>
                    <p class="col-md-12"><strong>Usuário ID:</strong> {{ userId }}</p>
                    <p class="postagem-numero col-md-12"><strong>Numero Post:</strong> {{ id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'conteudo', 'id', 'userId'],
    data(){
        return{
            imagens: [
                { url: 'https://via.placeholder.com/150/8888ff' },
                { url: 'https://via.placeholder.com/150/ff8888' }
            ],
            imagem: ""
        }
    },
    created(){
        if (this.userId%2 == 0){
            this.imagem = this.imagens[0].url;
        }else{
            this.imagem = this.imagens[1].url;
        }
    }
}
</script>


<style scoped>
    /* Import fonts */
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');
    *{ font-family: 'Ubuntu', sans-serif; }

    .postagem { min-height: 100px; width: 90%; padding: 10px; margin: 10px auto; background-color: rgb(238, 238, 238); border-radius: 10px; box-shadow: 1px 1px 2px gray; text-align: left; }
    .postagem-titulo { font-weight: bold; }
    .postagem-numero { color: rgb(173, 173, 173); text-align: right; margin-right: 30px; }

</style>
