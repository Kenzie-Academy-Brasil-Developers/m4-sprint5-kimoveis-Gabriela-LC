import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Exclude } from "class-transformer"
import { Schedule } from "./schedules_users_properties.entity";


@Entity("users")
export class User{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    isAdm: boolean

    @Column({default: true})
    isActive: boolean

    @Column()
    @Exclude()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => Schedule, schedule => schedule.user)
    schedules: Schedule[]


    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}