import BaseFetcher from './basefetcher'

//SAMPLE CLIENT

class CandidatesClient extends BaseFetcher {
    constructor (config = {}) {
        super('CandidateClient', config)
        this.basePath = '/v1/getData'
    }

    async getCandidates () {
        return await this.execute(this.basePath, 'GET')
    }
}

export default CandidatesClient