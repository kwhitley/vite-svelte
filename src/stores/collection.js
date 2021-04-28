import { writable } from 'svelte/store'
import { Fetcher } from '../utils/fetcher'

const collectionFetcher = new Fetcher({ duration: 0 })
const detailsFetcher = new Fetcher()

function createCollection() {
  const { subscribe, set, update } = writable({
    details: undefined,
    pages: Array(3),
  })

  return {
    subscribe,
    load: id => collectionFetcher.get(`/collections/${id}`)
                  .then(details => {
                    console.log('setting collection with details', details)
                    update(c => ({ ...c, details }))
                  }),
    read: (...ids) => Promise.all(ids.map(id => detailsFetcher.get(`/images/${id}`)))
                        .then(pages => {
                          console.log('setting pages from', pages)
                          update(c => ({ ...c, pages }))
                        })
  }
}

export const collection = createCollection()
