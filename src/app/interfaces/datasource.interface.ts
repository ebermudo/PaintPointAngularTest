import { Country } from "./country.interface";
import { Language } from "./language.interface";
import { Sex } from "./sex.interface";

export interface DataSource {
    sex: Sex[],
    language: Language[],
    country: Country[]
}