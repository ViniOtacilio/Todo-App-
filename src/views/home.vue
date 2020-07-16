<template>
  <div class="home">
    <div class="home-title">
        <h1>To do App</h1>
    </div>
    <div class="home-call-to-start">
        <h3> Click 
            <router-link to="/app" > HERE </router-link>
             to start your jorney </h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.home-title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    h1 {
        font-weight: bold;
    }
}

.home-call-to-start {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
}

</style>