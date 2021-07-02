import './util/module-alias'
import { Server } from '@overnightjs/core'
import { ForecastController } from './controllers/forecast'
import express, { Application } from 'express'

export class SetupServer extends Server {

    constructor(private port = 3000) {
        super()
    }

    private setupExpress(): void {
        this.app.use(express.json())
    }

    public init(): void {
        this.setupExpress()
        this.setupControllers()
    }

    private setupControllers(): void {
        const forecastController = new ForecastController()

        this.addControllers([forecastController])
    }

    public getApp(): Application {
        return this.app;
    }
}