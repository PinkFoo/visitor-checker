import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = 'http://localhost:3000/visitor'

interface Visitor {
  _id: string
  visitor_id: string
  scrolled: boolean
}

interface VisitorsState {
  visitors: Array<Visitor>
  currentVisitor: Visitor | null
}

export const useVisitorsStore = defineStore({
  id: 'visitors',
  state: (): VisitorsState => ({
    visitors: [],
    currentVisitor: null
  }),
  actions: {
    async fetchVisitors() {
      const response = await axios.get(API_URL)
      this.visitors = response.data
    },
    async fetchVisitor(id: string) {
      const response = await axios.get(`${API_URL}/${id}`)
      this.currentVisitor = response.data
    },
    async addVisitor(visitor: Visitor) {
      console.log('visitor');
      console.log(visitor);
      if (!visitor.scrolled) {
        visitor.scrolled = false;
      }
      console.log(visitor);
      await axios.post(`${API_URL}/`, visitor)
      await this.fetchVisitors()
    },
    async updateVisitor(visitor: Visitor) {
      await axios.put(`${API_URL}/${visitor._id}`, visitor)
      
      await this.fetchVisitors()
    },

    async deleteVisitor(id: string) {
      await axios.delete(`${API_URL}/${id}`)
      this.visitors = this.visitors.filter((visitor) => visitor._id !== id)
      if (this.currentVisitor?._id === id) {
        this.currentVisitor = null
      }
    }
  }
})
