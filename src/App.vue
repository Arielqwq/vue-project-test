<template lang="pug">
TopImageVue
#middle
  #left
    LeftMenuVue
    LeftUpdateVue
  #right
    RightMarqueeVue
    //- 限制路由大小
    #page
      router-view
FooterTextVue
</template>
<!-- lang=xxx指定裡面可以寫什麼 -->
<!-- <style lang="sass">
</style> -->

<script setup>
import TopImageVue from '@/components/TopImage.vue'
import LeftMenuVue from '@/components/LeftMenu.vue'
import LeftUpdateVue from '@/components/LeftUpdate.vue'
import RightMarqueeVue from '@/components/RightMarquee.vue'
import FooterTextVue from '@/components/FooterText.vue'
</script>
