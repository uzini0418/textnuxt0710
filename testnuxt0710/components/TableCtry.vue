<template>
  <div>
    <table id="list">
      <thead>
      <tr>
        <th>번호</th><th>국가명</th><th>수도</th><th>지역</th>
      </tr>
      </thead>
      <tbody id="contacts">
      <tr v-for="(c, index) in resArr" :key="index">
        <td>{{c.no}}</td>
        <td>{{c.name}}</td>
        <td>{{c.capital}}</td>
        <td>{{c.region}}</td>
        {{index}}
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import eventBus from './EventBus.vue'

    export default {
        name: "table-ctry",
      created: function() {
          eventBus.$on('search-ctry', this.searchCtry2);
      },
      data: function() {
          return {
            countries: [
              {no: 1, name: "미국", capital: "워싱턴DC", region: "america"},
              {no: 3, name: "프랑스", capital: "파리", region: "europe"},
              {no: 3, name: "영국", capital: "런던", region: "europe"},
              {no: 4, name: "중국", capital: "베이징", region: "asia"},
              {no: 5, name: "태국", capital: "방콕", region: "asia"}
            ],
            resArr : []
          }
      },
      methods: {
        searchCtry: function(cname) {
          console.log(cname);
          return this.countries.filter(function(item, index) {
            if(item.name.indexOf(cname) > -1) {
              return true;
            }
          });
        },
        searchCtry2: function(cname) {
          this.resArr = this.countries.filter(function(item, index) {
            if(item.name.indexOf(cname) > -1) {
              return true;
            }
          });
        }
      }
    }
</script>

<style scoped>
  #list {
    margin: 30px auto;
  }
  #list * {
    border: 1px solid black;
    border-collapse: collapse;
    border-spacing: 0px;
    padding: 10px 30px;
  }
</style>
