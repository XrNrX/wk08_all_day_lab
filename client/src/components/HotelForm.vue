<template lang="html">
  <div>
    <h1>Bates Motel</h1>
    <form v-on:submit.prevent="addBooking" v-model="bookings">
      <h3>Add Booking</h3>
      <label for="booking">Booking: </label>


      <label for="booking">Name: </label>
      <input type="text" for="name" id="booking" v-model="bookings.name" required>


      <label for="booking">Email: </label>
      <input type="text" for="email" id="email" v-model="bookings.email" required>

      <input type="checkbox">
      <label for="email">Checked In</label>



      <input type="submit" value="Book In">

    </form>
  </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
  name: 'BookingsForm',
  data() {
    return {
      bookings: {
        name: "",
        email: ""
      }
    }
  },
  methods: {
    addBooking() {
      fetch('http://localhost:3000/api/bookings/', {
        method: 'POST',
        body: JSON.stringify(this.bookings),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(res => res.json())
      .then(booking => eventBus.$emit('booking-added', booking))
    }
  }

}
</script>

<style lang="css" scoped>


</style>
