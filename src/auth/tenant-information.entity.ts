import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TenantInformation extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn('uuid')
  publicId: string;

  @Column()
  tenantName: string;

  @Column()
  schema: string;
}
