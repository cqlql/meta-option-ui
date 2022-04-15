import Icon from './src/Icon.vue'
import SvgIcon from './src/SvgIcon.vue'
// import IconPicker from './src/IconPicker.vue';

// !!目前不使用 ---- 使用 svg-sprite-loader
//
// 导入所有的本地 svg
// const req = require.context('@/assets/svg', true, /\.svg$/)
// const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
//   requireContext.keys().map(requireContext)
// requireAll(req)

export { Icon, /* IconPicker, */ SvgIcon }

export default Icon
