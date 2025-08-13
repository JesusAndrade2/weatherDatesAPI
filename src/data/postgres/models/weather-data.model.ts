import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class WeatherData extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('numeric', {
    precision: 5,
    scale: 2,
    default: 0,
    comment: 'Temperature in Celsius',
  })
  temperature: number;

  @Column('numeric', {
    default: 0,
    precision: 5,
    scale: 2,
    comment: 'humidity in percentage',
  })
  humidity: number;

  @CreateDateColumn()
  create_at: Date;
}
