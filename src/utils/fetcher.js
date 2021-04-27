export class Fetcher {
  map = {}

  constructor(options = {}) {
    const {
      duration = 3000,
    } = options

    this.options = {
      duration,
    }

    console.log('creating new Fetcher with options', this.options)
  }

  get(id) {
    const { duration = 0 } = this.options

    if (this.map[id]) return this.map[id]

    return this.map[id] = fetch(`https://api.slick.af${id}`)
                            .then(r => r.json())
                            .then(r => {
                              // remove cached promise
                              if (duration >= 0) {
                                setTimeout(() => {
                                  console.log(`removing fetch promise for ${id} after ${duration}ms`)
                                  Reflect.deleteProperty(this.map, id)
                                }, duration)
                              }

                              // then return response
                              return r
                            })
                            .catch(err => console.error(err.message))
  }
}
