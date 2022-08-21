<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import LabelValue from '@/components/LabelValue.vue'
import DemoContainer from './comp/DemoContainer.vue'
import CheckboxPlusDemo from '@/components/CheckboxPlus/CheckboxPlusDemo.vue'
import FormDemo from './comp/FormDemo.vue'
import FormS2Demo from './comp/FormS2Demo.vue'
import LabelInput from '@/components/LabelInput.vue'
import ModalDemo from './comp/ModalDemo.vue'
import QuestionTextDemo from './comp/QuestionTextDemo.vue'
import CardBox from '@/components/CardBox.vue'
import BankAccount from '../Finance/comp/BankAccount.vue'
import EnterAmout from '../Finance/comp/EnterAmout.vue'
import CheckboxPayment from '../Finance/comp/CheckboxPayment.vue'
import CheckboxPaymentCard from '../Finance/comp/CheckboxPaymentCard.vue'
import Icon from '@/components/Icon/src/Icon.vue'
import IconFontDemo from '@/components/IconFont/IconFontDemo.vue'
import AvatarDemo from './comp/AvatarDemo.vue'
import ValueMulti from '../AITrading/components/ValueMulti.vue'
import TextTag from '../AITrading/components/TextTag.vue'
import TitleBox from '@/components/TitleBox.vue'
import MenuBtn from '@/components/MenuBtn.vue'
import SvgIcon from '@/components/Icon/src/SvgIcon.vue'
import ValueDes from '../AITrading/components/ValueDes.vue'
import { Rate as ARate } from 'ant-design-vue'
</script>
<template>
  <DemoContainer class="layout-main">
    <BoxView title="Ai Trading 小组件">
      <ValueMulti no="1" text="Fx Scalpers">
        <TextTag color="yellow">BTC</TextTag>
        <TextTag color="green">USDT</TextTag>
        <TextTag>i</TextTag>
        <SvgIcon name="trading-history" style="font-size: 18px"></SvgIcon>
      </ValueMulti>

      <ValueDes v="0.21048199 BTC" d="≈ 6,838 USD"> </ValueDes>
      <ValueDes v="3.0106927 BTC" d="≈ 97,808 USD"></ValueDes>

      <span class="green-color">+57.63%</span>

      <span class="red-color">+57.63%</span>

      <a-rate class="rate-blue" :value="2" />
    </BoxView>
    <BoxView title="TitleBox">
      <TitleBox title="Currency">
        <input style="background: #000" />
      </TitleBox>
    </BoxView>
    <BoxView title="MenuBtn">
      <MenuBtn :active="false"></MenuBtn>
    </BoxView>
    <BoxView title="avatar">
      <AvatarDemo></AvatarDemo>
    </BoxView>
    <BoxView title="a-modal">
      <ModalDemo></ModalDemo>
    </BoxView>
    <BoxView title="IconFont">
      <IconFontDemo></IconFontDemo>
    </BoxView>
    <BoxView title="IconSvg">
      <Icon class="text-8xl" icon="trading-history|svg"></Icon>
    </BoxView>
    <BoxView title="Icon">
      <Icon class="text-8xl" icon="material-symbols:bookmark-outline"></Icon>
      <Icon class="text-8xl" icon="majesticons:adjustments"></Icon>
      <Icon class="text-8xl" icon="ant-design:share-alt-outlined"></Icon>
      <Icon class="text-8xl" icon="ant-design:wechat-outlined"></Icon>
      <Icon class="text-8xl" icon="bxl:telegram"></Icon>
    </BoxView>
    <BoxView title="BankAccount">
      <BankAccount></BankAccount>
    </BoxView>
    <BoxView title="CardBox">
      <CardBox title="CardBox"> Content </CardBox>
    </BoxView>
    <BoxView title="EnterAmout">
      <EnterAmout style="min-width: 375px"></EnterAmout>
    </BoxView>
    <BoxView title="QuestionText">
      <QuestionTextDemo></QuestionTextDemo>
    </BoxView>

    <BoxView title="LabelInput">
      <LabelInput title="label" value="100,000"> </LabelInput>
    </BoxView>
    <BoxView title="ant-form vertical">
      <FormDemo> </FormDemo>
    </BoxView>
    <BoxView title="ant-form s2">
      <FormS2Demo> </FormS2Demo>
    </BoxView>
    <BoxView title="CheckboxPaymentCard">
      <CheckboxPaymentCard></CheckboxPaymentCard>
    </BoxView>
    <BoxView title="CheckboxPayment">
      <CheckboxPayment></CheckboxPayment>
    </BoxView>
    <BoxView title="CheckboxPlus">
      <CheckboxPlusDemo> </CheckboxPlusDemo>
    </BoxView>
    <BoxView title="a-button primary2 big">
      <!-- <ButtonGreen></ButtonGreen> -->
      <a-button type="primary2" class="big" block>Submit</a-button>
    </BoxView>
    <BoxView title="ant-input">
      <a-input allowClear placeholder="请输入"></a-input>
    </BoxView>
    <BoxView title="ant-textarea">
      <a-textarea allowClear placeholder="请输入"></a-textarea>
    </BoxView>
    <BoxView title="LabelValue">
      <LabelValue title="label">value</LabelValue>
    </BoxView>

    <BoxView title="ant-checkbox">
      <a-checkbox :checked="true">Checkbox</a-checkbox>
      <a-checkbox>Checkbox</a-checkbox>
    </BoxView>
  </DemoContainer>
</template>
