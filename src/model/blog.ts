import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
  @PrimaryGeneratedColumn()
  idBlog: number;
  @Column({ default: "" })
  name: string;
  @Column({ default: "" })
  content: string;
  @Column({ default: "" })
  image: string;
  // @Column({default : 1})
  // idUser : string
  @Column()
  tag: string;
}
