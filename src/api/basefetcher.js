import axios from 'axios'

const DEFAULT_STAGE = 'alpha'

const HOST_TO_STAGE_MAP = {
    '<Your domain>.alpha.com': 'alpha',
    '<Your domain>.beta.com': 'beta',
    '<Your domain>.com': 'prod'
}

const STAGE_TO_ENDPOINT_MAP = {
    'alpha': 'the api endpoint',
    'beta': 'beta data endpoint',
    'prod': 'prod data endpoint'
}

class BaseFetcher {
    constructor (client, config = {}) {
        const hostname = window.location.hostname
        this.client = client
        this.stage = HOST_TO_STAGE_MAP[ hostname ] || DEFAULT_STAGE
        this.apiEndpoint = STAGE_TO_ENDPOINT_MAP[ this.stage ]
        this.endPoint = config.base || this.apiEndpoint
    }

    /**
     * 
     * @param {string} resourcePath 
     * @param {string} method 
     * @param {object} options 
     */
    execute (resourcePath, method, options = {}) {
        // add runas later
        const fetchUrl = `${this.endPoint}${resourcePath}`

        return new Promise((resolve, reject) => {
            const request = { ...options }
            request.method = method
            request.url = fetchUrl

            return axios(request).then(response => {
                resolve(response)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default BaseFetcher