export interface KlawiaturaRequestDTO {
    model:string | null;
    rodzaj:RodzajTypeEnum | null;
}

export enum RodzajTypeEnum
{
    membranowa,
    nożycowa,
    mechaniczna,
    optyczna,
    hybrydowa
}
