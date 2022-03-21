<script lang="tsx">
import { defineComponent } from 'vue'
import JSXCompDemo from './JSXCompDemo.vue'

const d = {
  lable: '123',
}

export default defineComponent({
  render() {
    return <JSXCompDemo label={d.lable} />
  },
})
</script>
