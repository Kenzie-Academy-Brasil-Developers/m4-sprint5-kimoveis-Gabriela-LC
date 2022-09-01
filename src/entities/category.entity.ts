import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'
import { Property } from "./property.entity";

@Entity("categories")
export class Category{

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column({unique: true})
    name: string

    @OneToMany(() => Property, property => property.category, {
        eager: true
    }) properties: Property[]

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
}