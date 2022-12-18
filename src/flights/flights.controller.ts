import { Body, Controller, Get, Param, Post, Delete, Patch, Req, Request, Put } from '@nestjs/common';

import { FlightsService } from './flights.service';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';
import { identity } from 'rxjs';

@Controller('flights')
export class FlightsController {

    constructor(private readonly flightService: FlightsService) { }

    @Get()
    findAll(): Promise<Flights[]> {
        return this.flightService.findAll();
    }

    @Post()
    async create(@Body() flight: Flight): Promise<Flights[]> {
        return this.flightService.create(flight);
    }

    @Get(":id")
    async findOne(@Param('id') id): Promise<Flight> {
        return this.flightService.findOne(id);
    }

    @Delete(":id")
    async delete(@Param('id') id): Promise<any> {
        return this.flightService.delete(id);
    }

    @Patch(":id")
    //@Put(":id")
    async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
        flight.id = Number(id);
        return this.flightService.update(flight);
    }

    @Get("query/:orig/:dest")
    async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
        return this.flightService.query(orig, dest);
    }

    @Get("cities/origins")
    getOrigins(): Promise<String[]> {
        return this.flightService.getFlightOrigins();
    }

    @Get("cities/destinations")
    getDestinations(): Promise<String[]> {
        return this.flightService.getFlightDestinations();
    }
}
