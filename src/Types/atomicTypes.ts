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

export interface Precinct {
    name: string;
    id: PrecinctID;
    vertices: Cordinate[];
    district: DistrictID;
}

export interface Cordinate {
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
