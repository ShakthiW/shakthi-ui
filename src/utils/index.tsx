import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes)); 
/* 
    Apply clsx and tailwind-merge to the classes passed to the function.
*/

