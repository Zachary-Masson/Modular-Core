import { Colors } from "./types";
export declare class Logger {
    static Enter(): void;
    static Start(): void;
    static Categorie(color: Colors, name: string, subname: string): void;
    static elementOfCategorie(color: Colors, name: string, message: string): void;
    static Error(message: string): void;
    static Success(type: string, message: string): void;
    static Info(message: string): void;
    static Module(moduleName: string, author: string): void;
}
