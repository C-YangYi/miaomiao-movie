<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="showLoading"/>
    <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li class="pullDown">
          <img
            src="@/assets/loading.gif"
            :style="'height:'+loadHeight+'px;width:'+loadHeight*1.78+'px'"
          >
        </li>
        <li v-for="item of movieList" :key="item.id">
          <div class="pic_show">
            <img id="loadingImg" :src="item.img|setHW('128.180')" @tap="handleToDetail" alt>
          </div>
          <div class="info_list">
            <h2>
              {{item.nm}}
              <img v-if="item.version" src="@/assets/maxs.png">
            </h2>
            <p v-if="item.sc!==0&&item.globalReleased">
              观众评
              <span class="grade">{{item.sc}}</span>
            </p>
            <p v-else-if="!item.globalReleased">
              <span class="person">{{item.wish}}</span> 人想看
            </p>
            <p v-else>暂无评分</p>
            <p>主演：{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div :class="item.globalReleased?'btn_mall':'btn_pre'">{{item.globalReleased?'购票':'预售'}}</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
import { log } from "util";
import { setTimeout } from "timers";
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: "",
      pullDownMsg: "",
      showLoading: true,
      loadHeight: 0,
      prevCityId : -1
    };
  },
  activated() {
    var cityId = this.$store.state.city.id
    if(this.prevCityId === cityId){return}
    this.showLoading = true
    this.axios.get("/api/movieOninfoList?cityId="+cityId).then(result => {
      this.movieList = result.data.data.movieList;
      console.log(this.movieList);
      this.showLoading = false;
      this.prevCityId = cityId
      // this.$nextTick(() => {
      //   var scroll = new BScroll(this.$refs.movie_body, {
      //     tap: true,
      //     probeType: 1
      //   });
      //   scroll.on("scroll", poy => {
      //     if (poy.y > 1 && poy.y <= 45) {
      //       this.loadHeight = parseInt(poy.y);
      //     } else {
      //       this.loadHeight = 45;
      //     }
      //     console.log("scroll");
      //   });
      //   scroll.on("touchEnd", poy => {
      //     if (poy.y > 45) {
      //       this.axios.get("/api/movieOninfoList?cityId=10").then(result => {
      //         var msg = result.data.msg;
      //         if (msg === "ok") {
      //           setTimeout(() => {
      //             this.movieList = result.data.data.movieList;
      //             this.loadHeight = 0;
      //           }, 2000);
      //         }
      //       });
      //     }
      //   });
      // });
    });
  },
  methods: {
    handleToDetail() {
      console.log(111);
    },
    handleToScroll(pos) {
      if (pos.y > 1 && pos.y <= 45) {
        this.loadHeight = parseInt(pos.y);
      } else {
        this.loadHeight = 45;
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 45) {
        this.axios.get("/api/movieOninfoList?cityId=10").then(result => {
          var msg = result.data.msg;
          if (msg === "ok") {
            setTimeout(() => {
              this.movieList = result.data.data.movieList;
              this.loadHeight = 0;
            }, 1500);
          }
        });
      }  else {
        this.loadHeight = 0;
      }
    }
  }
};
</script>

<style scoped>
#content .movie_body {
  flex: 1;
  overflow: auto;
  position: relative;
}
.movie_body::-webkit-scrollbar {
  display: none;
}
.movie_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.movie_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.movie_body .pic_show {
  width: 64px;
  height: 90px;
}
.movie_body .pic_show img {
  width: 100%;
  height: 100%;
}
.movie_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.movie_body .info_list .person {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}
.movie_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.movie_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.movie_body .btn_mall,
.movie_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.movie_body .btn_pre {
  background-color: #3c9fe6;
}
.movie_body .pullDown {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  transition: all 0.5s;
}
.movie_body .pullDown img {
  margin: 0 auto;
  transition: all 0.5s;
}
</style>

