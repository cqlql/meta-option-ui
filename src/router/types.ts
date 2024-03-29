import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import type { defineComponent } from 'vue'
export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string
  meta: RouteMeta
  component?: Component | string
  components?: Component
  children?: RouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}
