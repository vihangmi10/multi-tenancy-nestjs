import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn('uuid')
  publicId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
