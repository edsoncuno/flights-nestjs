export interface CreateFlightDto {
    origin: string;
    destination: string;
    flightNumber: number;
    depart: Date;
    arrive: Date;
    nonstop: boolean
};