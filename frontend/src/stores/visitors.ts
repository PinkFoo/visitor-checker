import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000/visitor'

interface Visitor {
  _id: string
  visitor_id: string
  scrolled: boolean
  avatar_src: string
}

interface VisitorsState {
  currentVisitor: Visitor | null
  visitorReport: Record<string, number>
}

export const useVisitorsStore = defineStore({
  id: 'visitors',
  state: (): VisitorsState => ({
    currentVisitor: {} as Visitor,
    visitorReport: {}
  }),

  actions: {

    async fetchVisitor(id: string) {
      const response = await axios.get(`${API_URL}/${id}`)
      this.currentVisitor = response.data
    },
    
    async fetchReport() {
      const response = await axios.get(`${API_URL}/report`)
      this.visitorReport = response.data
    },

    async addNewVisitor() {
      const response = await axios.post(`${API_URL}/`)
      this.currentVisitor = response.data
    },

    async updateVisitor(visitor: Visitor) {
      await axios.put(`${API_URL}/${visitor._id}`, visitor)
    },
  }
})
