import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Property } from "./property.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedule{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({type: "date"})
    date: Date

    @Column({type: "time"})
    hour: Date

    @ManyToOne(() => User, user => user.schedules,
        {eager: true})
    user: User

    @ManyToOne(() => Property, property => property.schedules,
        {eager: true})
    property: Property

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}