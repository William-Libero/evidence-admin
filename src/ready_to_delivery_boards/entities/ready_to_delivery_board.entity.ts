/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class ready_to_delivery_boards {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img2: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img3: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img4: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img5: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img6: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img7: string;

  @Column({
    type: 'longtext',
    nullable: true,
  })
  img8: string;

  @Column()
  type: string;

  @Column()
  size: string;

  @Column()
  width: string;

  @Column()
  fluctuation: string;

  @Column()
  volume: string;

  @Column()
  block: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User with id', this.id);
  }

  @AfterRemove()
  logRemoved() {
    console.log('Removed User with id', this.id);
  }
}
