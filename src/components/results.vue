<template>
    <div 
        v-if="search_result"
        class="resultsGrid"
    >
      <div
        v-for="(item, idx) in search_result.items"
        :key="idx"
        class="gridItem">
            <a @click="openModal(item.id.videoId)">
                <img
                    :src="item.snippet.thumbnails.high.url"
                    :alt="item.snippet.title">
                <p>{{item.snippet.title}}</p>
            </a>
      </div>
      <div
        v-if="showModal"
        class="modal"
        @click.self="closeModal()">
        <div class="modalVideo">
            <a @click="closeModal()">CLOSE</a>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                :src="`http://www.youtube.com/embed/${modalId}?autoplay=1`"
                frameborder="0"/>
        </div>
          
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Results',
  data() {
    return {
      showModal: false,
      modalId: null,
    }
  },
  mounted() {
  },
  computed: {
      ...mapGetters([ 'results', 'current_search']),
      search_result() {
          if (this.results) {
           return this.results[this.current_search]  
          } else {
              return null;
          }
      }
  },
  methods: {
    openModal(paramId) {
        this.modalId = paramId;
        this.showModal = true;
    },

    closeModal() {
        this.showModal = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.resultsGrid {
    display: grid;
    grid-template-columns: 200px auto 33%;
    grid-template-rows: auto;
}

.gridItem {
    grid: auto-flow / 1fr 1fr 1fr;

    a {
        display: block;
        cursor: pointer;
    }

    img {
        max-width: 200px;
    }
}
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0,0, 0.7);

    &Video {
        position: absolute;
        left: 50%;
        top: 50%;
        padding: 5px;
        transform: translate(-50%, -50%);
        background-color: white;
    }

    a {
        display: inline-block;
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }
}
</style>
