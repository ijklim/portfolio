Vue.component('app-header', {
  template: `
    <v-jumbotron :gradient="gradient" dark class="elevation-5" height="none">
      <v-container fluid fill-height grid-list-xl>
        <v-layout row wrap align-center>

          <v-flex xs12 md8 text-xs-center my-4>
            <v-card id="jumbo-card" flat>
              <h1 class="display-2 mb-3">Web Application Software Engineer</h1>
              <h2>
                25 years software development experience
                <em style="display:block;font-size:1rem;">- Vue.js, Laravel, Vuetify, Bootstrap, PHP, Python, HTML, CSS, MySQL, SQLite, Firebase, GraphQL etc.</em>
              </h2>
            </v-card>
          </v-flex>

          <v-flex xs12 md4 text-xs-center my-4>
            <transition>
              <v-avatar
                class="grey lighten-4"
                v-if="isAvatarVisible"
                :size="avatarSize"
              >
                <img :src="imageProfile" />
              </v-avatar>
            </transition>
          </v-flex>

        </v-layout>
      </v-container>
    </v-jumbotron>
  `,
  data () {
    return {
      avatarSize: 250,
      gradient: 'to right, #004, #1CB5E0',
      isAvatarVisible: false
    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageProfile () {
      return this.folderImage + 'profile.jpg';
    }
  },
  methods: {
    
  },
  mounted () {
    // To trigger animation
    this.isAvatarVisible = true;
  }
});

