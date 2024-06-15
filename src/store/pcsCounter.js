
export const usePcsCounterStore = defineStore('pcsCounter', {
  state: () => {
    return {
      carpets: null,
      rugs: null,
      upholstery: {
        sofa: null,
        seat: null,
        splace: null,
        armchair: null,
        headboard: null,
        chair: null,
        corner: null,
        pillow: null,
        ottoman: null,
        contamination: null //загрязнения
      },
      leather: {
        sofa: null,
        splace: null,
        seat: null,
        pillow: null,
        ottoman: null,
        armchair: null,
        lchair: null,
        contamination: null //загрязнения
      },
      halltostairs: {
        hallway: null,
        hallstairs: null,
        stairs: null,
        contamination: null,
      },
      mattress: {
        rugs: null,
        deodorization: null,
        contamination:null,
      },
      curtains: {
        tulle: null,
        curtains: null,
      },
      commerical: {
        chair: null,
        curtains: null,
        carpet: null,
      }
    }
  },
  actions: {
    setPcsCounter(type, payload) {
      switch (type) {
        case 'Carpet':
          this.carpets = payload
          break
        case 'Rugs':
          this.rugs = payload
          break
        case 'Upholstery':
          if (payload.model in this.upholstery) {
            this.upholstery[payload.model] = payload
          }
          break
        case 'Leather':
          if (payload.model in this.leather) {
            this.leather[payload.model] = payload
          }
          break
        case 'HallToStairs':
          if (payload.model in this.halltostairs) {
            this.halltostairs[payload.model] = payload
          }
          break
        case 'Mattress':
          if (payload.model in this.mattress) {
            this.mattress[payload.model] = payload
          }
          break

        case 'Curtains':
          if (payload.model in this.curtains) {
            this.curtains[payload.model] = payload
          }
          break
        case 'Commercial':
          if (payload.model in this.commerical) {
            this.commerical[payload.model] = payload
          }
          break
      }
    },

    setContamination(type,payload) {
        switch (type) {
            case 'Upholstery':
                this.upholstery.contamination = payload
                break;
            case 'Leather':
                this.leather.contamination = payload
                break;
            case 'HallToStairs':
                this.halltostairs.contamination = payload
                break;
            case 'Mattress':
                this.mattress.contamination = payload
                break;
        }
    }
  }
})
