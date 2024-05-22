import { IPost } from './i-post';

export interface IArticole {
  posts: IPost[]
  total: number
  skip: number
  limit: number
}
