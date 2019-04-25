import React from 'react'
import PropTypes from 'prop-types'

const demoPdf = require('./demo.pdf')

const demoTextFileResponse = {
  text: () => new Promise(resolve => resolve('Hello World !'))
}

const demoFilesByClass = {
  pdf: demoPdf,
  audio: 'https://viewerdemo.cozycloud.cc/Z.mp3',
  video: 'https://viewerdemo.cozycloud.cc/Nextcloud.mp4',
  text: 'https://viewerdemo.cozycloud.cc/notes.md'
}

const getDownloadLinkById = id =>
  new Promise(resolve => resolve(demoFilesByClass[id]))

const mockClient = {
  options: {
    uri: ''
  },
  collection: () => ({
    getDownloadLinkById,
    get: () =>
      new Promise(resolve =>
        resolve({
          data: {
            links: {
              large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
            }
          }
        })
      )
  }),
  fetch: () => new Promise(resolve => resolve(demoTextFileResponse)),
  getClient: () => mockClient
}

class Wrapper extends React.Component {
  getChildContext() {
    return {
      client: mockClient,
      t: str => str
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

Wrapper.childContextTypes = {
  client: PropTypes.object,
  t: PropTypes.func
}

export default Wrapper
