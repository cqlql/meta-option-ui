<script lang="ts" setup>
import BoxView from './comp/BoxView.vue'
import LabelValue from '@/components/LabelValue.vue'
import DemoContainer from './comp/DemoContainer.vue'
import ButtonGreen from '@/components/Button/ButtonGreen.vue'
import CheckboxPlusDemo from '@/components/CheckboxPlus/CheckboxPlusDemo.vue'
import FormDemo from './comp/FormDemo.vue'
import FormS2Demo from './comp/FormS2Demo.vue'
import LabelInput from '@/components/LabelInput.vue'
</script>
<template>
  <DemoContainer class="layout-main">
    <BoxView title="LabelInput">
      <LabelInput title="label" value="100,000"> </LabelInput>
    </BoxView>
    <BoxView title="ant-form">
      <FormDemo> </FormDemo>
    </BoxView>
    <BoxView title="ant-form-s2">
      <FormS2Demo> </FormS2Demo>
    </BoxView>
    <BoxView title="CheckboxPlus">
      <CheckboxPlusDemo> </CheckboxPlusDemo>
    </BoxView>
    <BoxView title="ButtonGreen">
      <ButtonGreen></ButtonGreen>
    </BoxView>
    <BoxView title="ant-input">
      <a-input allowClear placeholder="请输入"></a-input>
    </BoxView>
    <BoxView title="ant-textarea">
      <a-textarea allowClear placeholder="请输入"></a-textarea>
    </BoxView>
    <BoxView title="LabelValue">
      <LabelValue></LabelValue>
    </BoxView>

    <BoxView title="ant-checkbox">
      <a-checkbox :checked="true">Checkbox</a-checkbox>
      <a-checkbox :checked="false">Checkbox</a-checkbox>
    </BoxView>
  </DemoContainer>
</template>
