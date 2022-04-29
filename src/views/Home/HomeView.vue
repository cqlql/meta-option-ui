<script lang="ts" setup>
import HomeHeader from './comp/HomeHeader.vue'
import HomeTopBg from './comp/HomeTopBg.vue'
import CopyrightView from '@/layouts/CopyrightView.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import IconFont from '@/components/IconFont/IconFont.vue'
import BgImg from '@/components/BgImg.vue'
</script>
<template class>
  <div>
    <div class="HomeView_bg"> </div>
    <HomeTopBg></HomeTopBg>
    <div class="HomeView">
      <BgImg></BgImg>
      <HomeHeader></HomeHeader>
      <div class="top">
        <h2> <div>Making your trading</div> <div>dream a reality</div> </h2>
        <div class="des">Shine on the global markets</div>

        <div class="join-btn">
          <a-button type="primary">Join Now</a-button>
        </div>
      </div>
      <div class="market-bar">
        <div class="item">
          <span class="label">USDJPY : </span>
          <span class="value down">109.8472</span>
        </div>
        <div class="item">
          <span class="label">GBPUSD : </span>
          <span class="value">1.3928</span>
        </div>

        <div class="item">
          <span class="label">EURJPY : </span>
          <span class="value">129.8579</span>
        </div>
        <div class="item">
          <span class="label">USDJPY : </span>
          <span class="value">129.8579</span>
        </div>
        <div class="item">
          <span class="label">GBPUSD : </span>
          <span class="value">129.8579</span>
        </div>
        <div class="item">
          <span class="label">EURJPY : </span>
          <span class="value">129.8579</span>
        </div>
      </div>

      <div class="content">
        <h3>How it work</h3>
        <div class="box">
          <div class="title">
            <IconFont name="give-money"></IconFont>
            <span>Deposit</span>
          </div>
          <div class="text">
            Open an account and add funds. We work with trusted payment systems.
            Your safety and security is our priority first. Deposit funds and
            enable trading function.
          </div>
        </div>
        <div class="box">
          <div class="title">
            <IconFont name="chart-up"></IconFont>
            <span>Trade</span>
          </div>
          <div class="text">
            Trade on global market products from commodities, to forex and
            cryptocurrencies. Use technical analysis and trade the news.
          </div>
        </div>
        <div class="box">
          <div class="title">
            <IconFont name="withdraw-money"></IconFont>
            <span>Withdraw</span>
          </div>
          <div class="text">
            Get funds easily to your bank card or bank account or e-wallet.
            Trade with real-time assistance of our certified trade and market
            experts for progressive earnings. Withdrawal convience
          </div>
        </div>

        <div class="Feautures">
          <div class="title">
            <Icon icon="clarity:favorite-line"></Icon>
            Feautures</div
          >
          <div class="cont">
            We provide fastest trading using modern technologies. No delays in
            order executions and most accurate quotes. Our trading platform is
            available around the clock and on weekends. Meta Option customer
            service is available 24/7. We are continuously adding new financial
            instruments.
          </div>

          <div class="list-box">
            <ul>
              <li>
                Technical analysis tools : 4 chart types, 8 indicators, trend
                lines
              </li>
              <li>
                Social trading: watch deals across the globe or trade with your
                friends Chart presentation, Technical analysis, and trade
                oparations
              </li>
              <li>
                Our traders can : Order, close out and view reports and analysis
                data. Traders can also set stopping points and profit points, in
                order to maintain all-day market monitoring and ensure maximum
                profit.
              </li>
            </ul>
          </div>
        </div>

        <div class="Feautures">
          <div class="title">
            <Icon icon="ant-design:safety-outlined"></Icon>
            Trusted</div
          >
          <div class="cont">
            Meta Option is the new generation in online trading industry.
            Steady, secured and trusted software recognized by certified
            experts. Powerful yet user-friendly interface. Easy to use platform,
            Be assured of using a complicated-free interface.
          </div>
        </div>
        <div class="btm">
          <div class="title"> Global trading platform </div>
          <div class="text">
            <div> People from different countries trade at Meta Option </div>
            <div>
              New generation trading platform. Most popular international
              trading platform for investment.
            </div>
          </div>
        </div>
      </div>
      <footer class="home-footer">
        <div class="box">
          Trading and investing involves significant level of risk and is not
          suitable and/or appropriate for all clients. Please make sure you
          carefully consider your investment objectives, level of experience and
          risk appetite before buying or selling. Buying or selling entails
          financial risks and could result in a partial or complete loss of your
          funds, therefore, you should not invest funds you cannot afford to
          lose. You should be aware of and fully understand all the risks
          associated with trading and investing, and seek advice from an
          independent financial advisor if you have any doubts.
        </div>
      </footer>
      <CopyrightView></CopyrightView>
    </div>
  </div>
