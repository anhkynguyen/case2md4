import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;
  @Column({default : ""})
  username: string;
  @Column({default : ""})
  password: string;
  // @Column({default : ""})
  // status: string;
}

