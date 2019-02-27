<template lang="html">
  <div>
    <ul>
      <hotel-form></hotel-form>
      <hotel-grid :bookings="bookings" :booking="booking"></hotel-grid>
    </ul>
  </div>

</template>

<script>

import HotelForm from './components/HotelForm.vue';
import HotelGrid from './components/HotelGrid.vue';
import { eventBus } from './main.js'

export default {
  data() {
    return {
      bookings: []
    }
  },
  components: {
    HotelForm,
    HotelGrid
  },
  mounted(){
    this.getData();

    eventBus.$on('booking-added', (booking) =>
    this.bookings.push(booking))

    eventBus.$on('delete-booking', id => this.deleteBooking(id));

  },
  methods: {
    getData(){
      fetch('http://localhost:3000/api/bookings')
      .then(res => res.json())
      .then(bookings => this.bookings = bookings);
    },
    deleteBooking(id) {
      const index = this.bookings.findIndex(booking => {
        return booking._id === id
      })
      this.bookings.splice(index, 1);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
