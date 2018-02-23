import config from '@config';

export function save(toSave: string) {

    localStorage.setItem(config.localStorage.contentKey, toSave);
}

export function load(): string {

    const loaded = localStorage.getItem(config.localStorage.contentKey);
    if (typeof loaded === undefined || loaded === null) {

        return '';
    }

    return loaded!;
}
