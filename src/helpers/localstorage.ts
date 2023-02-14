const localStoragePrefix = "react-movie/"

export enum LocalStorageKey {
    likes= "likes",
}
export const getLocalStorageItem = (key: LocalStorageKey): string | null => {
    return localStorage.getItem(localStoragePrefix+ key);
}

export const setLocalStorageItem = (key: LocalStorageKey, value: any): void => {
    localStorage.setItem(localStoragePrefix + key, JSON.stringify(value));
}

export const getLocalStorageLikes = (): string[] => {
    return JSON.parse(getLocalStorageItem(LocalStorageKey.likes) || "[]");
}

export const toggleLocalStorageLike = (value: string): string[] => {
    let masLikes: string[] = getLocalStorageLikes();
    if(!masLikes) {
        setLocalStorageItem(LocalStorageKey.likes, [value]);
        return [value];
    }

    const i = masLikes.findIndex((val) => val === value);

    if(i !== -1) {
        masLikes = masLikes.filter(el => el !== value);
    }else {
        masLikes.push(value);
    }

    setLocalStorageItem(LocalStorageKey.likes, masLikes);
    return masLikes;
}

