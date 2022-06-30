<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="ease">
        <div :key="route.name">
          <component
            :is="Component"
            @load="load()"
            @loaded="loaded()"
            @showupload="showupload()"
            @closeupload="closeupload()"
            @showresul="showupresult()"
            @closeresult="closeresult()"
          ></component>
        </div>
      </Transition>
    </router-view>
    <transition>
      <div class="root">
        <v-zoomImg ref="zoom" />
        <v-uploadModal ref="modal" @load="closeupload()" @loaded="uploaded()" />
        <v-spinner ref="spinner" />
        <v-button
          class="loadbutton"
          v-if="loadfinal"
          @click="showresult()"
          :title="'Готово'"
          :large="true"
          :dark="true"
        />
        <v-resultModal ref="modalResult" />
      </div>
    </transition>
  </div>
</template>

<script>
import vUploadModal from "@/components/v-uploadModal.vue";
import vResultModal from "@/components/v-resultModal.vue";
import vSpinner from "@/components/v-spinner.vue";

export default {
  name: "App",
  components: {
    // vButton,
    vUploadModal,
    vSpinner,
    vResultModal,
  },
  data() {
    return {
      loadfinal: false,
    };
  },
  methods: {
    load() {
      this.$refs.spinner.show = true;
    },
    loaded() {
      this.$refs.spinner.show = false;
    },
    showupload() {
      this.$refs.spinner.show = false;
      this.$refs.modal.show = true;
    },

    closeupload() {
      this.loadfinal = false;
      this.$refs.spinner.show = true;
      this.$refs.modal.show = false;
    },

    uploaded() {
      this.$refs.spinner.show = false;
      this.loadfinal = true;
    },

    showresult() {
      this.loadfinal = false;
      this.$refs.modalResult.updated();
      this.$refs.modalResult.show = true;
    },
    closeresult() {
      this.$refs.modalResult.show = true;
    },
    
  },

  
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-enter-active .navbar {
  animation: navbar 1s ease;
  animation-delay: 1s;
}

@keyframes navbar {
  0% {
    transform: translateY(-100%);
  }
  60% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
.fade-leave-active .navbar {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  transition-delay: 0.1s;
}
.fade-enter-active .emoji {
  animation: emoji 1s ease;
  animation-delay: 1s;
}

@keyframes emoji {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.fade-leave-active .emoji {
  transform: scale(0);
  transition: transform 0.4s ease;
  transition-delay: 0.1s;
}
</style>

