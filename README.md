# Impulse Application

Impulse is a fully widgetized single page loading app that visualizes big data. 
It is built on Node.js and uses React/Redux for visualizations. 

## Running the Webapp

Ensure that you have installed [Docker Compose](https://docs.docker.com/compose/install/).

Build the application using the following command:

```    
docker-compose build
```

Startup the services individually by running:

```
docker-compose up -d webapp
```

AND

```
docker-compose up -d influxdb
```

Finally the webapp can be run locally using ```npm``` assuming you have [NPM]() and [NodeJS]() installed.

```
npm install
npm run dev
OR
npm run prod
```

Navigate to the webapp dashboard at [http://localhost:8080](http://localhost:8080)

You can now navigate to [http://localhost:8083](http://localhost:8083) to view the InfluxDB console.  Select the "power" database from the dropdown menu.

# Handy Influx Commands

To view a subset of the data in the InfluxDB Admin Console, enter the following query:

```select * from data limit 10```

To select just the energy consumption data (kWh) you can use the following query:

```select USAGE_KWH from data limit 10```

