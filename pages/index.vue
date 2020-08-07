<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center"></div>
      <v-card>
        <v-card-title class="headline">
          Welcome to Music Database
        </v-card-title>
        <v-card-text>
          <p>
            Music Database is a music cataloguer application, designed
            especially with electronic music and dj's in mind, altough it can be
            used by anyone that wants to build a searchable index of their music
            collection.
          </p>
          <p>
            Thank you for checking it out and I look forward to bringing more
            exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; Rogerio Romao</small></em>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/catalog">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {}
}
</script>
