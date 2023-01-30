import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TagBlog {
    @PrimaryGeneratedColumn()
    idTagBlog: string;
    @Column({default:''})
    idTag :string;
    @Column({default:''})
    idBlog :string;
}
