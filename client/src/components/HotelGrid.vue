<template lang="html">
  <div>

    <div id="customer-item" v-for="booking in bookings">
      <p> {{ booking.name }} </p>
      <p> {{ booking.email }} </p>
      <button v-on:click="deleteBooking(booking._id)">Delete Booking</button>
    </div>


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

#customer-item {
  border: black solid 4px;
  border-radius: 20px;
  width: 300px;
  padding: 10px;
  margin: 5px;


}

</style>
