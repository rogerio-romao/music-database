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
    },
    {
      id: 2,
      title: 'Harmonica Track',
      artist: 'Soul Boy',
      bpm: 120,
      key: '10m',
      rating: 4,
      label: 'Nervous Records',
      genre: 'House',
      year: 2008
    },
    {
      id: 3,
      title: 'Gorilla',
      artist: 'Nick Curly',
      bpm: 125,
      key: '5d',
      rating: 4,
      label: 'Mindshake Records',
      genre: 'Tech-House',
      year: 2016
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
