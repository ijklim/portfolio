const URL_CODEPEN = 'https://codepen.io/ivanlim/full/';

Vue.component('app-projects', {
  template: `
    <v-container grid-list-xl>
      <v-layout wrap>

        <v-flex xs12 text-xs-right>
          <v-btn-toggle v-model="toggleView">
            <v-btn flat>
              <v-icon>view_module</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>view_headline</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>

        <v-flex
          xs12
          sm6
          lg4
          v-for="project in projects"
          :key="project.id"
        >
          <v-card hover :href="project.url" target="_blank" height="100%">
            <transition name="bounce">
              <v-card-media
                :height="$vuetify.breakpoint.mdAndDown ? '330px': '290px'"
                v-if="toggleView === 0"
                :src="getThumbnailUrl(project.name)"
              >
              </v-card-media>
            </transition>

            <v-divider />
            
            <v-card-text>
              <h3 v-html="project.name" class="mb-2"></h3>
              <v-chip
                class="white--text"
                color=info
                small
                v-for="tag in project.tags"
                :key="tag.id"
              >
                {{ tag }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  `,
  data () {
    return {
      projects: [
        { name: 'Simon Game', url: `${URL_CODEPEN}LdVOme`, tags: ['Vue.js', 'Vuetify', 'SweetAlert'] },
        { name: 'Tic Tac Toe', url: `${URL_CODEPEN}JLPyPq`, tags: ['Vue.js', 'Vuetify', 'SweetAlert'] },
        { name: 'Notes Sharing App', url: `https://notes-2go.firebaseapp.com`, tags: ['Vue.js', 'Vuetify', 'Vuex', 'Vuelidate', 'Firebase'] },
        { name: 'Chat App', url: `http://larachat.aiwebstudio.com`, tags: ['Laravel', 'Vue.js', 'Bootstrap', 'Pusher'] },
        { name: 'Pomodoro Timer', url: `https://pomodoro-timer.github.io`, tags: ['Vue.js', 'Bootstrap', 'Vuex', 'PWA'] },
        { name: 'Calculator', url: `${URL_CODEPEN}xYBdbm`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Pomodoro Clock', url: `${URL_CODEPEN}BYgKWa`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Weather Forecast', url: `${URL_CODEPEN}zRMYZP`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Random Quote Machine', url: `${URL_CODEPEN}yvxqQj`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Wikipedia Viewer', url: `${URL_CODEPEN}zRMVEd`, tags: ['Vue.js', 'Vuetify'] },
        { name: 'Twitch TV', url: `${URL_CODEPEN}VQggvY`, tags: ['Vue.js', 'Vuetify'] }
      ],
      toggleView: 0
    }
  },
  props: {
    folderImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    heightThumbnail () {
      console.log($vuetify.breakpoint.smAndDown);
      return "290px";
    }
  },
  methods: {
    /**
     * Sample thumbnail file name: `thumb--simon-game.jpg`
     * @param {String} projectName 
     */
    getThumbnailUrl (projectName) {
      return this.folderImage +
             'thumb--' +
             projectName.toLowerCase().replace(/\s/g, '-') +
             '.jpg';
    }
  },
  mounted () {
    
  }
});