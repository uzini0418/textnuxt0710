<template>
  <div>
    <hr class="divider"/>
    <div>
      <table class="detail table table-bordered">
        <tbody>
        <tr class="active">
          <td>일련번호</td>
          <td>{{contact.no}}</td>
        </tr>
        <tr class="active">
          <td>이름</td>
          <td>{{contact.name}}</td>
        </tr>
        <tr class="active">
          <td>전화</td>
          <td>{{contact.tel}}</td>
        </tr>
        <tr class="active">
          <td>주소</td>
          <td>{{contact.address}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Constant from '~/constant';
    export default {
        name: "contactbyno",
        computed: mapGetters({
          contact: 'getContactOne' // 여기서 getters로 넘어갔을 때 state 파라미터 내용은 어디서 가져오는거지?
        }),
        created: function() {
          //console.log(this.$route.params);
          var no = this.$route.params.no;
          this.$store.commit(Constant.CHANGE_NO, {no: no});
        },
        beforeRouteUpdate(to,from,next) {
         // console.log(this.$route.params);
          console.log(to); // 이동할 url
          //console.log(from); //이전 url
          console.log(next); // to url로 넘어감
          var no = to.params.no;
          this.$store.commit(Constant.CHANGE_NO, {no: no});
          next(); // to로 넘어가는 함수
        }
    }
</script>

<style scoped>
table.detail {width: 400px;}
table * {
  border: 1px solid black;
}
</style>
