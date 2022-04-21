<script lang="ts" setup>
import NewsHeader from './comp/NewsHeader.vue'
</script>
<template>
  <div class="NewsView">
    <NewsHeader>
      <span>NEWS</span>
    </NewsHeader>
    <div class="new-content">
      <div class="left">
        <div class="img">
          <img
            src="https://img14.360buyimg.com/n0/jfs/t1/36024/5/16127/366575/6131b9f4E6fde8939/e9843d4e2d6ac2b0.jpg"
            alt=""
          />
        </div>
        <div class="date-info"> NOVEMBER 15, 2021 VIA BBC </div>
        <h2>Joe Biden and Xi Jinping: What they want from talks</h2>

        <div class="des">
          US President Joe Biden and Chinese President Xi Jinping will hold a
          virtual summit on Monday as tensions between the countries deepen. The
          competing superpowers surprised many last week by issuing a joint
          declaration to address climate change, at talks in Glasgow, Scotland.
          But growing concerns of a military confrontation over Taiwan have
          thrown their differences into sharp relief. The pair's third meeting
          will address several thorny topics. Cybersecurity, trade and nuclear
          non-proliferation are subjects on the table, sources familiar with the
          negotiations told US media. In a statement released on Friday, the
          White House said "the two leaders will discuss ways to responsibly
          manage the competition between the United States and the PRC, as well
          as ways to work together where our interests align". The duo have
          spoken twice since Mr Biden took office
        </div>
        <h3>What Biden wants</h3>
        <div class="des">
          US President Joe Biden and Chinese President Xi Jinping will hold a
          virtual summit on Monday as tensions between the countries deepen. The
          competing superpowers surprised many last week by issuing a joint
          declaration to address climate change, at talks in Glasgow, Scotland.
          But growing concerns of a military confrontation over Taiwan have
          thrown their differences into sharp relief. The pair's third meeting
          will address several thorny topics. Cybersecurity, trade and nuclear
          non-proliferation are subjects on the table, sources familiar with the
          negotiations told US media. In a statement released on Friday, the
          White House said "the two leaders will discuss ways to responsibly
          manage the competition between the United States and the PRC, as well
          as ways to work together where our interests align". The duo have
          spoken twice since Mr Biden took office
        </div>
      </div>
      <div class="right">
        <div class="img">
          <img
            src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/140919/3/26772/64223/625fde37Ee5b6b70c/5138bdfec5df1c44.jpg.webp"
            alt=""
          />
        </div>
        <div class="date-info"> NOVEMBER 15, 2021 VIA BBC </div>
        <h2>Joe Biden and Xi Jinping: What they want from talks</h2>

        <div class="des">
          US President Joe Biden and Chinese President Xi Jinping will hold a
          virtual summit on Monday as tensions between the countries deepen. The
          competing superpowers surprised many last week by issuing a joint
          declaration to address climate change, at talks in Glasgow, Scotland.
          But growing concerns of a military confrontation over Taiwan have
          thrown their differences into sharp relief. The pair's third meeting
          will address several thorny topics. Cybersecurity, trade and nuclear
          non-proliferation are subjects on the table, sources familiar with the
          negotiations told US media. In a statement released on Friday, the
          White House said "the two leaders will discuss ways to responsibly
          manage the competition between the United States and the PRC, as well
          as ways to work together where our interests align". The duo have
          spoken twice since Mr Biden took office
        </div>
        <h3>What Biden wants</h3>
        <div class="des">
          US President Joe Biden and Chinese President Xi Jinping will hold a
          virtual summit on Monday as tensions between the countries deepen. The
          competing superpowers surprised many last week by issuing a joint
          declaration to address climate change, at talks in Glasgow, Scotland.
          But growing concerns of a military confrontation over Taiwan have
          thrown their differences into sharp relief. The pair's third meeting
          will address several thorny topics. Cybersecurity, trade and nuclear
          non-proliferation are subjects on the table, sources familiar with the
          negotiations told US media. In a statement released on Friday, the
          White House said "the two leaders will discuss ways to responsibly
          manage the competition between the United States and the PRC, as well
          as ways to work together where our interests align". The duo have
          spoken twice since Mr Biden took office
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.NewsView {
  .news-header {
    span {
      position: absolute;
      left: 62px;
      bottom: 112px;
      line-height: 1;
      font-size: 84px;
      font-weight: bold;
    }
  }

  .new-content {
    display: flex;
    line-height: 26px;
    max-width: 1200px;
    margin: 0 auto;

    .left {
      flex: 1;
      padding: 20px;
    }

    .right {
      flex: 1;
      padding: 20px;
    }

    .img {
      // border: 1px solid #ddd;
      padding: 10px;
      border: solid 1px #424b60;
      border-radius: @border-radius-base;
      margin-bottom: 20px;
    }

    h2 {
      line-height: 42px;
      color: #fff;
      font-size: 28px;
    }

    h3 {
      line-height: 26px;
      // line-height: 42px;
      color: #fff;
      font-size: 14px;
      margin-top: 10px;
      margin-bottom: 0;
    }

    .date-info {
      line-height: 28px;
      color: #039bdb;
    }
  }
}
</style>
