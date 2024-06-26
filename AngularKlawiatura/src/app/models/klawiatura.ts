export interface KlawiaturaResponseDTO {
    id:number;
    model:string;
    rodzaj:RodzajTypeEnum;
}

export enum RodzajTypeEnum
{
    membranowa,
    nożycowa,
    mechaniczna,
    optyczna,
    hybrydowa
}

