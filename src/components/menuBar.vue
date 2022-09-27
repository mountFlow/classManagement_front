<template>
    <div>
        <nav-menu>
            
    <transition name="el-fade-in">
      <keep-alive>
              <router-view/>
      </keep-alive>

    </transition>
        </nav-menu>
    </div>
</template>

<script>

import navMenu from './navMenu.vue'
    export default {
  components: { navMenu },

    }
</script>

<style scoped>

</style>