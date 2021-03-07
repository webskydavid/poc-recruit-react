import { atom, selector } from "recoil";
import { IRecruitment, mockData } from "./data";

export class LocalStorageProvider {
    static read = (key: string) => {
        
        if(localStorage.getItem(key) === null){
            LocalStorageProvider.write(key, '');
        }

        return JSON.parse(localStorage.getItem(key) || '[]');
    }

    static write = (key: string, values: any) => {
        localStorage.setItem(key, JSON.stringify(values));
    }

    static remove = (key: string) => {
        localStorage.removeItem(key);
    }

    static clear = (key: string) => {
        localStorage.clear();
    }
}

export const recruitmentList = atom<IRecruitment[]>({
    key: 'recruitmentList',
    default: selector({
        key: 'recruitmentList/default',
        get: () => {
            return LocalStorageProvider.read('recruitmentList');
        }
    })

  });