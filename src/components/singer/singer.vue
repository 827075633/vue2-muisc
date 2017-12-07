<template>
  <div class="singer">singer页面</div>
</template>
<script type='text/ecmascript-6'>
  import {getSingerList} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import Singer from 'common/js/singer.js'
  const HOT_NAME = '热门'
  const HOT_SINGER_LEN = 10

  export default{
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._geSingerList()
    },
    methods: {
      _geSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            this.singers = res.data.list
            this._normalizeSinger(this.singers)
          }
        })
      },
      _normalizeSinger(list) {
        // 设置热门歌手数据开始
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }

        list.forEach((item, index) => {
          if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
            // console.log(map.hot.items)
          }// 设置热门歌手数据结束

          let key = item.Findex
          if (!map[key]) { // 如果map里面没有值，就push
            // console.log(key)
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })
        console.log(map)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
