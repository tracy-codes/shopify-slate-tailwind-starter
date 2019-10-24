<template>
    <div>
        <span>shop name is: {{ this.shopname }}, count: {{ this.count }}
	        <button @click="increment" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">increment</button></span>
        <p>
            The count will stay when you will move to different pages, thanks to <a href="https://github.com/championswimmer/vuex-persist">vuex-persist</a>.
            This is not a template for an SPA and should not be treated as one,
            make sure you use vue only for stuff you used to do with JQuery and not for generating content/meta tags,
            because that will hurt your SEO.
        </p>
    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    props: {
      shopname: String,
    },
    name: 'ThemeComponent',

    computed: mapGetters(['count']),

    methods: mapMutations(['increment']),
  };
</script>

<style>
  div {
    @apply .bg-red-100; /** Test to make sure styles work **/
  }
</style>



