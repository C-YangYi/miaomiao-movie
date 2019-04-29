<template>
  <div class="cinema_body">
    <ul>
      <li v-for="item of cinemaList" :key="item.id">
        <div>
          <span>{{item.nm}}</span>
          <span class="q">
            <span class="price">{{item.sellPrice}}</span> 元起
          </span>
        </div>
        <div class="address">
          <span>{{item.addr}}</span>
          <span>{{item.distance}}</span>
        </div>
        <div class="card">
          <div
            v-for="(num,key) of item.tag"
            :key="key"
            v-if="num===1&&key!=='sell'||num==='折扣卡'" 
            :class="key|formatClass"
          >{{key|formatCard}}</div>
        </div>
        <div class="discount-block" v-if="item.promotion.cardPromotionTag"><img src="@/assets/card.png" alt="">{{item.promotion.cardPromotionTag}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Clist",
  data() {
    return {
      cinemaList: []
    };
  },
  filters: {
    formatCard(key) {
      switch (key) {
        case 'allowRefund':
          return "退";
          break;
        case 'endorse':
          return "改签";
          break;
        case 'snack':
          return "小吃";
          break;
        case 'vipTag':
          return "折扣卡";
          break;
      }
    },
    formatClass(key) {
      switch (key) {
        case 'allowRefund':
          return "bl";
          break;
        case 'endorse':
          return "bl";
          break;
        case 'snack':
          return "or";
          break;
        case 'vipTag':
          return "or";
          break;
      }
    }
  },
  mounted() {
    this.axios
      .get("/api/cinemaList?cityId=10")
      .then(result => {
        var msg = result.data.msg;
        console.log(result);

        if (msg === "ok") {
          this.cinemaList = result.data.data.cinemas;
        }
      })
      .catch(err => {
        throw err;
      });
  }
};
</script>
<style scoped>
#content .cinema_body {
  flex: 1;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
  margin-left: 10px;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:first-child {
  display: inline-block;
  width: 80%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cinema_body .address span:nth-of-type(2) {
  /* display: inline-block; */
  width: 10%;
  float: right;
  margin-right: 5%;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
.cinema_body .discount-block{
    font-size: 11px;
    color: #999;
}
.cinema_body .discount-block img{
    display: inline-block;
    width: 14px;
    height: 15px;
    margin-right: 3px;
    vertical-align:middle;
    margin-top: -3px;
}
</style>
