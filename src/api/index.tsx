import { globalRouters } from '@/router'

export const goto = (path: string) => {
  globalRouters.navigate(path)
}