const URL_CODEPEN = 'https://codepen.io/ivanlim/full/';

Vue.component('app-projects', {
  template: `
    <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex
          xs12
          sm6
          lg4
          v-for="project in projects"
          :key="project.id"
        >
          <v-card hover :href="project.url">
            <v-card-media
              height="330px"
              :src="getThumbnailUrl(project.name)"
            >
            </v-card-media>
            <v-card-title v-html="project.name" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  `,
  data () {
    return {
      projects: [
        { name: 'Simon Game', url: `${URL_CODEPEN}LdVOme` },
        { name: 'Tic Tac Toe', url: `${URL_CODEPEN}JLPyPq` },
        { name: 'Calculator', url: `${URL_CODEPEN}xYBdbm` },
        { name: 'Pomodoro Clock', url: `${URL_CODEPEN}BYgKWa` },
        { name: 'Weather Forecast', url: `${URL_CODEPEN}zRMYZP` },
        { name: 'Random Quote Machine', url: `${URL_CODEPEN}yvxqQj` },
        { name: 'Wikipedia Viewer', url: `${URL_CODEPEN}zRMVEd` },
        { name: 'Twitch TV', url: `${URL_CODEPEN}VQggvY` }
      ]
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