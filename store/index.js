export const state = () => ({
  tracks: [
    {
      id: 1,
      title: 'Purple Rain',
      artist: '&ME',
      bpm: 122,
      key: '1m',
      rating: 5,
      label: 'Keinemusik',
      genre: 'Tech-House',
      year: 2012
    }
  ],
  headers: [
    {
      text: 'ID',
      align: 'center',
      sortable: true,
      value: 'id'
    },
    {
      text: 'Track Title',
      align: 'center',
      sortable: true,
      value: 'title'
    },
    {
      text: 'Artist',
      align: 'center',
      sortable: true,
      value: 'artist'
    },
    {
      text: 'Genre',
      align: 'center',
      sortable: true,
      value: 'genre'
    },
    {
      text: 'Label',
      align: 'center',
      sortable: true,
      value: 'label'
    },
    {
      text: 'Rating',
      align: 'center',
      sortable: true,
      value: 'rating'
    },
    {
      text: 'BPM',
      align: 'center',
      sortable: true,
      value: 'bpm'
    },
    {
      text: 'Key',
      align: 'center',
      sortable: true,
      value: 'key'
    },
    {
      text: 'Year',
      align: 'center',
      sortable: true,
      value: 'year'
    },
    {
      text: 'Actions',
      align: 'center',
      sortable: false,
      value: 'actions'
    },
    {
      text: 'Keywords',
      align: 'center',
      sortable: false,
      value: 'keywords'
    }
  ]
})

export const mutations = {
  deleteTrack(state, index) {
    state.tracks.splice(index, 1)
  },
  saveTrack(state, track) {
    state.tracks.push(track)
  },
  updateTrack(state, track) {
    Object.assign(state.tracks[track.index], track.item)
  }
}
