import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedules_users_properties.entity";

@Entity("properties")
export class Property{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({default: false})
    sold: boolean

    @Column({type: "decimal", precision: 12, scale: 2, default: 0})
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(() => Category, category => category.properties)
    category: Category

    @OneToOne(() => Address, {
        eager:true
    })@JoinColumn()
    address: Address

    @OneToMany(() => Schedule, schedule => schedule.property)
    schedules: Schedule[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}
