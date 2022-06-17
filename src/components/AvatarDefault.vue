<template>
  <i class="dummy"></i>
</template>

<style lang="less" scoped>
.dummy {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background-size: cover;
  font-style: normal;
  font-weight: 600;
  border-radius: 16px;
  background-color: #0871cd;
}

.dummy::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  display: block;
  width: 50%;
  height: 100%;
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 0 16px 16px 0;
}
</style>
