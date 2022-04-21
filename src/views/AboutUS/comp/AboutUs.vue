<script lang="ts" setup>
import Icon from '@/components/Icon/src/Icon.vue'
</script>
<template>
  <div class="aboutUs enter-y">
    <div class="topLogo">
      <img src="@/assets/logo/logo-text.png" />
    </div>

    <div class="introduce">
      <img src="@/assets/company.jpg" />
      <div class="text">
        <h2 class="aboutUs_title">Our Company</h2>
        <p>
          <b>META OPTION</b> is an investment and trading firm established in
          October 2010. Started first as a consultancy firm in Brooklyn New York
          offering financial and investment consultancy services to investors of
          various field of business.
        </p>
      </div>

      <div class="text2 clear-both">
        <p>
          <b>META OPTION</b> then engages in online trading service with its
          stand-alone featured platform, trading on global market products from
          Commodities, to FOREX, and to Cryptocurrencies. Promoting earning
          opportunity for everyone who wants to earn through online trading
          whether a beginner or an experienced trader with theassistance of
          well-trained customer service personnel, professional consultants and
          trade experts.
        </p>
        <p>
          <b>META OPTION</b> then engages in online trading service with its
          stand-alone featured platform, trading on global market products from
          Commodities, to FOREX, and to Cryptocurrencies. Promoting earning
          opportunity for everyone who wants to earn through online trading
          whether a beginner or an experienced trader with the assistance of
          well-trained customer service personnel, professional consultants and
          trade experts.With it’s growing number of clients, Meta Option
          extended it’s services overseas and moved the company’s office at
          137-139 4th Floor RPG Bldg., W -25th Street, New York, NY10001. In
          addition of commissioned contactcenters and satellite support centers
          from other regions around the globe.
        </p>
      </div>
    </div>
    <div class="box-list">
      <div class="box">
        <div class="h">
          <Icon icon="ion:ios-eye"></Icon>

          <span class="h-title">Vision</span>
        </div>
        <ul>
          <li
            ><span>
              To promote customer service satisfaction by ensuring outmost
              assistance to clients.
            </span></li
          >
          <li><span> To help entrepreneur’s gain financial freedom. </span></li>
          <li
            ><span>
              Promote the company’s services, expertise and with its platform to
              earn to everyone regardless of profile status.
            </span></li
          >
        </ul>
      </div>
      <div class="box">
        <div class="h">
          <Icon icon="fluent:target-arrow-24-filled"></Icon>
          <span class="h-title">Mission</span>
        </div>
        <ul>
          <li
            ><span
              >To be the top trading / business service provider company.</span
            ></li
          >
          <li
            ><span
              >To be the epitome of customer service satisfaction.</span
            ></li
          >
        </ul>
      </div>
    </div>

    <div class="timeline-wrap">
      <h2 class="aboutUs_title text-center">Our Evolution</h2>
      <div class="timeline">
        <div class="line"></div>
        <div class="list">
          <div class="item">
            <div class="year">
              <div class="y">2010</div>
            </div>
            <div class="text">
              Started first as a consultancy firm in Brooklyn New York which
              servicescovered in domestic scale.
            </div>
          </div>
          <div class="item">
            <div class="year">
              <div class="y">2015</div>
            </div>
            <div class="text">
              Foreseeing the growth opportunity in online trading, Meta Option
              thenengages in online trading service with its stand-alone
              featured platform, trading on global market products from
              Commodities, to Forex, and to Cryptocurrencies.
            </div>
          </div>
          <div class="item">
            <div class="year">
              <div class="y">2017</div>
              <div class="present">to Present</div>
            </div>
            <div class="text">
              Foreseeing the growth opportunity in online trading, Meta Option
              thenengages in online trading service with its stand-alone
              featured platform, trading on global market products from
              Commodities, to Forex, and to Cryptocurrencies.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="awards">
      <div class="title">
        <div> Awards and </div>
        <div>Recognitions</div>
      </div>
      <div class="list">
        <div class="item">
          <div class="tit">• 2011 to 2012 •</div>
          <div class="cont">
            Recognized by the New York State Department as one of the trusted
            entry-level companies under the business sector for 2011-2012
            season.
          </div>
        </div>
        <div class="item">
          <div class="tit">• 2015 •</div>
          <div class="cont">
            New York’s BAA honorable mention for business innovation and
            integrated business platform.
          </div>
        </div>
        <div class="item">
          <div class="tit"> • 2016 •</div>
          <div class="cont">
            Nominated for best Corporate Steward of the US Chamber of Commerce.
          </div>
        </div>
        <div class="item">
          <div class="tit">• 2017 • </div>
          <div class="cont">
            Recipient of Best Sustainability Program of the US Chamber of
            Commerce for its commitment to support climate change solutions.
          </div>
        </div>
        <div class="item">
          <div class="tit"> • 2019 •</div>
          <div class="cont">
            Global Investor Group Investment Excellence recipient under
            Financial Services category of the International Business Award
            (IBA).
          </div>
        </div>
        <div class="item">
          <div class="tit"> • 2019 to 2021 •</div>
          <div class="cont">
            Recognized as one of the trusted business companies for domestic to
            international levelunder investment criteria by the US Chamber of
            Commerce.
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <span class="info">© 2022 Meta Option.</span>
      <span>All rights reserved.</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.aboutUs {
  max-width: 1000px;
  margin: 0 auto;

  .topLogo {
    height: 290px;
    padding-left: 52px;
    padding-top: 36px;

    img {
      width: 550px;
      height: 163px;
    }
  }

  .introduce {
    h2 {
    }

    img {
      width: 410px;
      float: left;
      margin-right: 50px;
      margin-bottom: 20px;
    }

    .text {
      padding-top: 80px;
    }
  }

  .box-list {
    display: flex;
    padding: 0 50px;
    margin-top: 80px;

    .box {
      background-color: #171e2d;
      box-shadow: -7px 4px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: 0 5px 5px 0;
      flex: 1;
      border: solid 2px #424b60;

      & + .box {
        margin-left: 56px;
      }
    }

    .h {
      height: 80px;
      line-height: 80px;
      font-size: 22px;
      background-color: #262d3d;
      text-align: center;

      .h-title {
        vertical-align: middle;
        margin-left: 10px;
      }

      .anticon {
        color: #389bf2;
        font-size: 30px;
        vertical-align: middle;
      }
    }

    ul {
      padding: 20px 30px;
    }

    li {
      line-height: 25px;
    }

    li::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #389bf2;
      border-radius: 8px;
      box-shadow: 0 0 8px 0 #389bf2;
      margin-right: 10px;
      vertical-align: middle;
    }

    li span {
      vertical-align: middle;
    }
  }

  .timeline-wrap {
    padding: 0 120px;

    .aboutUs_title {
      line-height: 150px;
      margin-bottom: 0;
    }

    .timeline {
      display: flex;
    }

    .line {
      position: relative;
      width: 86px;

      &::after {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 20px;
        border-left: 2px dashed #ffffff85;
      }
    }

    .list {
    }

    .item {
      position: relative;
      display: flex;
      padding: 14px 20px;
      background-color: #263042;
      box-shadow: -7px 4px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: 5px;
      border: solid 2px #424b60;

      & + .item {
        margin-top: 30px;
      }

      &:first-child::before,
      &:last-child::before {
        // height: 32px;
        content: '';
        position: absolute;
        left: -52px;
        top: 0;
        bottom: 0;
        width: 32px;
        background-color: #262d3d;
      }

      &::after {
        content: '';
        position: absolute;
        left: -48px;
        top: 33px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background-color: #389bf2;
        box-shadow: 0 0 6px 1px #389bf2;
      }

      &:first-child::before {
        // top: 0;
        bottom: 35px;
      }

      &:last-child::before {
        top: 40px;
      }
    }

    .year {
      width: 170px;
      padding: 10px 40px 0 50px;
    }

    .y {
      color: #389bf2;
      font-size: 23px;
    }

    .text {
      line-height: 26px;
      flex: 1;
    }
  }

  .awards {
    padding: 0 50px;

    .title {
      width: 297px;
      height: 95px;
      line-height: 36px;
      margin: 65px auto 55px;
      font-size: 29px;
      text-align: center;
      background: url('@/assets/leaf.png');
      background-size: 100% 100%;
      padding-top: 6px;
    }

    .list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 50px;
    }

    .item {
      background-color: #171e2d;
      box-shadow: -7px 4px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: 0 5px 5px 0;
      padding: 10px 58px 40px;
    }

    .tit {
      line-height: 70px;
      color: #389bf2;
      font-size: 23px;
      text-align: center;
    }

    .cont {
      line-height: 26px;
    }
  }

  .copyright {
    height: 145px;
    text-align: center;
    padding-top: 60px;

    .info {
      color: #30a4fb;
      margin-right: 5px;
    }
  }
}

.aboutUs_title {
  color: #389bf2;
  font-size: 36px;
}
</style>
