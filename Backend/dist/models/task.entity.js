var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Priority } from "./enums/Priority.js";
import { Status } from "./enums/Status.js";
let Task = class Task {
    id;
    title;
    date;
    description;
    priority;
    status;
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    Column({
        type: 'text',
    }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    Column({
        type: 'varchar',
        length: 255,
    }),
    __metadata("design:type", String)
], Task.prototype, "date", void 0);
__decorate([
    Column({
        type: 'longtext',
    }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: Priority,
        default: Priority.normal
    }),
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: Status,
        default: Status.todo
    }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
Task = __decorate([
    Entity()
], Task);
export { Task };
