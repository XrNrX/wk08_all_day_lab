<template lang="html">
  <div>

    <div v-for="booking in bookings">
      <p> {{ booking.name }} </p>
      <p> {{ booking.email }} </p>
    </div>

    <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>

  </div>


</template>

<script>

import { eventBus } from '../main.js';

export default {
  name: 'HotelGrid',
  props: ['bookings'],
  methods: {
    deleteBooking(id){
      fetch('http://localhost:3000/api/bookings/' + id, {
        method: 'DELETE'
      })
      .then(() => eventBus.$emit('delete-booking', id))
    }
  }
}
  </script>

  <style lang="css" scoped>
  </style>
