Vue.component('app-footer', {
  template: `
    <v-footer dark class="px-3">
      Proudly brought to you by
      &nbsp;<a href="https://ivan-lim.com" target="_blank">Ivan Lim</a>&nbsp; |
      678-439-8880 |
      &nbsp;<a href="https://ivan-lim.com/contact-us/" target="_blank">Contact Us</a>&nbsp;
    </v-footer>
  `,
  data () {
    return {

    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {

  },
  methods: {

  },
  mounted () {

  }
});

