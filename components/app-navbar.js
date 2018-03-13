Vue.component('app-navbar', {
  template: `
    <v-toolbar dark>
      <v-toolbar-title v-html="appName" />
      <v-spacer />

      <v-btn icon href="https://www.linkedin.com/in/ivanlim8" target="_blank" right>
        <img :src="imageLinkedIn" height="32" />
      </v-btn>

      <v-btn icon href="https://github.com/ijklim" target="_blank" right>
        <img :src="imageGithub" height="32" />
      </v-btn>
    </v-toolbar>
  `,
  data () {
    return {
    }
  },
  props: {
    appName: {
      type: String,
      default: ''
    },
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageGithub () {
      return this.folderImage + 'icon-github-32.png';
    },
    imageLinkedIn () {
      return this.folderImage + 'icon-linkedin-34.png';
    }
  },
  methods: {
    
  },
  mounted () {
    
  }
});