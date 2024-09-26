import { Column, DataType, Model, Table } from "sequelize-typescript";

interface HumanCategoryAttribute {
    name: string;
    start_age: number;
    finish_age: number;
    gender: number;
}

@Table({tableName:"human_category"})
export class HumanCategory extends Model<HumanCategory, HumanCategoryAttribute>{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number
    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    name: string;
    @Column({
        type:DataType.SMALLINT
    })
    start_age: number;
    @Column({
        type:DataType.SMALLINT
    })
    finish_age: number;
    @Column({
        type: DataType.SMALLINT
    })
    gender: number;
}