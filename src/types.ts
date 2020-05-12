export enum State {
    Alaska = "AK",
    Alabama = "AL",
    Arkansas = "AR",
    Arizona = "AZ",
    California = "CA",
    Colorado = "CO",
    Connecticut = "CT",
    Delaware = "DE",
    Florida = "FL",
    Georgia = "GA",
    Hawaii = "HI",
    Iowa = "IA",
    Idaho = "ID",
    Illinois = "IL",
    Indiana = "IN",
    Kansas = "KS",
    Kentucky = "KY",
    Louisiana = "LA",
    Massachusetts = "MA",
    Maryland = "MD",
    Maine = "ME",
    Michigan = "MI",
    Minnesota = "MN",
    Missouri = "MO",
    Mississippi = "MS",
    Montana = "MT",
    NorthCarolina = "NC",
    NorthDakota = "ND",
    Nebraska = "NE",
    NewHampshire = "NH",
    NewJersey = "NJ",
    NewMexico = "NM",
    Nevada = "NV",
    NewYork = "NY",
    Ohio = "OH",
    Oklahoma = "OK",
    Oregon = "OR",
    Pennsylvania = "PA",
    RhodeIsland = "RI",
    SouthCarolina = "SC",
    SouthDakota = "SD",
    Tennessee = "TN",
    Texas = "TX",
    Utah = "UT",
    Virginia = "VA",
    Vermont = "VT",
    Washington = "WA",
    Wisconsin = "WI",
    WestVirginia = "WV",
    Wyoming = "WY",
}

export enum StateName {
    AK = "alaska",
    AL = "alabama",
    AR = "arkansas",
    AZ = "arizona",
    CA = "california",
    CO = "colorado",
    CT = "connecticut",
    DE = "delaware",
    FL = "florida",
    GA = "georgia",
    HI = "hawaii",
    IA = "iowa",
    ID = "idaho",
    IL = "illinois",
    IN = "indiana",
    KS = "kansas",
    KY = "kentucky",
    LA = "louisiana",
    MA = "massachusetts",
    MD = "maryland",
    ME = "maine",
    MI = "michigan",
    MN = "minnesota",
    MO = "missouri",
    MS = "mississippi",
    MT = "montana",
    NC = "northcarolina",
    ND = "northdakota",
    NE = "nebraska",
    NH = "newhampshire",
    NJ = "newjersey",
    NM = "newmexico",
    NV = "nevada",
    NY = "newyork",
    OH = "ohio",
    OK = "oklahoma",
    OR = "oregon",
    PA = "pennsylvania",
    RI = "rhodeisland",
    SC = "southcarolina",
    SD = "southdakota",
    TN = "tennessee",
    TX = "texas",
    UT = "utah",
    VA = "virginia",
    VT = "vermont",
    WA = "washington",
    WI = "wisconsin",
    WV = "westvirginia",
    WY = "wyoming",
}

export interface Precinct {
    name: string;
    id: PrecinctID;
    vertices: Coordinate[];
}

export interface Coordinate {
    lat: Latitude;
    lng: Longitude;
}

export enum JobType {
    StartMap = "StartMap",
    ScoreMap = "ScoreMap",
}

export type PrecinctID = number;
export type DistrictID = number;
export type MapID = number;
export type GUID = string;
export type Latitude = number;
export type Longitude = number;
