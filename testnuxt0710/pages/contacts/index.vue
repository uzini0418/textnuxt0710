<template>
  <div>
    <h1>연락처</h1>
    <div class="wrapper">
      <div class="box" v-for="c in contacts" :key="c.no">
        <NLink :to="'/contacts/' + c.no">{{c.name}}</NLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: "contacts",
        computed: mapGetters({
          contacts: 'getContacts'
        })
    }
</script>

<style scoped>

</style>
