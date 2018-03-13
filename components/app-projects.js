const URL_CODEPEN = 'https://codepen.io/ivanlim/full/';

Vue.component('app-projects', {
  template: `
    <v-container fluid grid-list-xl>
      <v-layout wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="project in projects"
          :key="project.id"
        >
          <v-card hover :href="project.url">
            <v-card-title v-html="project.name" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  `,
  data () {
    return {
      projects: [
        { name: 'Simon® Game', url: `${URL_CODEPEN}LdVOme` },
        { name: 'Tic Tac Toe', url: `${URL_CODEPEN}JLPyPq` },
        { name: 'Calculator', url: `${URL_CODEPEN}xYBdbm` },
        { name: 'Pomodoro Clock', url: `${URL_CODEPEN}BYgKWa` },
        { name: 'Random Quote Machine', url: `${URL_CODEPEN}yvxqQj` },
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
    
  },
  mounted () {
    
  }
});