import { BaseEntity } from './base/base-entity'

export enum UserPermissions {
  admin = 'ADMIN',
  common = 'COMMON',
}

export interface UserEntity extends BaseEntity {
  name: string
  permission: UserPermissions
}
