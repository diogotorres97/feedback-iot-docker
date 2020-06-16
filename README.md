# feedback-iot-docker

The stack used in the development and tasking of my dissertation concerning the Increasing of feedback in IoT development, more specifically in Node-RED.


## Containers description
- The **enhanced Node-RED**
- The **sensor/actuator simulator** 
- A **Mosquitto** broker.


## Instructions

Note: Docker and Docker-compose are assumed that are already installed.

1. `git clone git@github.com:diogotorres97/feedback-iot.git`
2. `cd feedback-iot-docker`
3. `git clone git@github.com:diogotorres97/nodered-cauldron.git`
4. `git clone git@github.com:diogotorres97/simulator-iot-devices.git`
5. `docker-compose up`

## How to use Node-RED

1. Access the modified Node-RED version at `http://localhost:1880
1. Import flows from `flows` folder
 * `simple.json` - Simple flow where are injected random mensagens to handle an heat system
 * `mqtt.json` - Simple flow that subscribes and publishes topics to handle an heat system
3. Deploy

## How to use simulator
1. `http://localhost:3000/smart-home/load`
2. `http://localhost:3000/smart-home/start`

or

2. `http://localhost:3000/smart-home/validation/100`

Note: To see the value of an actuator `http://localhost:3000/smart-home/heat-system/command`

Note: To see all actuators `http://localhost:3000/smart-home/actuators`


More information about the simulator's use is available: `https://github.com/diogotorres97/simulator-iot-devices`