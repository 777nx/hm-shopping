<template>
  <div class="search">
    <van-nav-bar fixed title="商品列表" left-arrow @click-left="$router.go(-1)" />

    <van-search
      readonly
      shape="round"
      background="#ffffff"
      :value="querySearch || '搜索商品'"
      show-action
      @click="$router.push('/search')"
    >
      <template #action>
        <van-icon class="tool" name="apps-o" />
      </template>
    </van-search>

    <!-- 排序选项按钮 -->
    <div class="sort-btns">
      <div class="sort-item" @click="getSearch('all')">综合</div>
      <div class="sort-item" @click="getSearch('sales')">销量</div>
      <div class="sort-item" @click="togglePriceSort">价格</div>
    </div>

    <div class="goods-list">
      <GoodsItem v-for="item in proList" :key="item.goods_id" :item="item"></GoodsItem>
    </div>
  </div>
</template>

<script>
import { getProList } from '@/api/product'
import GoodsItem from '@/components/GoodsItem.vue'
export default {
  name: 'SearchIndex',
  components: {
    GoodsItem
  },
  computed: {
    querySearch () {
      return this.$route.query.search
    }
  },
  data () {
    return {
      page: 1,
      proList: [],
      // 价格排序状态，0为从低到高，1为从高到低
      sortPrice: 1
    }
  },
  async created () {
    // const { data: { list } } = await getProList({
    //   categoryId: this.$route.query.categoryId,
    //   goodsName: this.querySearch,
    //   page: this.page
    // })
    // this.proList = list.data
    this.getSearch('all')
  },
  methods: {
    async getSearch (sortType) {
      let sortPrice = this.sortPrice
      // 如果综合搜索，则不需要传递sortPrice
      if (sortType === 'all') {
        sortPrice = undefined
      }
      const { data: { list } } = await getProList({
        categoryId: this.$route.query.categoryId,
        goodsName: this.querySearch,
        page: this.page,
        sortType,
        sortPrice
      })
      this.proList = list.data
    },
    togglePriceSort () {
      // 切换价格排序状态
      this.sortPrice = this.sortPrice === 1 ? 0 : 1
      // 发起价格搜索请求
      this.getSearch('price')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  padding-top: 46px;
  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .sort-btns {
    display: flex;
    height: 36px;
    line-height: 36px;
    .sort-item {
      text-align: center;
      flex: 1;
      font-size: 16px;
    }
  }
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