</template>

<style lang="less" scoped>
.HomeView_bg {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: #262d3d;
}

.HomeView {
  position: relative;
  min-width: 1024px;

  .top {
    padding: 240px 72px 0;

    h2 {
      line-height: 78px;
      color: #fff;
      font-size: 45px;
      margin-bottom: 22px;
    }

    .des {
      // line-height: 1;
      font-size: 27px;
    }

    .join-btn {
      margin-top: 38px;
    }

    .ant-btn {
      width: 260px;
      height: 62px;
      font-size: 23px;
    }
  }

  .market-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 52px;
    margin: 0 38px;
    background-color: #171e2d;
    box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
    border-radius: 5px;
    border: solid 2px #424b60;
    font-size: 18px;
    margin-top: 145px;

    .value {
      color: #fa4642;
    }

    .value.down {
      color: #04af58;
    }
  }

  .content {
    // padding: 0 285px;
    position: relative;
    width: 870px;
    margin: 0 auto;

    h3 {
      color: #389bf2;
      font-size: 36px;
      text-align: center;
      margin-top: 80px;
      margin-bottom: 70px;
    }

    .box {
      background-color: #263042;
      box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: @border-radius-base;
      border: solid 1px #424b60;
      padding: 18px 80px 46px;

      & + .box {
        margin-top: 80px;
      }

      .title {
        line-height: 68px;
        font-size: 23px;

        span {
          vertical-align: middle;
        }
      }

      .iconfont {
        color: #30a4fb;
        font-size: 30px;
        margin-right: 20px;
      }

      .text {
        line-height: 38px;
        font-size: 18px;
      }
    }

    .Feautures {
      .app-iconify {
        color: #30a4fb;
        font-size: 38px;
        margin-right: 5px;
      }

      .title {
        line-height: 48px;
        font-size: 36px;
        padding-top: 70px;
        padding-bottom: 44px;
        text-align: center;
      }

      .cont {
        line-height: 30px;
        color: #c3c5ca;
      }

      .list-box {
        background-color: #171e2d;
        box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
        border-radius: 0 @border-radius-base @border-radius-base 0;
        line-height: 30px;
        padding: 40px 80px 40px 80px;
        margin-top: 50px;
        color: #c3c5ca;
      }

      li {
        &::before {
          content: '';
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #389bf2;
          border-radius: 8px;
          box-shadow: 0 0 8px 0 #389bf2;
          margin-right: 15px;
          vertical-align: middle;
        }
      }
    }

    .btm {
      .title {
        padding: 46px 0 34px;
        font-size: 45px;
        text-align: center;
      }

      .text {
        line-height: 38px;
        color: #c3c5ca;
        font-size: 18px;
        text-align: center;
      }
    }
  }

  .home-footer {
    margin: 70px auto 0;
    max-width: 1000px;

    .box {
      box-shadow: 0 8px 44px 0 rgba(0, 0, 0, 0.24);
      border-radius: 5px;
      border: solid 2px #424b60;
      padding: 30px 45px;
      color: #c3c5ca;
    }
  }
}
</style>
