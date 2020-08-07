<template>
  <v-layout>
    <v-flex class="text-center">
      <v-card>
        <v-card-title>
          Tracks
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="900px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
                >New Item</v-btn
              >
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Track title"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.artist"
                        label="Artist"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.label"
                        label="Label"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.genre"
                        label="Genre"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.rating"
                        label="Rating"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.bpm"
                        label="BPM"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.key"
                        label="Key"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.year"
                        label="Year"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.keywords"
                        label="Keywords"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="tracks"
          :search="search"
          show-expand
        >
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <!-- eslint-disable-next-line -->
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              Keywords: {{ item.keywords.join(', ') }}
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    editedIndex: -1,
    editedItem: {
      title: '',
      artist: '',
      bpm: 0,
      key: '',
      rating: 0,
      label: '',
      genre: '',
      year: 2020,
      keywords: []
    },
    defaultItem: {
      title: '',
      artist: '',
      bpm: 0,
      key: '',
      rating: 0,
      label: '',
      genre: '',
      year: 2020,
      keywords: []
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    tracks() {
      return this.$store.state.tracks
    },
    headers() {
      return this.$store.state.headers.slice(0, -1)
    }
  },

  watch: {
    dialog(val) {
      val || this.close()
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.$store.state.tracks.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.$store.state.tracks.indexOf(item)
      confirm('Are you sure you want to delete this item?') &&
        this.$store.state.tracks.splice(index, 1)
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.tracks[this.editedIndex], this.editedItem)
      } else {
        this.$store.state.tracks.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
