<template>
    <div>
        <nav-menu1>
            
    <transition name="el-fade-in">
      <keep-alive>
              <router-view/>
      </keep-alive>

    </transition>
        </nav-menu1>
    </div>
</template>

<script>

import navMenu1 from './navMenu1.vue'
    export default {
  components: { navMenu1 },

    }
</script>

<style scoped>

</style>