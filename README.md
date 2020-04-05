# feedback-iot

## Instructions

Note: Docker and Docker-compose are assumed that are already installed.

1. `git clone git@github.com:diogotorres97/feedback-iot.git`
2. `cd feedback-iot`
3. `git clone git@github.com:diogotorres97/nodered-feedback.git`
4. `git clone git@github.com:diogotorres97/sensors-fake-server.git`
5. `docker-compose up`

## How to use node-red

1. Access `http://localhost:1880`
1. Import flows from `flows` folder
 * `simple.json` - Simple flow where are injected random mensagens to handle an heat system
 * `mqtt.json` - Simple flow that subscribes and publishes topics to handle an heat system
2. Deploy

## How to use simulator
1. `http://localhost:3000/smart-home/load`
2. `http://localhost:3000/smart-home/start`

or

2. `http://localhost:3000/smart-home/validation/100`

Note: To see the value of an actuator `http://localhost:3000/smart-home/heat-system/command`
Note: To see all actuators `http://localhost:3000/smart-home/actuators`
